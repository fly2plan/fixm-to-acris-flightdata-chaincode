# fixm-to-acris-flightdata-chaincode

### The steps to follow 
    - Clone the repo.
    - Make sure you have hyperledger fabric 2.2 , node 12+ , go 15.7 .
    - Make sure bin folder inside fabic-sample in the path and copy config folder into the cloned repo  folder to repalce exiting one.
    - Go to chaincode folder and run command npm i and npm run build respectively.
    - Go to test-application and run command npm i.
    - Now , switch to network folder and run fixm-to-acris-chain.sh.(make sure you have given rights to current user using chmod * and chmod */**)
   
   
### Pre-requisites
-Docker & Docker compose
-Nodejs , NPM
-Download the latest fabric samples
-Copy the bin folder[ Ignore if you have already setup the latest fabric binaries in your system] and the config folder from the fabric samples and paste it in the fixm-to--acris-flightdata-chaincode directory 

### Booting up the network and deploying the chaincode [fixm-to-acris-flightdata-chaincode directory]

- Go to the test-application folder inside the fixm-to-acris-flightdata-chaincode directory and run npm install

- Go to the network folder and run the fixm-to-acris-chain.sh script
This script will :-

    -Prune any existing network containers
    -Export the binary path
    -Spin up the network
    -Create the channel
    -Package & Deploy the chaincode in the channel
-Copy the latest connection profile to the test application folder  
[ /test-application/src/config/]
-Registers and enrolls a sample user 
-Perform some sample transactions in the network

Once the script finishes its execution, you will have a sample fabric network with a deployed chaincode.

You can run the testchaincode.js file inside the test-application folder to submit transactions to the chaincode

   
