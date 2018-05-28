import React from "react";
import { StackNavigator } from "react-navigation";
import Splash from "./screens/components/splash/Splash";
import Home from "./screens/containers/home/Home";
import Quiz from "./screens/containers/quiz/Quiz";
import Results from "./screens/containers/results/Results";

const App = StackNavigator(
  {
    Splash: { screen: Splash },
    Home: { screen: Home },
    Quiz: { screen: Quiz },
    Results: { screen: Results }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none",
  }
);

export default () => (
  <App />
);
