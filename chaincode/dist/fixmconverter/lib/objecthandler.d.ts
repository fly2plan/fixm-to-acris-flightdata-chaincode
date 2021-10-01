export declare const getType: (object: any) => "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array";
export declare const JSONify: (data: any) => any;
export declare const fetchDataFromPath: (dataObj: any, keyList: string[]) => any;
export declare const generateCollectionFromObject: (collectionObject: any, Key: string, collectionDetails: any, iterObj: any) => any;
export declare const isEmpty: (obj: any) => boolean;
export declare const keyPresent: (srcObj: any, keyValue: string) => any;
