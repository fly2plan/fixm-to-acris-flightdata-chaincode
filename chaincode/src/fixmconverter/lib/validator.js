"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../assets/util");
const winston_1 = __importDefault(require("winston"));
const objecthandler_1 = require("./objecthandler");
const constants_1 = require("./constants");
// tslint:disable-next-line: no-var-requires
const IterateObject = require("iterate-object");
const logger = winston_1.default.createLogger({
    'transports': [
        new winston_1.default.transports.Console()
    ]
});
const formatAirportFacility = (obj) => {
    try {
        const iataCode = obj.extensions.AirportFacility.iataCode;
        if (iataCode !== "") {
            obj.extensions.AirportFacility.IATAIdentifier = iataCode;
            delete obj.extensions.AirportFacility.iataCode;
        }
    }
    catch (e) {
        logger.error(`Undefined Property Error : ${e}`);
    }
};
exports.formatFlightNumber = (obj) => {
    const icaoCode = obj.flightNumber.airlineCode;
    const iataCode = exports.toIATA(icaoCode.replace(/[0-9]/g, ''));
    if (!iataCode) {
        obj.flightNumber.airlineCode = icaoCode.replace(/[0-9]/g, '');
    }
    else {
        obj.flightNumber.airlineCode = iataCode;
    }
    obj.flightNumber.trackNumber = icaoCode.replace(/\D/g, '');
    if (obj.flightNumber.trackNumber === '') {
        logger.warn("Cannot Detect Track Number");
    }
    return obj;
};
exports.formatIcaoCodes = (dataValue) => {
    let iataData;
    Object.keys(dataValue).forEach(key => {
        if (key.toLowerCase().includes("icao")) {
            const icaoData = dataValue[key];
            switch (objecthandler_1.getType(icaoData)) {
                case 'string':
                    iataData = exports.toIATA(icaoData);
                    break;
                case 'array':
                    const iataArray = [];
                    if (icaoData.length > 0) {
                        icaoData.forEach((element) => {
                            iataArray.push(exports.toIATA(element));
                        });
                        iataData = iataArray;
                        // if single entry array, trat it as string
                        if (iataArray.length === 1) {
                            dataValue[key] = icaoData[0];
                            iataData = iataArray[0];
                        }
                    }
                    else {
                        iataData = [];
                    }
                    break;
            }
            dataValue[key.replace(/icao/ig, "iata")] = iataData;
        }
        else if (constants_1.ICAO_KEYS.includes(key)) {
            if (typeof dataValue[key] !== 'object') {
                dataValue[key] = exports.toIATA(dataValue[key]);
            }
        }
    });
};
exports.convertICAO = (obj) => {
    IterateObject(obj, (value) => {
        const type = objecthandler_1.getType(value);
        switch (type) {
            case 'object':
                exports.formatIcaoCodes(value);
                break;
            case 'array':
                exports.convertICAO(value);
                break;
        }
    });
    return obj;
};
exports.validateObject = (obj) => {
    obj = exports.convertICAO(obj);
    exports.formatFlightNumber(obj);
    formatAirportFacility(obj);
    return obj;
};
exports.toIATA = (icaoCode) => {
    const codeList = util_1.getIATA();
    let IATAcode = codeList[icaoCode];
    if (IATAcode === undefined) {
        logger.warn(`Cannot find the IATA code to the corresponding ICAO Code : ${icaoCode} Setting empty value`);
        IATAcode = '';
    }
    return IATAcode;
};
//# sourceMappingURL=validator.js.map