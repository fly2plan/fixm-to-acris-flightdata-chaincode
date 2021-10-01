const { Gateway, Wallets, TxEventHandler, GatewayOptions, DefaultEventHandlerStrategies, TxEventHandlerFactory } = require('fabric-network');

const path = require("path")
const log4js = require('log4js');
const logger = log4js.getLogger('doc-network');
const helper = require('./bchelper');


const executeTransaction = async (channelName, chaincodeName, fcn, args, username, org_name) => {
    try {
       
        logger.debug("--------executeTransaction::start--------", fcn,args,username,org_name)
        const ccp = await helper.getCCP(org_name);
        const walletPath = await helper.getWalletPath(org_name);
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        let identity = await wallet.get(username);
        if (!identity) {
            console.log(`An identity for the user ${username} does not exist in the wallet, so registering user`);
            await helper.getRegisteredUser(username, org_name, true)
            identity = await wallet.get(username);
            console.log('Run the registerUser.js application before retrying');
            return;
        }


        const connectOptions = {
            wallet, identity: username, discovery: { enabled: true, asLocalhost: true }
        
        }

        const gateway = new Gateway();
        await gateway.connect(ccp, connectOptions);

        const network = await gateway.getNetwork(channelName);
        const contract = network.getContract(chaincodeName);
        let result;
        let message;

        switch (fcn) {
         
            case "createAcrisDataModel":
                logger.debug("=======createDigitalDocument==========")
                result = await contract.submitTransaction(fcn, args[0]);
                console.log(result.toString())
                result = result.toString()
                break;
            case "readAcrisDataModel":
                    logger.debug("=======createDigitalDocument==========")
                    result = await contract.submitTransaction(fcn, args[0]);
                    console.log(result.toString())
                    result = result.toString()
                    break;
            case "updateAcrisDataModel":
                        logger.debug("=======createDigitalDocument==========")
                        result = await contract.submitTransaction(fcn, args[0],args[1]);
                        console.log(result.toString())
                        result = result.toString()
                        break;
            case "getFlightHistory":
                        logger.debug("=======createDigitalDocument==========")
                        result = await contract.submitTransaction(fcn,args[0]);
                        console.log(result.toString())
                        result = result.toString()
                        break;
            default:
                result="No function fund with name given";
                break;
        }

        await gateway.disconnect();

        let response = {
            message: message,
            result
        }

        return response;


    } catch (error) {

        console.log(`Getting error: ${error}`)
        return error.message

    }
}

exports.executeTransaction = executeTransaction;