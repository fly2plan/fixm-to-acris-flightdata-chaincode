/// <reference types="node" />
import { AcrisDataHistory } from '../model/acris-flight-data';
export declare class AcrisDataHelper {
    static getUniqueKey(flightData: object): string;
    static serializeData(flightData: object): Buffer;
    static getDataFromAcris(flightData: any, iterateKeys: any): any;
    static iteratorToHistory(rawData: any): Promise<AcrisDataHistory[]>;
    static bufferToObject(buffer: Buffer): object;
}
