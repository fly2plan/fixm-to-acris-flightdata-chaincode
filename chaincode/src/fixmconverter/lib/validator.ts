import { getIATA } from '../assets/util' ;
import {getType } from'./objecthandler' ;
import { ICAO_KEYS } from './constants';
// tslint:disable-next-line: no-var-requires
const IterateObject = require("iterate-object")

const formatAirportFacility = (obj:any)=>{
    try{
    const iataCode = obj.extensions.AirportFacility.iataCode
    if(iataCode !== ""){
        obj.extensions.AirportFacility.IATAIdentifier = iataCode
        delete obj.extensions.AirportFacility.iataCode
    }
    }catch(e){
        console.error(`Undefined Property Error : ${e}`)
    }
}


export const formatFlightNumber = (obj:any) =>{
    
    const icaoCode = obj.flightNumber.airlineCode
    const iataCode = toIATA(icaoCode.replace(/[0-9]/g, ''));

    if(!iataCode){
        obj.flightNumber.airlineCode = icaoCode.replace(/[0-9]/g, '')
    }else{
        obj.flightNumber.airlineCode = iataCode
    }

    obj.flightNumber.trackNumber = icaoCode.replace(/\D/g,'');
    if(obj.flightNumber.trackNumber ===''){
    }
    return obj
}



export const formatIcaoCodes = (dataValue:any)=>{
    
    let iataData :any
    Object.keys(dataValue).forEach(key=>{
        if(key.toLowerCase().includes("icao") ){
            const icaoData = dataValue[key]
            switch (getType(icaoData)){
                case 'string':
                    iataData = toIATA(icaoData)
                    break
                case 'array':
                    const iataArray :any = []
                    if (icaoData.length > 0){
                        icaoData.forEach((element:any) => {
                            iataArray.push(toIATA(element))
                        });
                        iataData = iataArray
                        // if single entry array, trat it as string
                        if(iataArray.length === 1){
                            dataValue[key] = icaoData[0]
                            iataData = iataArray[0]
                        }
                    }else{
                        iataData = []
                    }
                break
            }
            dataValue[key.replace(/icao/ig ,"iata")] = iataData
        }else if(ICAO_KEYS.includes(key)){
            if (typeof dataValue[key] !== 'object'){
                dataValue[key] = toIATA(dataValue[key])
            }

        }


    })
}

export const convertICAO = (obj:any)=>{
    IterateObject(obj,(value: any)=> {
        const type = getType(value)
        switch (type){
            case 'object':
                formatIcaoCodes(value);
                break;
               
            case 'array':
                convertICAO(value);
                break;
               
        }
    })
    return obj
}

export const validateObject = (obj:any)=>{
    obj = convertICAO(obj)
    formatFlightNumber(obj)
    formatAirportFacility(obj)
    return obj
}


export const toIATA = (icaoCode:string)=>{
    const codeList:any = getIATA()
    let IATAcode = codeList[icaoCode]
    if(IATAcode === undefined){
        IATAcode = ''
    }
    return IATAcode

}