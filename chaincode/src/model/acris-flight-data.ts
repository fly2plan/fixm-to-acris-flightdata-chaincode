/*
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AcrisDataModel {
    flightData: object;
    flightKey: string;
    // Which IATA entity updated the data.
    updaterId: string;
    txId: string;
    docType: string;
}

export interface AcrisDataHistory {
    flightData: object;
    timestamp: object;
    key: string;
}