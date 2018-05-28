import { ToastAndroid } from 'react-native';
import * as networkConstants from './network.constants';
import {store} from '../boot/configureStore';

export default function fetchCustom(url, initObject) {
    return new Promise((resolve, reject) => {
        if (!store.getState().networkReducers.isConnected) {
            ToastAndroid.showWithGravity(
                'You are offline. Please connect to Internet and try again.',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            return;
        }
        var timer1 = setTimeout(() => {
            reject(new Error("timeout"))
        }, networkConstants.TIMEOUT);
        console.log('########################## FETCH REQUEST #########################');
        console.log('URL: '+ url);
        console.log('Request: ' + JSON.stringify(initObject));
        fetch(url, initObject)
            .then(response => {
                console.log('########################## FETCH RESPONSE #########################');
                console.log('Response: '+JSON.stringify(response));
                if (response.status !== 200){
                    clearTimeout(timer1);
                    return;
                }
                resolve(response);
                clearTimeout(timer1);
            })
            .catch(error => {
                console.log('########################## FETCH ERROR #########################');
                console.log(error);
                ToastAndroid.showWithGravity(
                    'Sorry, something went wrong: ' + error,
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                  );
                clearTimeout(timer1);
            });
    })
}