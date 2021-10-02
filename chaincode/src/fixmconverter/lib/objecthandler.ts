import { getAlternative } from "../assets/util";

// tslint:disable-next-line: no-var-requires
const IterateObject = require("iterate-object")



export const getType=(object:any)=>{
    if(Array.isArray(object)){
        return 'array' ;
    }else{
        return typeof object ;
    }
}


export const JSONify=(data :any)=>{
    return JSON.parse(JSON.stringify(data));
}


const getDataFromObject=(dataObject : any,Key :any)=>{
    Key = verifiedKey(dataObject,Key);
    if(Key === null){
        return ''
    }
    let keyValue = dataObject[Key];
    switch(typeof keyValue){
            case 'object':
                if(Array.isArray(keyValue)){
                    keyValue = keyValue[0];
                }else{
                    keyValue = JSONify(keyValue);
                }
                break
            case 'undefined':
                console.error(`The data for key : ${Key} is undefined, setting empty value`);
                keyValue = ''
            }
    return keyValue;
}


export const fetchDataFromPath=(dataObj: any, keyList:string[])=>{
    keyList.forEach(key =>{
        dataObj = getDataFromObject(dataObj,key);
    })
    if(Array.isArray(dataObj)){
        dataObj = dataObj[0];
    }
    return dataObj;

}


const verifiedKey= (dataObj :object,key:any)=>{
    if (!Array.isArray(dataObj)){
        if(dataObj.hasOwnProperty(key)){
            return key ;
        }else{
            return tryAlternateKey(key) ;
       }
    }
    
}

const tryAlternateKey=(key:string)=>{
    const altKeys:any = getAlternative();
    if(altKeys.hasOwnProperty(key)){
        return altKeys[key] ;
    }else{
        return null ;
    }

}

export const generateCollectionFromObject=(collectionObject:any,Key:string,collectionDetails:any,iterObj:any):any=>{
  let CollectObj :any;
  const collectionKeySet = collectionDetails.keys
  let collectionBase = collectionDetails.base
  if(iterObj !== ''){
        IterateObject([iterObj],(value:any)=>{
            switch (getType(value)){
                case 'object':
                        collectionBase = verifiedKey(value,collectionBase)
                        if(collectionBase !== null){
                            CollectObj = value[collectionBase]
                            collectionKeySet.forEach((key:any)=>{
                                CollectObj = collectKeys(CollectObj,key)
                            })
                            collectionObject[Key] = [CollectObj]
                            break
                        }else{
                            collectionObject[Key] = []
                            break
                        }
                case 'array':
                    generateCollectionFromObject(collectionObject,Key,collectionDetails,value)
            }
        })
    }else{
        collectionObject[Key] = []
    }
   
}



const collectKeys=(obj :any,Pkey:any)=>{
    const objectLst:any = []
    IterateObject(obj,(value:any)=>{
        switch(getType(value)){
            case 'object':
                Object.keys(value).forEach(key=>{
                    if(key === Pkey){
                        objectLst.push(value[key][0])
                    }
                })
        }
    })
    obj = objectLst
    return obj
}


export const isEmpty=(obj:any) =>{
    // tslint:disable-next-line: prefer-const
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const keyPresent=(srcObj:any,keyValue :string)=>{
    return srcObj.hasOwnProperty(keyValue) ;
}