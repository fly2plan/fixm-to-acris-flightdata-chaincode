const invoke = require('./src/app/invokeTransaction')
const fs = require('fs')
var myArgs = process.argv.slice(2);


function prettyJSONString(inputString) {
	return JSON.stringify(JSON.parse(inputString), null, 2);
}

async function execute(){
  let data = fs.readFileSync('fixm-sample.xml','utf-8')
  // let result = await invoke.executeTransaction("mychannel", "fixmtoacriscontract", "createAcrisDataModel", [data] , "app-user", "Org1");
  // console.log("====ACRIS Data Converted \n====",result )
  // let key = result.result;
   let message = await invoke.executeTransaction("mychannel", "fixmtoacriscontract", "readAcrisDataModel", ['2018-03-02T10:00:00.000ZEDDMLH462'] , "app-user", "Org1")
  // let message = await invoke.executeTransaction("mychannel", "fixmtoacriscontract", "updateExistingAcrisData", ['2018-03-02T10:00:00.000ZEDDMLH462',data] , "app-user", "Org1")
  // let message = await invoke.executeTransaction("mychannel", "fixmtoacriscontract", "getFlightHistory", [key] , "app-user", "Org1")

  console.log("====ACRIS Data Converted \n====",message )
}

//enrollAndSetupUser("app-user","Org1");
execute();
