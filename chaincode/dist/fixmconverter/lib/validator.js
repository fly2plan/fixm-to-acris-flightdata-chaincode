"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toIATA = exports.validateObject = exports.convertICAO = exports.formatIcaoCodes = exports.formatFlightNumber = void 0;
const util_1 = require("../assets/util");
const objecthandler_1 = require("./objecthandler");
const constants_1 = require("./constants");
// tslint:disable-next-line: no-var-requires
const IterateObject = require("iterate-object");
const formatAirportFacility = (obj) => {
    try {
        const iataCode = obj.extensions.AirportFacility.iataCode;
        if (iataCode !== "") {
            obj.extensions.AirportFacility.IATAIdentifier = iataCode;
            delete obj.extensions.AirportFacility.iataCode;
        }
    }
    catch (e) {
        console.error(`Undefined Property Error : ${e}`);
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
        IATAcode = '';
    }
    return IATAcode;
};
//# sourceMappingURL=validator.js.map