"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint @typescript-eslint/no-var-requires: "off" */
const objecthandler_1 = require("./objecthandler");
const FILTER = __importStar(require("./filters"));
/* tslint:disable no-var-requires */
const IterateObject = require("iterate-object");
const setTextValue = (dataValue) => {
    if (objecthandler_1.keyPresent(dataValue, "_")) {
        dataValue.value = dataValue._;
        delete dataValue._;
    }
};
exports.formatObject = (formatObj) => {
    IterateObject(formatObj, (value, name) => {
        const type = objecthandler_1.getType(value);
        switch (type) {
            case 'object':
                setTextValue(value);
                FILTER.removeUnwantedKeys(value);
                FILTER.removeTag(value);
                FILTER.removeSingleArray(value);
                FILTER.removeEmptyFields(value);
                FILTER.removeEmptyArrays(name, value, formatObj);
                FILTER.removeEmptyObject(name, value, formatObj);
            case 'array':
                exports.formatObject(value);
        }
    });
    FILTER.removeEmptyKeyFields(formatObj);
    return formatObj;
};
//# sourceMappingURL=formatter.js.map