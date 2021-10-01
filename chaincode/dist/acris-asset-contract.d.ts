import { Context, Contract } from 'fabric-contract-api';
import { AcrisDataHistory, AcrisDataModel } from './model/acris-flight-data';
export declare class AcrisDataContract extends Contract {
    acrisDataExists(ctx: Context, acrisDataKey: string): Promise<boolean>;
    createAcrisDataModel(ctx: Context, flightDataValue: string): Promise<string>;
    readAcrisDataModel(ctx: Context, acrisDataKey: string): Promise<AcrisDataModel>;
    updateAcrisDataModel(ctx: Context, acrisDataKey: string, flightDataValue: string): Promise<void>;
    getFlightHistory(ctx: Context, flightkey: string): Promise<AcrisDataHistory[]>;
    getFlightQuery(ctx: Context, query: string): Promise<AcrisDataHistory[]>;
}
