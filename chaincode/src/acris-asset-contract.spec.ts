/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Context } from 'fabric-contract-api';
import { ChaincodeStub, ClientIdentity } from 'fabric-shim';
import { AcrisDataContract } from '.';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import winston = require('winston');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext implements Context {
    public stub: sinon.SinonStubbedInstance<ChaincodeStub> = sinon.createStubInstance(ChaincodeStub);
    public clientIdentity: sinon.SinonStubbedInstance<ClientIdentity> = sinon.createStubInstance(ClientIdentity);
    public logger = {
        getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
        setLevel: sinon.stub(),
     };
}

describe('AcrisDataContract', () => {

    let contract: AcrisDataContract;
    let ctx: TestContext;

    beforeEach(() => {
        contract = new AcrisDataContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"acris asset 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"acris asset 1002 value"}'));
    });

    describe('#acrisAssetExists', () => {

        it('should return true for a acris asset', async () => {
            await contract.acrisAssetExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a acris asset that does not exist', async () => {
            await contract.acrisAssetExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createAcrisAsset', () => {

        it('should create a acris asset', async () => {
            await contract.createAcrisAsset(ctx, '1003', 'acris asset 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"acris asset 1003 value"}'));
        });

        it('should throw an error for a acris asset that already exists', async () => {
            await contract.createAcrisAsset(ctx, '1001', 'myvalue').should.be.rejectedWith(/The acris asset 1001 already exists/);
        });

    });

    describe('#readAcrisAsset', () => {

        it('should return a acris asset', async () => {
            await contract.readAcrisAsset(ctx, '1001').should.eventually.deep.equal({ value: 'acris asset 1001 value' });
        });

        it('should throw an error for a acris asset that does not exist', async () => {
            await contract.readAcrisAsset(ctx, '1003').should.be.rejectedWith(/The acris asset 1003 does not exist/);
        });

    });

    describe('#updateAcrisAsset', () => {

        it('should update a acris asset', async () => {
            await contract.updateAcrisAsset(ctx, '1001', 'acris asset 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"acris asset 1001 new value"}'));
        });

        it('should throw an error for a acris asset that does not exist', async () => {
            await contract.updateAcrisAsset(ctx, '1003', 'acris asset 1003 new value').should.be.rejectedWith(/The acris asset 1003 does not exist/);
        });

    });

    describe('#deleteAcrisAsset', () => {

        it('should delete a acris asset', async () => {
            await contract.deleteAcrisAsset(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a acris asset that does not exist', async () => {
            await contract.deleteAcrisAsset(ctx, '1003').should.be.rejectedWith(/The acris asset 1003 does not exist/);
        });

    });

});
