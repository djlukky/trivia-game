import * as constants from './network.constants';

export function updateConnectionStatus(isConnected) {
    return {
        type: constants.UPDATE_CONNECTION_STATUS,
        isConnected: isConnected
    }
}