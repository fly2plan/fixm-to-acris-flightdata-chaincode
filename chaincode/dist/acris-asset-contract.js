"use strict";
/*
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcrisDataContract = void 0;
const deepmerge = require("deepmerge");
const fabric_contract_api_1 = require("fabric-contract-api");
const parser_1 = require("./fixmconverter/lib/parser");
const acrisDataUtils_1 = require("./utils/acrisDataUtils");
const networkUtils_1 = require("./utils/networkUtils");
class AcrisDataContract extends fabric_contract_api_1.Contract {
    async acrisDataExists(ctx, acrisDataKey) {
        const data = await ctx.stub.getState(acrisDataKey);
        return (!!data && data.length > 0);
    }
    async createAcrisDataModel(ctx, flightDataValue) {
        const acrisData = parser_1.transformFixmToAcris(flightDataValue);
        const acrisDataKey = acrisDataUtils_1.AcrisDataHelper.getUniqueKey(acrisData);
        console.log(`Key : ${acrisDataKey}`);
        const newAcrisDataModel = {
            flightData: acrisData,
            flightKey: acrisDataKey,
            updaterId: networkUtils_1.getMspID(ctx),
            txId: networkUtils_1.getTxnID(ctx),
            docType: 'ACRIS'
        };
        const buffer = Buffer.from(acrisDataUtils_1.AcrisDataHelper.serializeData(newAcrisDataModel));
        await ctx.stub.putState(acrisDataKey, buffer);
        console.info(`new data added with key : ${acrisDataKey}`);
        return acrisDataKey;
    }
    async readAcrisDataModel(ctx, acrisDataKey) {
        const exists = await this.acrisDataExists(ctx, acrisDataKey);
        if (!exists) {
            throw new Error(`The acris flight data ${acrisDataKey} does not exist`);
        }
        const data = await ctx.stub.getState(acrisDataKey);
        const acrisDataModel = JSON.parse(data.toString());
        return acrisDataModel;
    }
    async updateAcrisDataModel(ctx, acrisDataKey, flightDataValue) {
        const exists = await this.acrisDataExists(ctx, acrisDataKey);
        if (!exists) {
            throw new Error(`The acris data for key : ${acrisDataKey} does not exist`);
        }
        const newFlightData = parser_1.transformFixmToAcris(flightDataValue);
        const flightDataBuffer = await ctx.stub.getState(acrisDataKey);
        const currentAcrisDataModel = JSON.parse(flightDataBuffer.toString());
        const mergedData = deepmerge(currentAcrisDataModel.flightData, newFlightData);
        currentAcrisDataModel.flightData = mergedData;
        currentAcrisDataModel.txId = networkUtils_1.getTxnID(ctx);
        currentAcrisDataModel.updaterId = networkUtils_1.getMspID(ctx);
        const buffer = Buffer.from(JSON.stringify(currentAcrisDataModel));
        await ctx.stub.putState(acrisDataKey, buffer);
        console.info('Acris Data Updated');
    }
    async getFlightHistory(ctx, flightkey) {
        const rawData = await ctx.stub.getHistoryForKey(flightkey);
        // return rawData.toString()
        return await acrisDataUtils_1.AcrisDataHelper.iteratorToHistory(rawData);
    }
    async getFlightQuery(ctx, query) {
        const rawData = await ctx.stub.getQueryResult(query);
        return await acrisDataUtils_1.AcrisDataHelper.iteratorToHistory(rawData);
    }
}
exports.AcrisDataContract = AcrisDataContract;
//# sourceMappingURL=acris-asset-contract.js.map