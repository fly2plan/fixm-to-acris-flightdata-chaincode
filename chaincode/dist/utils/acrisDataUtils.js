"use strict";
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
    static async iteratorToHistory(iterator) {
        const results = [];
        let res;
        while (true) {
            res = await iterator.next();
            if (res.value && res.value.value) {
                const flight = this.bufferToObject(res.value.value);
                const parsedItem = {
                    flightData: flight,
                    key: res.value.key,
                    timestamp: res.value.timestamp,
                };
                results.push(parsedItem);
            }
            if (res.done) {
                console.log('end of data');
                await iterator.close();
                break;
            }
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