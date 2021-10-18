/*
 * SPDX-License-Identifier: Apache-2.0
 */

import deepmerge = require("deepmerge");
import { Context, Contract, Info, Returns, Transaction } from 'fabric-contract-api';
import { transformFixmToAcris } from "./fixmconverter/lib/parser";
import { AcrisDataHelper } from "./utils/acrisDataUtils";
import { AcrisDataHistory, AcrisDataModel } from "./model/acris-flight-data";
import { getMspID, getTxnID } from "./utils/networkUtils";

export class AcrisDataContract extends Contract {

    @Transaction(false)
    @Returns('boolean')
    public async acrisDataExists(ctx: Context, acrisDataKey: string): Promise<boolean> {
        const data: Uint8Array = await ctx.stub.getState(acrisDataKey);
        return !!data && data.length > 0;
    }

    @Transaction(false)
    @Returns('AcrisDataModel')
    public async readAcrisDataModel(
        ctx: Context,
        acrisDataKey: string
    ): Promise<AcrisDataModel> {
        const exists: boolean = await this.acrisDataExists(ctx, acrisDataKey);
        if (!exists) {
            throw new Error(`The acris flight data ${acrisDataKey} does not exist`);
        }
        const DataBuffer = await ctx.stub.getState(acrisDataKey);
        return JSON.parse(DataBuffer.toString());
    }


    @Transaction(false)
    @Returns('AcrisDataHistory[]')
    public async getFlightHistory(
        ctx: Context,
        flightkey: string
    ): Promise<AcrisDataHistory[]> {
        const rawData: any = await ctx.stub.getHistoryForKey(flightkey);
        return await AcrisDataHelper.iteratorToHistory(rawData);
    }

    @Transaction(false)
    @Returns('AcrisDataHistory[]')
    public async getFlightQuery(
        ctx: Context,
        query: string
    ): Promise<AcrisDataHistory[]> {
        const rawData: any = await ctx.stub.getQueryResult(query);
        return await AcrisDataHelper.iteratorToHistory(rawData);
    }

    @Transaction()
    @Returns('string')
    public async createAcrisDataModel(
        ctx: Context,
        flightDataValue: string
    ): Promise<string> {

        const acrisData = transformFixmToAcris(flightDataValue);
        const acrisDataKey = AcrisDataHelper.getUniqueKey(acrisData);
        const exists: boolean = await this.acrisDataExists(ctx, acrisDataKey);
        if (exists) {

            console.log(
                `Data already exists for key ${acrisDataKey}, proceeding with data updation`
            );

            this.updateAcrisData(ctx, acrisDataKey, flightDataValue);

        } else {
            const acrisDataModel = {
                flightData: acrisData,
                flightKey: acrisDataKey,
                updaterId: getMspID(ctx),
                txId: getTxnID(ctx),
                docType: "ACRIS",
            };
            const buffer: Buffer = Buffer.from(
                AcrisDataHelper.serializeData(acrisDataModel)
            );
            await ctx.stub.putState(acrisDataKey, buffer);
            console.info(`data added with key : ${acrisDataKey}`);
        }

        return acrisDataKey;
    }

    @Transaction()
    public async updateAcrisData(
        ctx: Context,
        acrisDataKey: string,
        flightDataValue: string
    ): Promise<void> {

        const exists: boolean = await this.acrisDataExists(ctx, acrisDataKey);
        if (!exists) {
            throw new Error(`The acris flight data ${acrisDataKey} does not exist`);
        }
        const acrisData = transformFixmToAcris(flightDataValue);
        const currentAcrisDataModel = await this.readAcrisDataModel(ctx, acrisDataKey);
        const mergedData: any = deepmerge(
            currentAcrisDataModel.flightData,
            acrisData
        );
        const acrisDataModel = {
            flightData: mergedData,
            flightKey: acrisDataKey,
            updaterId: getMspID(ctx),
            txId: getTxnID(ctx),
            docType: "ACRIS",
        };
        const buffer: Buffer = Buffer.from(
            AcrisDataHelper.serializeData(acrisDataModel)
        );
        await ctx.stub.putState(acrisDataKey, buffer);
        console.info(`data updated with key : ${acrisDataKey}`);

    }

}
