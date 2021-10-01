"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTxnID = exports.getMspID = void 0;
function getMspID(ctx) {
    return ctx.clientIdentity.getMSPID();
}
exports.getMspID = getMspID;
function getTxnID(ctx) {
    return ctx.stub.getTxID();
}
exports.getTxnID = getTxnID;
//# sourceMappingURL=networkUtils.js.map