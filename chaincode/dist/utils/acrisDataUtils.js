"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcrisDataHelper = void 0;
class AcrisDataHelper {
    static getUniqueKey(flightData) {
        let flightKey = '';
        try {
            const flightNumber = this.getDataFromAcris(flightData, ['flightNumber', 'trackNumber']);
            let originDate = this.getDataFromAcris(flightData, ['originDate']);
            if (originDate === null) {
                originDate = this.getDataFromAcris(flightData, ['departure', 'estimated']);
            }
            const departureAirport = this.getDataFromAcris(flightData, ['departureAirport']);
            let flightCode = this.getDataFromAcris(flightData, ['operatingAirline', 'iataCode']);
            if (flightCode === null) {
                flightCode = this.getDataFromAcris(flightData, ['operatingAirline', 'icaoCode']);
            }
            flightKey = originDate + departureAirport + flightCode + flightNumber;
            console.log(originDate, departureAirport, flightCode);
        }
        catch (error) {
            console.error(error);
        }
        if (!flightKey) {
            console.error('Key Value is empty');
        }
        return flightKey;
    }
    static serializeData(flightData) {
        return Buffer.from(JSON.stringify(flightData));
    }
    static getDataFromAcris(flightData, iterateKeys) {
        let dataElement = flightData;
        iterateKeys.forEach(element => {
            console.log(`data element for ${element} = ${dataElement[element]}`);
            if (dataElement[element] === undefined) {
                console.warn(`Undefined Value : value of ${element} is undefined`);
                dataElement = null;
                return dataElement;
            }
            else {
                dataElement = dataElement[element];
            }
        });
        return dataElement;
    }
    static async iteratorToHistory(rawData) {
        var e_1, _a;
        const promiseOfIterator = rawData;
        const results = [];
        try {
            for (var promiseOfIterator_1 = __asyncValues(promiseOfIterator), promiseOfIterator_1_1; promiseOfIterator_1_1 = await promiseOfIterator_1.next(), !promiseOfIterator_1_1.done;) {
                const keyMod = promiseOfIterator_1_1.value;
                const resp = {
                    timestamp: keyMod.timestamp,
                    txid: keyMod.txId
                };
                if (keyMod.isDelete) {
                    resp.value = 'KEY DELETED';
                }
                else {
                    resp.data = keyMod.value;
                }
                results.push(resp);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (promiseOfIterator_1_1 && !promiseOfIterator_1_1.done && (_a = promiseOfIterator_1.return)) await _a.call(promiseOfIterator_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return results;
    }
    static bufferToObject(buffer) {
        if (buffer === null) {
            return null;
        }
        const bufferString = buffer.toString('utf8');
        if (bufferString.length <= 0) {
            return null;
        }
        try {
            return JSON.parse(bufferString);
        }
        catch (err) {
            console.error('Error parsing buffer to JSON', bufferString);
            return null;
        }
    }
}
exports.AcrisDataHelper = AcrisDataHelper;
//# sourceMappingURL=acrisDataUtils.js.map