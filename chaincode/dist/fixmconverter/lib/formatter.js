"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatObject = void 0;
/* eslint @typescript-eslint/no-var-requires: "off" */
const objecthandler_1 = require("./objecthandler");
const FILTER = require("./filters");
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