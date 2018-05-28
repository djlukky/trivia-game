import React, { Component } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator, ToastAndroid,
          BackHandler, NetInfo, FlatList, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import entities from 'entities';
import {Grid, Col} from 'react-native-easy-grid';
import AppHeader from "../../../components/appheader/AppHeader";
import styles from "../styles/ResultsStyles";
import * as config from '../../../../AppConfig';
import { StackActions, NavigationActions } from 'react-navigation';
import * as networkActions from '../../../../network/networkActions';
import { responsiveHeight } from "react-native-responsive-dimensions";

export class ResultsComponent extends Component<{}> {

  constructor(props) {
    super(props);
    this.timer = {
      ref: null,
      isTimerRunning: false
    }
    this.getScore = this.getScore.bind(this);
    //this.renderResultItem = this.renderResultItem.bind(this);
    this.onPressPlayAgain = this.onPressPlayAgain.bind(this);
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
    const { playAgainPressed, resetCurrentIndex, resetQuestions, 
            resetBeginPressedFlag, navigation } = this.props;
    if (playAgainPressed) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Home" })]
      });
      navigation.dispatch(resetAction);
      resetBeginPressedFlag();
      resetCurrentIndex();
      resetQuestions();
    }
  }

  onPressPlayAgain() {
    const { playAgainRequest } = this.props;
    playAgainRequest();
  }

  getScore() {
    const {trivia_answers} = this.props;
    var score = 0;
    trivia_answers.forEach(answer => {
      if (answer.isCorrect)
        score += config.marksPerQuestion;
    });
    score = '' + score + ' / ' + trivia_answers.length ;
    console.log('$$$$$$$$$Score: ', score);
    return score;
  }

  renderResultItem = (item, index) => {
    return (
        <Grid style={styles.resultCard} key={item.itemQuestion}>
          <Col size={15}>
            <Icon name={item.itemIcon} size={responsiveHeight(5)}/>
          </Col>
          <Col size={85}>
            <Text style={styles.itemResultText}>{item.itemQuestion}</Text>
          </Col>
        </Grid>
    );
  }

  render() {
    const {trivia_questions, trivia_answers} = this.props;
    const results_data = [];
    for (var index = 0; index < trivia_questions.length; index++) {
      results_data[index] = {
        itemIcon: trivia_answers[index].isCorrect ? 'add-circle-outline' : 'remove-circle-outline',
        itemQuestion: entities.decodeHTML(trivia_questions[index].question)
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AppHeader title1="You scored"
            title2={this.getScore()}/>
        </View>
        <ScrollView contentContainerStyle={styles.contents}>
          {results_data.map(this.renderResultItem)}
          <TouchableOpacity onPress={this.onPressPlayAgain}
                            style={styles.buttonContainer}>
            <Text style={styles.playagain} >PLAY AGAIN?</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}