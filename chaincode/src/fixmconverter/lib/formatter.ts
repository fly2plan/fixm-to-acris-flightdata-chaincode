/* eslint @typescript-eslint/no-var-requires: "off" */
import {getType, keyPresent} from'./objecthandler' ;
import * as FILTER from "./filters"

/* tslint:disable no-var-requires */
const IterateObject = require("iterate-object")

const setTextValue= (dataValue:any)=>{
    if(keyPresent(dataValue,"_")){
        dataValue.value = dataValue._
        delete dataValue._
    }

}


export const formatObject = (formatObj:any)=>{
    IterateObject(formatObj,(value: any,name:any)=> {
        const type = getType(value)
        switch (type){
            case 'object':
                setTextValue(value)
                FILTER.removeUnwantedKeys(value)
                FILTER.removeTag(value)
                FILTER.removeSingleArray(value)
                FILTER.removeEmptyFields(value)
                FILTER.removeEmptyArrays(name,value,formatObj)
                FILTER.removeEmptyObject(name,value,formatObj)
            case 'array':
                formatObject(value)
        }
    })
    FILTER.removeEmptyKeyFields(formatObj)
    return formatObj
}


