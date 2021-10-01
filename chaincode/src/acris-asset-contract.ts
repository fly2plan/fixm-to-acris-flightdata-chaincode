/*
 * SPDX-License-Identifier: Apache-2.0
 */

import deepmerge = require('deepmerge');
import { Context, Contract } from 'fabric-contract-api';
import { transformFixmToAcris } from './fixmconverter/lib/parser';
import { AcrisDataHelper } from './utils/acrisDataUtils';
import { AcrisDataHistory, AcrisDataModel } from './model/acris-flight-data';
import{getMspID, getTxnID} from './utils/networkUtils';


export class AcrisDataContract extends Contract {

    public async acrisDataExists(ctx: Context, acrisDataKey: string): Promise<boolean> {
        const data: Uint8Array = await ctx.stub.getState(acrisDataKey);
        return (!!data && data.length > 0);
    }


    public async createAcrisDataModel(ctx: Context, flightDataValue: string): Promise<string> {
        const acrisData = transformFixmToAcris(flightDataValue);
        const acrisDataKey = AcrisDataHelper.getUniqueKey(acrisData);
        console.log(`Key : ${acrisDataKey}`);

        const newAcrisDataModel: AcrisDataModel = {
            flightData :acrisData ,
            flightKey:acrisDataKey,
            updaterId: getMspID(ctx),
            txId:getTxnID(ctx),
            docType:'ACRIS'
        };
        const buffer: Buffer = Buffer.from(AcrisDataHelper.serializeData(newAcrisDataModel));
        await ctx.stub.putState(acrisDataKey, buffer);
        console.info(`new data added with key : ${acrisDataKey}`);
        return acrisDataKey;
    }

    public async readAcrisDataModel(ctx: Context, acrisDataKey: string): Promise<AcrisDataModel> {
        const exists: boolean = await this.acrisDataExists(ctx, acrisDataKey);
        if (!exists) {
            throw new Error(`The acris flight data ${acrisDataKey} does not exist`);
        }
        const data: Uint8Array = await ctx.stub.getState(acrisDataKey);
        const acrisDataModel: AcrisDataModel = JSON.parse(data.toString()) as AcrisDataModel;
        return acrisDataModel;
    }
    public async updateAcrisDataModel(ctx: Context, acrisDataKey: string, flightDataValue: string): Promise<void> {
        const exists: boolean = await this.acrisDataExists(ctx, acrisDataKey);
        if (!exists) {
            throw new Error(`The acris data for key : ${acrisDataKey} does not exist`);
        }
        const newFlightData = transformFixmToAcris(flightDataValue);
        const flightDataBuffer = await ctx.stub.getState(acrisDataKey);
        const currentAcrisDataModel: AcrisDataModel = JSON.parse(flightDataBuffer.toString()) as AcrisDataModel;
        const mergedData:any = deepmerge(currentAcrisDataModel.flightData,newFlightData);
        currentAcrisDataModel.flightData = mergedData;
        currentAcrisDataModel.txId = getTxnID(ctx);
        currentAcrisDataModel.updaterId = getMspID(ctx);
        const buffer: Buffer = Buffer.from(JSON.stringify(currentAcrisDataModel));
        await ctx.stub.putState(acrisDataKey, buffer);
        console.info('Acris Data Updated');
    }
    public async getFlightHistory(ctx: Context, flightkey: string):Promise<AcrisDataHistory[]> {
        const rawData:any = await ctx.stub.getHistoryForKey(flightkey);
        return await AcrisDataHelper.iteratorToHistory(rawData); }

    public async getFlightQuery(ctx: Context, query: string):Promise<AcrisDataHistory[]> {
        const rawData:any = await ctx.stub.getQueryResult(query);
        return await AcrisDataHelper.iteratorToHistory(rawData);
    }



}
