export declare const getModel: (modelFileName: string, version?: string) => any;
export declare const getIATA: () => {
    BAW: string;
    EGLL: string;
    LATI: string;
    DAAG: string;
    SAEZ: string;
    LOWI: string;
    LOWS: string;
    LOWW: string;
    MYNN: string;
    OBBI: string;
    TPBP: string;
    EBBR: string;
    BDA: string;
    SBGL: string;
    SBGR: string;
    LBSF: string;
    CYUL: string;
    CYYZ: string;
    CYVR: string;
    MWCR: string;
    SCEL: string;
    ZBAD: string;
    ZSPD: string;
    LDDU: string;
    LDPL: string;
    LDSP: string;
    LDZA: string;
    LCLK: string;
    LCPH: string;
    LKPR: string;
    EKBI: string;
    EKCH: string;
    HECA: string;
    LFKB: string;
    LFBD: string;
    LFKF: string;
    LFLS: string;
    LFLL: string;
    LFML: string;
    LFMN: string;
    LFPG: string;
    LFBO: string;
    EDDB: string;
    EDDL: string;
    EDDF: string;
    EDDH: string;
    EDDV: string;
    EDDM: string;
    EDDS: string;
    DGAA: string;
    LXGB: string;
    LGAV: string;
    LGSA: string;
    LGKR: string;
    LGIR: string;
    LGKL: string;
    LGKF: string;
    LGKO: string;
    LGMK: string;
    LGPZ: string;
    LGRP: string;
    LGSR: string;
    LGTS: string;
    LGZA: string;
    VHHH: string;
    LHBP: string;
    BIKF: string;
    VOBG: string;
    VOMM: string;
    VOHY: string;
    VABB: string;
    VIDP: string;
    EIDW: string;
    LLBG: string;
    LIBD: string;
    LIPE: string;
    LIBR: string;
    LIEE: string;
    LICC: string;
    LIML: string;
    LIMC: string;
    LIRN: string;
    LIEO: string;
    LICJ: string;
    LIRZ: string;
    LIBP: string;
    LIRF: string;
    LIMF: string;
    LIPZ: string;
    LIPX: string;
    RJBB: string;
    RJTT: string;
    EGJJ: string;
    OJAI: string;
    HKJK: string;
    OKBK: string;
    ELLX: string;
    WMKK: string;
    VRMM: string;
    LMML: string;
    MMMX: string;
    GMMX: string;
    EHAM: string;
    DNAA: string;
    DNMM: string;
    ENGM: string;
    OPRN: string;
    OPLA: string;
    EPKK: string;
    EPWA: string;
    LPFR: string;
    LPMA: string;
    LPPT: string;
    LPPR: string;
    OTBD: string;
    LROP: string;
    UUDD: string;
    OEJN: string;
    OERK: string;
    BKPR: string;
    FSIA: string;
    WSSS: string;
    LJLJ: string;
    FACT: string;
    FALE: string;
    FAJS: string;
    RKSI: string;
    LEAL: string;
    LEBL: string;
    LEBB: string;
    LEIB: string;
    GCRR: string;
    LEMD: string;
    LEMG: string;
    LEMH: string;
    LEPA: string;
    LEZL: string;
    GCTS: string;
    LEVC: string;
    ESGG: string;
    ESSA: string;
    LFSB: string;
    LSGG: string;
    LSZH: string;
    VTBD: string;
    LTAI: string;
    LTFE: string;
    LTBS: string;
    LTBA: string;
    OMAA: string;
    OMDB: string;
    EGPD: string;
    EGAC: string;
    EGPH: string;
    EGPF: string;
    EGPE: string;
    EGCC: string;
    EGNT: string;
    EGHQ: string;
    KATL: string;
    KAUS: string;
    KBWI: string;
    KBOS: string;
    KCHS: string;
    KORD: string;
    KDFW: string;
    KDEN: string;
    KIAH: string;
    KLAS: string;
    KLAX: string;
    KMIA: string;
    KBNA: string;
    KMSY: string;
    KEWR: string;
    KJFK: string;
    KMCO: string;
    KPHL: string;
    KPHX: string;
    KPIT: string;
    KSAN: string;
    KSFO: string;
    KSJC: string;
    KSEA: string;
    KTPA: string;
    KIAD: string;
    DLH: string;
    A346: string;
};
export declare const getAlternative: () => {
    "fx:Flight": string;
    designatorIcao: string;
    "fx:arrivalAerodrome": string;
    locationIndicator: string;
    "fx:alternateAerodrome": string;
    "fx:agreed": string;
    "fx:current": string;
    "fx:negotiating": string;
    "fx:desired": string;
    "fx:icaoAircraftTypeDesignator": string;
};
export declare const getCollectionModel: (version?: string) => {
    AircraftType_collection: {
        keys: string[];
        base: string;
        path: string[];
    };
    AircraftNumber_collection: {
        keys: string[];
        base: string;
        path: string[];
    };
    CruiseClimbSpeed_collection: {
        keys: string[];
        base: string;
        path: string[];
    };
    CrusingLevelChangeLevel_collection: {
        keys: string[];
        base: string;
        path: string[];
    };
    EnrouteDelayReason_collection: {
        keys: string[];
        base: string;
        path: string[];
    };
    EnrouteDelayReference_collection: {
        keys: string[];
        base: string;
        path: string[];
    };
    DestinationAerodromeAlternate_collection: {
        base: string;
        keys: string[];
        path: string[];
    };
    EstimatedElapsedTime_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    ProfilePointAirSpeed_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    ProfilePointDistance_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    ProfilePointAltitude_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    ProfilePointTime_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    takeOffAlternateAerodrome_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    AirWaybillNumber_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    DangerousGoodsLimitation_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    DangerousGoodsQuantity_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    DangerousGoodsUNNumber_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    DangerousGoodsVolume_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    Division_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    DominantHazardClass_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    GrossWeight_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    NetWeight_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    PackageQuantity_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    PackingGroupCode_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    ProperShippingName_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    TransportRadiationLevelIndex_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    alongRouteDistance_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    altimeterSetting_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    elementStartPoint_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    estimatedElapsedTimeLongitude_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    estimatedElapsedTimeRegion_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    levelAltitude_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    modifiedRouteItemReference_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    position_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    predictedAirspeed_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    predictedGroundSpeed_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    routeDesignator_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    StandardInstrumentArrivalIdentifier_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    trajectoryPointDescription_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
    VerticalRange_collection: {
        base: string;
        path: string[];
        keys: string[];
    };
};
