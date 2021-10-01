const invoke = require('./src/app/invokeTransaction')
const fs = require('fs')
var myArgs = process.argv.slice(2);


function prettyJSONString(inputString) {
	return JSON.stringify(JSON.parse(inputString), null, 2);
}

async function execute(){
  let data = fs.readFileSync('fixm-sample.xml','utf-8')
     let key = await invoke.executeTransaction("mychannel", "ACRISFlightData", "createAcrisDataModel", [data] , "app-user", "Org1");
     console.log("Key",key.result);
     let message = await invoke.executeTransaction("mychannel", "ACRISFlightData", "readAcrisDataModel", [key.result.toString().trim()] , "app-user", "Org1")
  // let message = await invoke.executeTransaction("mychannel", "ACRISFlightData", "updateAcrisDataModel", ['2018-03-02T10:00:00.000ZEDDMLH462',data] , "app-user", "Org1")
  // let message = await invoke.executeTransaction("mychannel", "ACRISFlightData", "getFlightHistory", ['2018-03-02T10:00:00.000ZEDDMLH462'] , "app-user", "Org1")

  console.log("====ACRIS Data Converted \n====", prettyJSONString(message.result) )
}

//enrollAndSetupUser("app-user","Org1");
execute();
