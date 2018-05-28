import { AppRegistry, Alert } from 'react-native';
import App from './App';
import {setJSExceptionHandler, setNativeExceptionHandler} from 'react-native-exception-handler';
import RNRestart from 'react-native-restart';

/* const reporter = (error) => {
    console.log(error);
};

const errorHandler = (e, isFatal) => {
    if (isFatal) {
      reporter(e);
      Alert.alert(
          'Unexpected error occurred',
          `
          Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}
          Please close the app and start again!
          `,
        [{
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart();
          }
        }]
      );
    } else {
      console.log(e);
    }
  };

setJSExceptionHandler(errorHandler, true);

setNativeExceptionHandler((errorString => {
  console.log('Native exception !!!');
})); */

AppRegistry.registerComponent('TriviaGame', () => App);