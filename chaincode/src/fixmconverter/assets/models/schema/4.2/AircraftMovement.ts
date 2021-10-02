export const Model= JSON.stringify({
    "actualTimeOfArrival" : ["fx:Flight","fx:arrival","fx:actualTimeOfArrival"],
    "actualTimeOfDeparture" : ["fx:Flight","fx:departure","fx:actualTimeOfDeparture"] ,
    "alternateAirport" :["fx:Flight","fx:arrival","fx:alternateAerodrome","locationIndicator"],
    "airfileIndicatorCode" : ["fx:Flight","fx:departure","fx:airfileIndicator"],
    "atOrAboveAltitudeCode":["fx:Flight","fx:routeTrajectoryGroup","fx:agreed","fx:element","fx:routeChange","fx:level","fx:level","flightLevel","_"],
    "cruisingSpeedChangeSpeed":["fx:Flight","fx:routeTrajectoryGroup","fx:agreed","fx:element","fx:routeChange","fx:speed","fx:speed","_"],
    "arrivalAirport" : ["fx:Flight","fx:arrival","fx:arrivalAerodrome","locationIndicator"],
    "arrivalAirportSlotIdentification": ["fx:Flight","fx:departure","fx:airportSlotIdentification"],
    "cruiseClimbLevel":["fx:Flight","fx:routeTrajectoryGroup","fx:agreed","fx:element","fx:routeChange","fx:cruiseClimbStart","fx:level","flightLevelOrAltitudeValue","altitude","_"],
    "cruiseClimbSpeed":"CruiseClimbSpeed_collection",
    "cruisingLevelChangeLevel":"CrusingLevelChangeLevel_collection",
    "currentModeACode": ["fx:Flight","fx:enRoute","fx:currentModeACode"],
    "delayReason":"EnrouteDelayReason_collection",
    "delayReference":"EnrouteDelayReference_collection",
    "delayType":["fx:Flight","fx:routeTrajectoryGroup","fx:agreed","fx:element","fx:enRouteDelay","fx:delayType"],
    "departureAirportSlotIdentification":["fx:Flight","fx:departure","fx:airportSlotIdentification"],
    "destinationAirport":["fx:Flight","fx:arrival","fx:destinationAerodrome","iataDesignator"],
    "destinationAirportAlternate":"DestinationAerodromeAlternate_collection",
    "destinationAirportPrevious" : ["fx:Flight","fx:arrival","fx:destinationAerodromePrevious","iataDesignator"],
    "estimatedAircraftTakeoffMass":["fx:Flight","fx:routeTrajectoryGroup","fx:agreed","fx:takeoffMass","_"]
    ,"estimatedElapsedTime":"EstimatedElapsedTime_collection"
    ,"estimatedOffBlockTime":["fx:Flight","fx:departure","fx:estimatedOffBlockTime"]
    ,"estimatedOffBlockTimePrevious":["fx:Flight","fx:departure","fx:estimatedOffBlockTimePrevious"]
    ,"flightPlanOriginatorParty":["fx:Flight","fx:flightPlanOriginator"]
    ,"flightPlanSubmitterParty":["fx:Flight","fx:flightPlanSubmitter"]
    ,"fuelEnduranceDuration":["fx:Flight","fx:supplementaryData","fx:fuelEndurance"]
    ,"gufiOriginatorParty":["fx:Flight","fx:gufiOriginator"]
    ,"inboundOrigin":["fx:Flight","fx:departure","fx:aerodrome","locationIndicator"]
    ,"inboundOriginPrevious":["fx:Flight","fx:departure","fx:aerodromePrevious","locationIndicator"]
    ,"operator":["fx:Flight","fx:operator","operatingOrganization"]
    ,"personsOnBoardQuantity":["fx:Flight","fx:supplementaryData","fx:personsOnBoard"]
    ,"pilotInCommand":["fx:Flight","fx:supplementaryData","fx:pilotInCommand"]
    ,"profilePointAirSpeed":"ProfilePointAirSpeed_collection"
    ,"profilePointDistance":"ProfilePointDistance_collection"
    ,"profilePointAltitude":"ProfilePointAltitude_collection"
    ,"profilePointTimeDuration":"ProfilePointTime_collection"
    ,"remarks":["fx:Flight","fx:remarks"]
    ,"runwayLandingDirection":["fx:Flight","fx:arrival","fx:runwayDirection","_"]
    ,"runwayTakeoffDirection":["fx:Flight","fx:departure","fx:runwayDirection","_"]
    ,"speedScheduleInitialSpeed":["fx:Flight","fx:routeTrajectoryGroup","fx:agreed","fx:climbSchedule","fx:initialSpeed","_"]
    ,"speedScheduleSubsequentSpeed":["fx:Flight","fx:routeTrajectoryGroup","fx:agreed","fx:climbSchedule","fx:subsequentSpeed","_"]
    ,"takeOffAlternateAerodrome":"takeOffAlternateAerodrome_collection"
    ,"aircraftApproachCategory":["fx:Flight","fx:aircraft","fx:aircraftApproachCategory"]


}
)

