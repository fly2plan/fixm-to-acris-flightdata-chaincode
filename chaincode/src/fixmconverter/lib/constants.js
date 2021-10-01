"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICAO_KEYS = ["locationIndicator"];
exports.TAGS_REMOVABLE = ["fx:", "fb:"];
exports.KEYS_REMOVABLE = ["extension", "$", "xsi:type"];
exports.DEFAULT_VERSION = "4.2";
exports.initializeAcris = () => {
    return {
        "operatingAirline": {
            "iataCode": "",
            "icaoCode": "",
            "name": ""
        },
        "aircraftType": {
            "icaoCode": "",
            "modelName": "",
            "registration": ""
        },
        "flightNumber": {
            "airlineCode": "",
            "trackNumber": ""
        },
        "departureAirport": "",
        "arrivalAirport": "",
        "originDate": "",
        "departure": {
            "scheduled": "",
            "estimated": "",
            "actual": "",
            "terminal": "",
            "gate": ""
        },
        "arrival": {
            "scheduled": "",
            "estimated": "",
            "actual": "",
            "terminal": "",
            "gate": ""
        },
        "flightStatus": "",
        "extensions": {}
    };
};
//# sourceMappingURL=constants.js.map