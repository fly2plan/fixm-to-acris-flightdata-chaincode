import { DEFAULT_VERSION } from "../lib/constants";
import path  = require("path"); 
import { icaoToIata } from "./iataicaomapper/icao_to_iata";
import { alternateTags } from "./fixsmalternativetagmapper/alternate";
import { collections } from "./models/schema/4.2/Collections";

export const getModel = (modelFileName :string,version?:string)=>{

    if(version === undefined){
        version = DEFAULT_VERSION;
    }
    const modelPath = path.join(__dirname ,"models" ,"schema",version, modelFileName )
    const { Model } = require(modelPath)
    return JSON.parse(Model)
}

export const getIATA= ()=>{
    return icaoToIata;
  
}

export const getAlternative = ()=>{
    return alternateTags;
}

export const getCollectionModel = (version?:string)=>{
    return collections;

}

