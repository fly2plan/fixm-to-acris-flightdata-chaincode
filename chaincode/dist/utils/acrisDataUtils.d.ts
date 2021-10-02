/// <reference types="node" />
import { AcrisDataHistory } from '../model/acris-flight-data';
import { Iterators } from 'fabric-shim-api';
export declare class AcrisDataHelper {
    static getUniqueKey(flightData: object): string;
    static serializeData(flightData: object): Buffer;
    static getDataFromAcris(flightData: any, iterateKeys: any): any;
    static iteratorToHistory(iterator: Iterators.HistoryQueryIterator): Promise<AcrisDataHistory[]>;
    static bufferToObject(buffer: Buffer): object;
}
