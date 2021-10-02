export const ICAO_KEYS = ["locationIndicator"];
export const TAGS_REMOVABLE =["fx:","fb:"];
export const KEYS_REMOVABLE = ["extension","$","xsi:type"];
export const DEFAULT_VERSION = "4.2";
export const initializeAcris = () : any=> {

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
      }
};