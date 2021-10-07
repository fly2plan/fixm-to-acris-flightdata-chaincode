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
        const acrisData = this.convertFixmToAcris(flightDataValue);
        const acrisDataKey = AcrisDataHelper.getUniqueKey(acrisData);
        const exists: boolean = await this.acrisDataExists(ctx, acrisDataKey);
        if (exists) {
            console.log(`Data already exists for key ${acrisDataKey}, proceeding with data updation`)
            await this.updateExistingAcrisData(ctx,acrisDataKey,flightDataValue)
        }else{
            await this.setAcrisData(ctx,acrisData,acrisDataKey)
            console.info(`data added with key : ${acrisDataKey}`);
        }
        return acrisDataKey;
    }

    public async readAcrisDataModel(ctx: Context, acrisDataKey: string): Promise<AcrisDataModel> {
        const exists: boolean = await this.acrisDataExists(ctx, acrisDataKey);
        if (!exists) {
            throw new Error(`The acris flight data ${acrisDataKey} does not exist`);
        }
        const acrisDataModel = await this.getAcrisData(ctx,acrisDataKey)
        return acrisDataModel;
    }
    public async updateExistingAcrisData(ctx: Context, acrisDataKey: string, flightDataValue: any): Promise<void> {
        const exists: boolean = await this.acrisDataExists(ctx, acrisDataKey);
        if (!exists) {
            throw new Error(`The acris flight data ${acrisDataKey} does not exist`);
        }
        const acrisData = this.convertFixmToAcris(flightDataValue);
        const currentAcrisDataModel = await this.getAcrisData(ctx,acrisDataKey)
        const mergedData:any = deepmerge(currentAcrisDataModel.flightData,acrisData);
        await this.setAcrisData(ctx,mergedData,acrisDataKey)
    }

    public async getFlightHistory(ctx: Context, flightkey: string):Promise<AcrisDataHistory[]> {
        const rawData:any = await ctx.stub.getHistoryForKey(flightkey);
        // return rawData.toString()
        return await AcrisDataHelper.iteratorToHistory(rawData); 
    }

    public async getFlightQuery(ctx: Context, query: string):Promise<AcrisDataHistory[]> {
        const rawData:any = await ctx.stub.getQueryResult(query);
        return await AcrisDataHelper.iteratorToHistory(rawData);
    }

    private convertFixmToAcris(fixmValue:any){
        return transformFixmToAcris(fixmValue);
    }

    private async setAcrisData(ctx:Context,acrisData:any,acrisDataKey:string,docTypeValue:string = 'ACRIS'){
        const AcrisDataModel: AcrisDataModel = {
            flightData :acrisData ,
            flightKey:acrisDataKey,
            updaterId: getMspID(ctx),
            txId:getTxnID(ctx),
            docType:docTypeValue
        };
        const buffer: Buffer = Buffer.from(AcrisDataHelper.serializeData(AcrisDataModel));
        await ctx.stub.putState(acrisDataKey, buffer);
    }

    private async getAcrisData(ctx:Context,acrisDataKey:string){
        const DataBuffer = await ctx.stub.getState(acrisDataKey);
        const AcrisDataModel: AcrisDataModel = JSON.parse(DataBuffer.toString()) as AcrisDataModel;
        return AcrisDataModel
    }



}
