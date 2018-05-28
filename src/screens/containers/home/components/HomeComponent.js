import React, { Component } from "react";
import {
  Text, View, TouchableOpacity, ActivityIndicator, ToastAndroid,
  BackHandler, NetInfo
} from "react-native";
import { BubblesLoader } from 'react-native-indicator';
import AppHeader from "../../../components/appheader/AppHeader";
import styles from "../styles/HomeStyles";
import * as config from '../../../../AppConfig';
import { StackActions, NavigationActions } from 'react-navigation';
import * as networkActions from '../../../../network/networkActions';
import { resetPlayAgainPressed } from "../../results/resultsActions";

export class HomeComponent extends Component<{}> {

  constructor(props) {
    super(props);
    this.timer = {
      ref: null,
      isTimerRunning: false
    }
    this.onPressBegin = this.onPressBegin.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleExit);
  }

  componentDidMount() {
    const { updateConnectionStatus } = this.props;
    NetInfo.isConnected.fetch().then(isConnected => {
      updateConnectionStatus(isConnected);
    });
    NetInfo.addEventListener('connectionChange', this._handleConnectionChange);
  }

  _handleConnectionChange = (networkInfo) => {
    const { updateConnectionStatus } = this.props;
    if (networkInfo.type === 'none')
      updateConnectionStatus(false);
    else
      updateConnectionStatus(true);
  }

  _handleExit = () => {
    if (!this.timer.isTimerRunning) {
      this.timer.isTimerRunning = true;
      const backInterval = 3000;
      clearTimeout(this.timer.ref);
      this.timer.ref = setTimeout(() => this.timer.isTimerRunning = false, backInterval);
      ToastAndroid.show('Press back again to exit the app', ToastAndroid.SHORT);
      return true;
    }
    return BackHandler.exitApp();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
    NetInfo.removeEventListener('connectionChange', this._handleConnectionChange);
    clearTimeout(this.timer.ref);
    this.timer = {
      ref: null,
      isTimerRunning: false
    };
  }

  componentDidUpdate() {
    const { beginPressed, resetBeginPressedFlag, navigation } = this.props;
    if (beginPressed) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Quiz" })]
      });
      navigation.dispatch(resetAction);
    }
  }

  onPressBegin() {
    const { beginRequest, resetPlayAgainPressed } = this.props;
    beginRequest({
      amount: config.totalQuestions,
      difficulty: config.selectedTriviaDifficulty,
      type: config.selectedTriviaType
    });
    resetPlayAgainPressed();
  }

  render() {
    const { loadingIndicator } = this.props;
    if (loadingIndicator) {
      return (
        <View style={styles.loadingContainer}>
          <BubblesLoader size={40}
            color="#E13E2D" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AppHeader title1="Welcome to the"
            title2="Trivia Challenge!" />
        </View>
        <View style={styles.contents}>
          <View style={styles.card}>
            <Text style={styles.text1}>You will be presented with {config.totalQuestions} {(config.selectedTriviaType === config.triviaType.BOOLEAN) ? "True or False" : "Multiple Choice"} questions.</Text>
          </View>
          <Text style={styles.text2}>Can you score 100%?</Text>
          <TouchableOpacity onPress={this.onPressBegin}
            style={styles.buttonContainer}>
            <Text style={styles.begin} >BEGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}