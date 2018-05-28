import React, { Component } from "react";
import {
  Text, View, TouchableOpacity, ActivityIndicator, ToastAndroid,
  BackHandler, NetInfo
} from "react-native";
import entities from 'entities';
import AppHeader from "../../../components/appheader/AppHeader";
import styles from "../styles/QuizStyles";
import * as config from '../../../../AppConfig';
import { StackActions, NavigationActions } from 'react-navigation';
import * as networkActions from '../../../../network/networkActions';

export class QuizComponent extends Component<{}> {

  constructor(props) {
    super(props);
    this.timer = {
      ref: null,
      isTimerRunning: false
    }
    //this.onSelectOption = this.onSelectOption.bind(this);
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
    const { trivia_questions, current_index, navigation } = this.props;
    if (current_index >= trivia_questions.length) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Results" })]
      });
      navigation.dispatch(resetAction);
    }
  }

  onSelectOption(option) {
    console.log("Option ", option);
    const {trivia_questions, current_index, saveAnswerAndEvaluate} = this.props;
    const correct_option = trivia_questions[current_index].correct_answer;
    const isCorrectOption = (option === correct_option); 
    console.log("User answer ", option);
    saveAnswerAndEvaluate(option.toString(), isCorrectOption);
  }

  getOptions() {
    const {trivia_questions, current_index} = this.props;
    var options = trivia_questions[current_index].incorrect_answers;
    options.push(trivia_questions[current_index].correct_answer);
    options = this.shuffle(options);
    console.log('options: ', options);
    return options;
  }

  shuffle(options) {
    var currentIndex = options.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = options[currentIndex];
      options[currentIndex] = options[randomIndex];
      options[randomIndex] = temporaryValue;
    }
    return options;
  }

  renderOption  = (option, index) => {
    return (
      <TouchableOpacity onPress={() => this.onSelectOption(option)}
                        style={styles.optionContainer}
                        key={option}>
        <Text style={styles.option} >{entities.decodeHTML(option)}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {trivia_questions, current_index} = this.props;
    if (current_index >= trivia_questions.length)
      return null;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AppHeader title1={trivia_questions[current_index].category}/>
        </View>
        <View style={styles.contents}>
          <View style={styles.card}>
            <Text style={styles.question}>{entities.decodeHTML(trivia_questions[current_index].question)}</Text>
          </View>
          <View>
            {this.getOptions().map(this.renderOption)}
          </View>
          <Text style={styles.pageno}>{current_index + 1} of {trivia_questions.length}</Text>
        </View>
      </View>
    );
  }
}