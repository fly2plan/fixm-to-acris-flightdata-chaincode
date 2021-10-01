export const collections ={
    "AircraftType_collection":{
        "keys":["fx:type","fx:icaoAircraftTypeDesignator"],
        "base":"fx:aircraftType",
        "path":["fx:Flight","fx:aircraft"]
    },
    "AircraftNumber_collection":{
        "keys":["fx:numberOfAircraft"],
        "base":"fx:aircraftType",
        "path":["fx:Flight","fx:aircraft"]
    },
    "CruiseClimbSpeed_collection":{
        "keys":["fx:element","fx:routeChange","fx:speed","fx:speed"],
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"]
    },
    "CrusingLevelChangeLevel_collection":{
        "keys":["fx:element","fx:routeChange","fx:level","fx:level"],
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"]

    },
    "EnrouteDelayReason_collection":{
        "keys":["fx:element","fx:enRouteDelay","fx:delayReason"],
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"]
    },
    "EnrouteDelayReference_collection":{
        "keys":["fx:element","fx:enRouteDelay","fx:delayReference"],
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"]
    },
    "DestinationAerodromeAlternate_collection":{
        "base":"fx:destinationAerodromeAlternate",
        "keys":["locationIdentifier","iataDesignator"],
        "path":["fx:Flight","fx:arrival"]
    },
    "EstimatedElapsedTime_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup" ],
        "keys": ["fx:routeInformation","fx:estimatedElapsedTime","fx:elapsedTime"]
    },
    "ProfilePointAirSpeed_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys": ["fx:climbProfile","fx:profilePoint","fx:airspeed"]
    },
    "ProfilePointDistance_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys": ["fx:climbProfile","fx:profilePoint","fx:distance"]
    },
    "ProfilePointAltitude_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys": ["fx:climbProfile","fx:profilePoint","fx:level"]
    },
    "ProfilePointTime_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys": ["fx:climbProfile","fx:profilePoint","fx:time"]
    },
    "takeOffAlternateAerodrome_collection":{
        "base":"fx:takeoffAlternateAerodrome",
        "path":["fx:Flight","fx:departure"],
        "keys": ["iataDesignator"]
    },
    "AirWaybillNumber_collection":{
        "base":"fx:dangerousGoods",
        "path":["fx:Flight"],
        "keys": ["fx:airWaybillNumber"]
    },
    "DangerousGoodsLimitation_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:dangerousGoodsLimitation"]

    },
    "DangerousGoodsQuantity_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:dangerousGoodsQuantity"]

    },
    "DangerousGoodsUNNumber_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:unNumber"]

    },
    "DangerousGoodsVolume_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:shipmentDimensions","fx:volume"]

    },
    "Division_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:hazardClass","fx:division"]

    },
    "DominantHazardClass_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:hazardClass","fx:class"]

    },
    "GrossWeight_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:shipmentDimensions","fx:grossWeight"]

    },
    "NetWeight_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:shipmentDimensions","fx:netWeight"]

    },
    "PackageQuantity_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:allPackedInOne","fx:numberOfPackages"]

    },
    "PackingGroupCode_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:packingGroup"]

    },
    "ProperShippingName_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:properShippingName"]

    },
    "TransportRadiationLevelIndex_collection":{
        "base":"fx:packageGroup",
        "path":["fx:Flight","fx:dangerousGoods"],
        "keys": ["fx:dangerousGoodsPackage","fx:radioactiveMaterials","fx:transportIndex"]

    },
    "alongRouteDistance_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys": ["fx:element","fx:alongRouteDistance"]
    },
    "altimeterSetting_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys": ["fx:element","fx:point4D","fx:altimeterSetting"]
    },
    "elementStartPoint_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:elementStartPoint"]
    },
    "estimatedElapsedTimeLongitude_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:routeInformation","fx:estimatedElapsedTime","fx:location"]
    
    },"estimatedElapsedTimeRegion_collection":{
        "base":"fx:current",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:routeInformation","fx:estimatedElapsedTime","fx:location"]
    
    },
    "levelAltitude_collection":{
        "base":"fx:current",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:point4D","fx:level","altitude"]
    },
    "modifiedRouteItemReference_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:modifiedRouteItemReference"]
    },
    "position_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:point4D","fx:position"]
    },

    "predictedAirspeed_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:point4D","fx:predictedAirspeed"]
    },

    "predictedGroundSpeed_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:point4D","fx:predictedGroundspeed"]
    },
    "routeDesignator_collection":{
        "base":"fx:desired",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:routeDesignatorToNextElement"]
    },
    "StandardInstrumentArrivalIdentifier_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:routeDesignatorToNextElement","fx:standardInstrumentDeparture"]
    },
    "trajectoryPointDescription_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:point4D","fx:time","fx:relativeTimeFromInitialPredictionPoint"]
    },
    "VerticalRange_collection":{
        "base":"fx:agreed",
        "path":["fx:Flight","fx:routeTrajectoryGroup"],
        "keys":["fx:element","fx:point4D","fx:verticalRange"]
    }
}