/*
* Use this file for functional testing of your smart contract.
* Fill out the arguments and return values for a function and
* use the CodeLens links above the transaction blocks to
* invoke/submit transactions.
* All transactions defined in your smart contract are used here
* to generate tests, including those functions that would
* normally only be used on instantiate and upgrade operations.
* This basic test file can also be used as the basis for building
* further functional tests to run as part of a continuous
* integration pipeline, or for debugging locally deployed smart
* contracts by invoking/submitting individual transactions.
*/
/*
* Generating this test file will also trigger an npm install
* in the smart contract project directory. This installs any
* package dependencies, including fabric-network, which are
* required for this test file to be run locally.
*/

import * as assert from 'assert';
import * as fabricNetwork from 'fabric-network';
import { SmartContractUtil } from './ts-smart-contract-util';
import 'mocha';
import * as os from 'os';
import * as path from 'path';
import { readFileSync } from 'fs';

describe('fixmtoacriscontract' , () => {

    const homedir: string = os.homedir();
    const walletPath: string = '<wallet-path>';
    const gateway: fabricNetwork.Gateway = new fabricNetwork.Gateway();
    let fabricWallet: fabricNetwork.Wallet;
    const identityName: string = '<id>';
    let connectionProfile: any;

    before(async () => {
        connectionProfile = await SmartContractUtil.getConnectionProfile();
        fabricWallet = await fabricNetwork.Wallets.newFileSystemWallet(walletPath);
    });

    beforeEach(async () => {
        const discoveryAsLocalhost: boolean = SmartContractUtil.hasLocalhostURLs(connectionProfile);
        const discoveryEnabled: boolean = true;

        const options: fabricNetwork.GatewayOptions = {
            discovery: {
                asLocalhost: discoveryAsLocalhost,
                enabled: discoveryEnabled,
            },
            identity: identityName,
            wallet: fabricWallet,
        };

        await gateway.connect(connectionProfile, options);
    });

    afterEach(async () => {
        gateway.disconnect();
    });

    describe('acrisDataExists', () => {
        it('should submit acrisDataExists transaction', async () => {
            // TODO: populate transaction parameters
            const arg0: string = 'SAMPLE-KEY';
            const args: string[] = [ arg0];

            const response: Buffer = await SmartContractUtil.submitTransaction('fixmtoacriscontract', 'acrisDataExists', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('createAcrisDataModel', () => {
        it('should submit createAcrisDataModel transaction', async () => {
            // TODO: populate transaction parameters
            const arg0: string = 'SAMPLE-DATA';
            const args: string[] = [ arg0];

            const response: Buffer = await SmartContractUtil.submitTransaction('fixmtoacriscontract', 'createAcrisDataModel', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('readAcrisDataModel', () => {
        it('should submit readAcrisDataModel transaction', async () => {
            // TODO: populate transaction parameters
            const arg0: string = 'SAMPLE-KEY';
            const args: string[] = [ arg0];

            const response: Buffer = await SmartContractUtil.submitTransaction('fixmtoacriscontract', 'readAcrisDataModel', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('updateAcrisDataModel', () => {
        it('should submit updateAcrisDataModel transaction', async () => {
            // TODO: populate transaction parameters
            const arg0: string = 'SAMPLE-KEY';
            const arg1: string = 'SAMPLE_DATA';
            const args: string[] = [ arg0, arg1];

            const response: Buffer = await SmartContractUtil.submitTransaction('fixmtoacriscontract', 'updateAcrisDataModel', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('getFlightHistory', () => {
        it('should submit getFlightHistory transaction', async () => {
            // TODO: populate transaction parameters
            const arg0: string = 'SAMPLE-KEY';
            const args: string[] = [ arg0];

            const response: Buffer = await SmartContractUtil.submitTransaction('fixmtoacriscontract', 'getFlightHistory', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

    describe('getFlightQuery', () => {
        it('should submit getFlightQuery transaction', async () => {
            // TODO: populate transaction parameters
            const arg0: string = 'SAMPLE-KEY';
            const args: string[] = [ arg0];

            const response: Buffer = await SmartContractUtil.submitTransaction('fixmtoacriscontract', 'getFlightQuery', args, gateway);
            // submitTransaction returns buffer of transcation return value
            // TODO: Update with return value of transaction
            assert.equal(true, true);
            // assert.equal(JSON.parse(response.toString()), undefined);
        }).timeout(10000);
    });

});
