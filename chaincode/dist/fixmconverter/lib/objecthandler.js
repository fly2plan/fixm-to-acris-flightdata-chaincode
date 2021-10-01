"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyPresent = exports.isEmpty = exports.generateCollectionFromObject = exports.fetchDataFromPath = exports.JSONify = exports.getType = void 0;
const util_1 = require("../assets/util");
// tslint:disable-next-line: no-var-requires
const IterateObject = require("iterate-object");
exports.getType = (object) => {
    if (Array.isArray(object)) {
        return 'array';
    }
    else {
        return typeof object;
    }
};
exports.JSONify = (data) => {
    return JSON.parse(JSON.stringify(data));
};
const getDataFromObject = (dataObject, Key) => {
    Key = verifiedKey(dataObject, Key);
    if (Key === null) {
        return '';
    }
    let keyValue = dataObject[Key];
    switch (typeof keyValue) {
        case 'object':
            if (Array.isArray(keyValue)) {
                keyValue = keyValue[0];
            }
            else {
                keyValue = exports.JSONify(keyValue);
            }
            break;
        case 'undefined':
            console.error(`The data for key : ${Key} is undefined, setting empty value`);
            keyValue = '';
    }
    return keyValue;
};
exports.fetchDataFromPath = (dataObj, keyList) => {
    keyList.forEach(key => {
        dataObj = getDataFromObject(dataObj, key);
    });
    if (Array.isArray(dataObj)) {
        dataObj = dataObj[0];
    }
    return dataObj;
};
const verifiedKey = (dataObj, key) => {
    if (!Array.isArray(dataObj)) {
        if (dataObj.hasOwnProperty(key)) {
            return key;
        }
        else {
            return tryAlternateKey(key);
        }
    }
};
const tryAlternateKey = (key) => {
    const altKeys = util_1.getAlternative();
    if (altKeys.hasOwnProperty(key)) {
        return altKeys[key];
    }
    else {
        return null;
    }
};
exports.generateCollectionFromObject = (collectionObject, Key, collectionDetails, iterObj) => {
    let CollectObj;
    const collectionKeySet = collectionDetails.keys;
    let collectionBase = collectionDetails.base;
    if (iterObj !== '') {
        IterateObject([iterObj], (value) => {
            switch (exports.getType(value)) {
                case 'object':
                    collectionBase = verifiedKey(value, collectionBase);
                    if (collectionBase !== null) {
                        CollectObj = value[collectionBase];
                        collectionKeySet.forEach((key) => {
                            CollectObj = collectKeys(CollectObj, key);
                        });
                        collectionObject[Key] = [CollectObj];
                        break;
                    }
                    else {
                        collectionObject[Key] = [];
                        break;
                    }
                case 'array':
                    exports.generateCollectionFromObject(collectionObject, Key, collectionDetails, value);
            }
        });
    }
    else {
        collectionObject[Key] = [];
    }
};
const collectKeys = (obj, Pkey) => {
    const objectLst = [];
    IterateObject(obj, (value) => {
        switch (exports.getType(value)) {
            case 'object':
                Object.keys(value).forEach(key => {
                    if (key === Pkey) {
                        objectLst.push(value[key][0]);
                    }
                });
        }
    });
    obj = objectLst;
    return obj;
};
exports.isEmpty = (obj) => {
    // tslint:disable-next-line: prefer-const
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};
exports.keyPresent = (srcObj, keyValue) => {
    return srcObj.hasOwnProperty(keyValue);
};
//# sourceMappingURL=objecthandler.js.map