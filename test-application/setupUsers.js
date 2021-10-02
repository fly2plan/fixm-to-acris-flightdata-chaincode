const helper = require('./src/app/bchelper')

async function enrollAndSetupUser(userName, orgName){

  let msg = await helper.getRegisteredUser(userName, orgName, true);
  console.log("====MSG====", msg)
}

//enrollAndSetupUser("app-user","Org1");
enrollAndSetupUser("app-user","Org1");
