import React, { Component } from "react";
import { View, Image, NetInfo } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import styles from "./styles/SplashStyles";

export default class Splash extends React.Component<> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Home" })]
      });
      this.props.navigation.dispatch(resetAction);
    }, 2000);
  }

  render() {
    return (
      <View style={styles.splashImageView}>
        <Image
          source={require("../../../images/g2i.png")}
          style={styles.splashImage}
          resizeMode="contain"
        />
      </View>
    );
  }
}