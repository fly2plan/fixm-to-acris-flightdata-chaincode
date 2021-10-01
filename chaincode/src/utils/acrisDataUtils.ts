
import { AcrisDataHistory } from '../model/acris-flight-data';

export class AcrisDataHelper {
    public static getUniqueKey(flightData: object ) {
        let flightKey = '';
        try {
            const flightNumber = this.getDataFromAcris(flightData,['flightNumber','trackNumber']);
            let originDate = this.getDataFromAcris(flightData,['originDate']);
            if(originDate === null){
                originDate = this.getDataFromAcris(flightData,['departure','estimated']);
            }
            const departureAirport = this.getDataFromAcris(flightData,['departureAirport']);
            let flightCode = this.getDataFromAcris(flightData,['operatingAirline','iataCode']);
            if(flightCode === null){
                flightCode =this.getDataFromAcris(flightData,['operatingAirline','icaoCode']);
            }
            flightKey = originDate+departureAirport+flightCode+flightNumber;
            console.log(originDate,departureAirport,flightCode);
        } catch (error) {
            console.error(error);
        }
        if(!flightKey){
            console.error('Key Value is empty');
        }
        return flightKey;

    }
    public static serializeData(flightData: object): Buffer {
        return Buffer.from(JSON.stringify(flightData));
    }

    public static getDataFromAcris(flightData: any,iterateKeys:any): any {
        let dataElement = flightData;
        iterateKeys.forEach(element => {
            console.log(`data element for ${element} = ${dataElement[element]}`);
            if(dataElement[element] === undefined){
                console.warn(`Undefined Value : value of ${element} is undefined`);
                dataElement = null;
                return dataElement;
            }else{
                dataElement = dataElement[element];
            }
        });
        return dataElement;
    }

    public static async iteratorToHistory(rawData:any):Promise<AcrisDataHistory[]> {
        const promiseOfIterator = rawData;

        const results = [];
        for await (const keyMod of promiseOfIterator) {
            const resp:any = {
                timestamp: keyMod.timestamp,
                txid: keyMod.txId
            };
            if (keyMod.isDelete) {
                resp.value = 'KEY DELETED';
            } else {
                resp.data = keyMod.value;
            }
            results.push(resp);
        }

    return results;
}

public static bufferToObject(buffer: Buffer): object {
    if (buffer === null) {
        return null;
    }

    const bufferString = buffer.toString('utf8');
    if (bufferString.length <= 0) {
        return null;
    }

    try {
        return JSON.parse(bufferString);
    } catch (err) {
        console.error('Error parsing buffer to JSON', bufferString);
        return null;
    }
}

}
