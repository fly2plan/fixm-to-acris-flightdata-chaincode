export const Model= JSON.stringify({
    
    "AircraftAddress":["fx:Flight","fx:aircraft","fx:aircraftAddress"],
    "formation":"AircraftTransportFormation",
    "AircraftTransportType":"AircraftTransportType",

    "AircraftType":{
        "icaoCode": "AircraftType_collection",
        "modelName": ["fx:Flight","fx:aircraft","fx:coloursAndMarkings"],
        "registration": ["fx:Flight","fx:aircraft","fx:registration"]
      },   
    "AircraftTransportEquipment":{
        "CommunicationCapabilityCode": ["fx:Flight","fx:aircraft","fx:capabilities","fx:communication","fx:communicationCapabilityCode"],
        "datalinkCommunicationCapabilityCodeList" : ["fx:Flight","fx:aircraft","fx:capabilities","fx:communication","fx:datalinkCommunicationCapabilityCode"],
        "dinghies" : "DinDinghy",
        "emergencyRadioCapabilityTypeList" : ["fx:Flight","fx:aircraft","fx:capabilities","fx:survival","fx:emergencyRadioCapabilityType"],
        "navigationCapabilityCode" : ["fx:Flight","fx:aircraft","fx:capabilities","fx:navigation","fx:navigationCapabilityCode"],
        "otherNavigationCapabilities": ["fx:Flight","fx:aircraft","fx:capabilities","fx:navigation","fx:otherNavigationCapabilities"],
        "otherSurveillanceCapabilities": ["fx:Flight","fx:aircraft","fx:capabilities","fx:surveillance","fx:otherSurveillanceCapabilities"],
        "performanceBasedCode": ["fx:Flight","fx:aircraft","fx:capabilities","fx:navigation","fx:performanceBasedCode"],
        "surveillanceCapabilityCode": ["fx:Flight","fx:aircraft","fx:capabilities","fx:surveillance","fx:surveillanceCapabilityCode"],
        "survivalEquipmentRemarks": ["fx:Flight","fx:aircraft","fx:capabilities","fx:survival","fx:survivalEquipmentRemarks"],
        "survivalEquipmentType": ["fx:Flight","fx:aircraft","fx:capabilities","fx:survival","fx:survivalEquipmentType"],
        "SelectiveCallingCode": ["fx:Flight","fx:aircraft","fx:capabilities","fx:communication","fx:selectiveCallingCode"]

    },
    "Identifier" : {
        "Registration" :["fx:Flight","fx:aircraft","fx:registration"]
    }
})