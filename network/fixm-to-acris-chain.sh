#!/bin/bash
#
# Copyright IBM Corp All Rights Reserved
#
# SPDX-License-Identifier: Apache-2.0
#

# This script brings up a Hyperledger Fabric network for testing smart contracts
# and applications. The test network consists of two organizations with one
# peer each, and a single node Raft ordering service. Users can also use this
# script to create a channel deploy a chaincode on the channel
#
# prepending $PWD/../bin to PATH to ensure we are picking up the correct binaries
# this may be commented out to resolve installed version of tools if desired
./network.sh down
docker system prune -y
./network.sh up -ca
sleep 3
echo "=======creating channel============"
./network.sh createChannel
sleep 3
./network.sh deployCC -ccn fixmtoacriscovertercontract -ccp ../chaincode -ccl typescript
sleep 3
rm ../test-application/src/config/connection-org1.json
cp organizations/peerOrganizations/org1.example.com/connection-org1.json ../test-application/src/config/
chmod +rwx ../test-application/src/config/
sleep 3
rm -rf ../test-application/org1-wallet
pushd ../test-application
node setupUsers.js
sleep 2

node testchaincode.js

popd




