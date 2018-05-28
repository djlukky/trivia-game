import { ToastAndroid } from 'react-native';
import * as config from '../../../AppConfig';
import fetchCustom from '../../../network/networkHelper';

var api = {
    getTriviaQuestions(beginObject) {
        var beginURL = config.apiUrl
            + "amount=" + beginObject.amount
            + "&difficulty=" + beginObject.difficulty
            + "&type=" + beginObject.type;
        var fetchMethod = "GET";
        return fetchCustom(
            beginURL,
            {
                method: fetchMethod,
                headers: {
                    cache: "no-store"
                }
            }
        )
            .then(response => response.json())
            .catch(error =>
                ToastAndroid.showWithGravity(
                    "Sorry, something went wrong: " + error,
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                )
            );
    }
};

module.exports = api;