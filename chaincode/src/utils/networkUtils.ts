import { Context } from 'fabric-contract-api';


export function getMspID(ctx:Context){
    return ctx.clientIdentity.getMSPID();
}

export function getTxnID(ctx:Context){
    return ctx.stub.getTxID();
}