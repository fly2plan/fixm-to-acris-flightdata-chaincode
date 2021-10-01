import { toClass } from "class-converter";
import { ACRISFlight } from "../assets/models/ACRISFlight";
import * as jsHandle from "./objecthandler"
import {formatObject} from "./formatter" ;
import {getCollectionModel, getModel} from "../assets/util" ; 
import { Parser } from "xml2js";
import { validateObject } from "./validator";
import { DEFAULT_VERSION,initializeAcris } from "./constants";


const parser = new Parser({ignoreAttrs : false, mergeAttrs : false});
let VERSION :any
let FIXM_DATA:object;
let ACRIS_OBJ:object;


const setObjectValues = (fixmDataObj:object)=>{
    ACRIS_OBJ =  jsHandle.JSONify(initializeAcris());
    FIXM_DATA = fixmDataObj;
}



// Takes in an XML string and converts it to ACRIS
export const transformFixmToAcris = (xmlString:any):any =>{
    try{
        setFixmDataFromXMLContent(xmlString);
    }catch(e){
        console.error("Invalid Fixm String : ", e);
        return;
    }
    ACRIS_OBJ = jsHandle.JSONify(mapper(ACRISFlight));
    ACRIS_OBJ = validateObject(ACRIS_OBJ);
    ACRIS_OBJ = formatObject(ACRIS_OBJ);
    return ACRIS_OBJ;
}

// Maps the XML tags to ACRIS attributes
const mapper = (classElement:any): any=>{
    const dataObj = mapAttributesOfElement(classElement.name);
    toClass(dataObj,classElement);
    return dataObj;
}

const mapAttributesOfElement =(elementName : string,elementObj?: any)=>{
    let AirMoveAttributes:any;
    if(elementObj !== undefined){
        AirMoveAttributes = elementObj;
    }else{
        AirMoveAttributes = getModel(elementName,VERSION);
    }
    Object.keys(AirMoveAttributes).forEach( key =>{ 
        const keyValue = AirMoveAttributes[key];
        const valueType = jsHandle.getType(keyValue);
        switch (valueType){
            case 'array':
                AirMoveAttributes[key] = jsHandle.fetchDataFromPath(FIXM_DATA,keyValue);
                break;
            case 'string':
                if(keyValue.includes("_collection")){
                    const model:any = getCollectionModel(VERSION);
                    const collectionObjectDetails = model[keyValue];
                    const iterobj = jsHandle.fetchDataFromPath(FIXM_DATA,collectionObjectDetails.path);
                    jsHandle.generateCollectionFromObject(AirMoveAttributes,key,collectionObjectDetails,iterobj);
                }else{
                    AirMoveAttributes[key] = mapAttributesOfElement(elementName=keyValue);
                }
                break;
            case 'object':
                AirMoveAttributes[key]=mapAttributesOfElement(elementName,elementObj= keyValue);
                break;
        }    
    })
    return AirMoveAttributes;
}

const setFixmDataFromXMLContent = (fixmData:string)=>{
    VERSION = DEFAULT_VERSION;
    parser.parseString(fixmData, (err:any, result:any) => {
        if(err) throw err;
        setObjectValues(result);
    });
}
