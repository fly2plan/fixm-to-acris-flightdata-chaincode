export const Model= JSON.stringify({
  "operatingAirline": {

  "icaoCode": ["fx:Flight","fx:operator","designatorIcao"],
  "name": ["fx:Flight","fx:operator","operatingOrganization","name"]

},
"aircraftType": {
  "icaoCode": "AircraftType_collection",
  "modelName": ["fx:Flight","fx:aircraft","fx:coloursAndMarkings"],
  "registration": ["fx:Flight","fx:aircraft","fx:registration"]
},        
"flightNumber": {
  "airlineCode": ["fx:Flight","fx:flightIdentification","fx:aircraftIdentification"],
  "trackNumber": ["fx:Flight","fx:flightPlanOriginator","identifier"]
},
"departureAirport": ["fx:Flight","fx:departure","fx:aerodrome","locationIndicator"],
"arrivalAirport": ["fx:Flight","fx:arrival","fx:arrivalAerodrome","locationIndicator"],
"originDate": ["fx:Flight","fx:departure","fx:actualTimeOfDeparture"],
"departure": {
  "actual":["fx:Flight","fx:departure","fx:actualTimeOfDeparture"],
  "terminal": ["fx:Flight","fx:departure","fx:runwayDirection","_"],
  "estimated":["fx:Flight","fx:departure","fx:estimatedOffBlockTime"]
},
"arrival": {
 "actual":["fx:Flight","fx:arrival","fx:actualTimeOfArrival"],
 "terminal": ["fx:Flight","fx:arrival","fx:runwayDirection","_"]

},
"extensions": {
  "nb":"MeteorologicalEnvironment",
  "AircraftMovement":"AircraftMovement",
  "AircraftTransport":"AircraftTransport",
  "AirportFacility":"AirportFacility",
  "Route":"AircraftMovementRoute",
  "aircraftMovementConstraint":"AircraftMovementConstraint",
  "aircraftMovementEmergency":"AircraftMovementEmergency",
  "aircraftMovementIdentification":"AircraftMovementIdentification",
  "CargoItem":"CargoItem",
  "RouteConstraint":"RouteConstraint"



}


})