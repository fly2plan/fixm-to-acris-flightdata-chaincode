import { KEYS_REMOVABLE, TAGS_REMOVABLE } from "./constants";
import { isEmpty, keyPresent } from "./objecthandler";


export const removeUnwantedKeys=(dataValue : any)=>{
    KEYS_REMOVABLE.forEach(key=>{
        if(keyPresent(dataValue,key)){
            delete dataValue[key] ;
         }
    })

}



export const removeTag=(objValue:any)=>{
    Object.keys(objValue).forEach(key=>{
        TAGS_REMOVABLE.forEach(tagValue=>{
            if(key.includes(tagValue)){
                const newKey = key.replace(tagValue,'');
                objValue[newKey] = objValue[key];
                delete objValue[key];
            }
        })

    })
}

export const removeEmptyFields=(obj:any)=>{
    Object.keys(obj).forEach(key=>{
        if (!/\S/.test(obj[key])) {
            delete obj[key];
        }
    })
}


export const  removeSingleArray=(obj:any)=>{
    Object.keys(obj).forEach(key=>{
        if(Array.isArray(obj[key])){
            if(obj[key].length === 1){
                obj[key] = obj[key][0];
            }
        }
    })
}

export const removeEmptyObject=(key:any,value:any,obj:any)=>{
    if(isEmpty(value)){
        delete obj[key];
    }
}
export const removeEmptyArrays=(key:any,value:any,obj:any)=>{
    if(Array.isArray(value)){
        if(value.length === 0){
                delete obj[key];
        }

    }

}

export const removeEmptyKeyFields=(obj:any)=>{
        Object.keys(obj).forEach(key=>{
            if(isEmpty(obj[key])){
                delete obj[key];
            }
        })
}
