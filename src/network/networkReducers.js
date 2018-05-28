import * as constants from './network.constants';

export const _INITIAL_STATE_ = {
    isConnected: false
};

export default function (state: any = _INITIAL_STATE_, action: Function) {
    switch (action.type) {
        case constants.UPDATE_CONNECTION_STATUS:
            return {
                ...state,
                isConnected: action.isConnected
            };
        default:
            return {
                ...state
            };
    }
}