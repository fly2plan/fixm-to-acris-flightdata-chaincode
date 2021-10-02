export const Model= JSON.stringify({    
    "actionTaken": ["fx:Flight","fx:emergency","fx:actionTaken"],
    "atsOriginatorIcaoIdentifier":["fx:Flight","fx:emergency","fx:originator","atcUnitNameOrAlternate"]
    ,"emergencyDescription":["fx:Flight","fx:emergency","fx:emergencyDescription"]
    ,"determinationMethod":["fx:Flight","fx:emergency","fx:lastContact","fx:position","fx:determinationMethod"]
    ,"lastContactATSUnit" :["fx:Flight","fx:emergency","fx:lastContact","fx:lastContactUnit"],
    "lastContactFrequency":["fx:Flight","fx:emergency","fx:lastContact","fx:lastContactFrequency","_"],
    "lastContactTime":["fx:Flight","fx:emergency","fx:lastContact","fx:lastContactTime"],
    "lastKnownPositionLocation":["fx:Flight","fx:emergency","fx:lastContact","fx:position","fx:position"],
    "lastKnownPositionTime":["fx:Flight","fx:emergency","fx:lastContact","fx:position","fx:timeAtPosition"],
    "otherInformation":["fx:Flight","fx:emergency","fx:otherInformation"],
    "radioFailureRemarks":["fx:Flight","fx:radioCommunicationFailure","fx:radioFailureRemarks"],
    "remainingCommunicationCapability":["fx:Flight","fx:radioCommunicationFailure","fx:remainingComCapability"]
})