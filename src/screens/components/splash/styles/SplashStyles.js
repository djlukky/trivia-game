import {StyleSheet, Dimensions} from 'react-native';
import { responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const imageHeight = Dimensions.get("window").height * 0.4;

const styles = StyleSheet.create({
  splashImageView: {
    flex: 1, 
    backgroundColor: "#2C2B4B", 
    alignItems: "center", 
    justifyContent: "center",
  },
  splashImage: {
    height: imageHeight
  }
});

export default styles;