import { ClientIdentity } from 'fabric-shim';


export function getMspID(ctx){
    const clientId = new ClientIdentity(ctx.stub);
    return clientId.getMSPID();
}

export function getTxnID(ctx){
    return ctx.stub.getTxID();
}