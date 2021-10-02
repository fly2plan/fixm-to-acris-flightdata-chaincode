"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionModel = exports.getAlternative = exports.getIATA = exports.getModel = void 0;
const constants_1 = require("../lib/constants");
const path = require("path");
const icao_to_iata_1 = require("./iataicaomapper/icao_to_iata");
const alternate_1 = require("./fixsmalternativetagmapper/alternate");
const Collections_1 = require("./models/schema/4.2/Collections");
exports.getModel = (modelFileName, version) => {
    if (version === undefined) {
        version = constants_1.DEFAULT_VERSION;
    }
    const modelPath = path.join(__dirname, "models", "schema", version, modelFileName);
    const { Model } = require(modelPath);
    return JSON.parse(Model);
};
exports.getIATA = () => {
    return icao_to_iata_1.icaoToIata;
};
exports.getAlternative = () => {
    return alternate_1.alternateTags;
};
exports.getCollectionModel = (version) => {
    return Collections_1.collections;
};
//# sourceMappingURL=util.js.map