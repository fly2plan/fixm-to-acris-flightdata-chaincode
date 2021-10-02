"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEmptyKeyFields = exports.removeEmptyArrays = exports.removeEmptyObject = exports.removeSingleArray = exports.removeEmptyFields = exports.removeTag = exports.removeUnwantedKeys = void 0;
const constants_1 = require("./constants");
const objecthandler_1 = require("./objecthandler");
exports.removeUnwantedKeys = (dataValue) => {
    constants_1.KEYS_REMOVABLE.forEach(key => {
        if (objecthandler_1.keyPresent(dataValue, key)) {
            delete dataValue[key];
        }
    });
};
exports.removeTag = (objValue) => {
    Object.keys(objValue).forEach(key => {
        constants_1.TAGS_REMOVABLE.forEach(tagValue => {
            if (key.includes(tagValue)) {
                const newKey = key.replace(tagValue, '');
                objValue[newKey] = objValue[key];
                delete objValue[key];
            }
        });
    });
};
exports.removeEmptyFields = (obj) => {
    Object.keys(obj).forEach(key => {
        if (!/\S/.test(obj[key])) {
            delete obj[key];
        }
    });
};
exports.removeSingleArray = (obj) => {
    Object.keys(obj).forEach(key => {
        if (Array.isArray(obj[key])) {
            if (obj[key].length === 1) {
                obj[key] = obj[key][0];
            }
        }
    });
};
exports.removeEmptyObject = (key, value, obj) => {
    if (objecthandler_1.isEmpty(value)) {
        delete obj[key];
    }
};
exports.removeEmptyArrays = (key, value, obj) => {
    if (Array.isArray(value)) {
        if (value.length === 0) {
            delete obj[key];
        }
    }
};
exports.removeEmptyKeyFields = (obj) => {
    Object.keys(obj).forEach(key => {
        if (objecthandler_1.isEmpty(obj[key])) {
            delete obj[key];
        }
    });
};
//# sourceMappingURL=filters.js.map