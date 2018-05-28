import {StyleSheet, Dimensions} from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  contents: {
    backgroundColor: "#EAEAEA", 
    alignItems: "center", 
    justifyContent: "center"
  },
  header: {
    alignItems: "center", 
    justifyContent: "center"
  },
  text1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '200',
    textAlign: 'center',
    opacity: 1
  },
  text2: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '200',
    textAlign: 'center',
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(10),
    opacity: 1
  },
  playagain: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '300',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  buttonContainer: {
    height: responsiveHeight(8),
    width: responsiveWidth(50),
    backgroundColor: '#E13E2D',
    borderRadius: responsiveWidth(2),
    elevation: 3,
    padding: 10,
    marginTop: responsiveHeight(7),
    marginBottom: responsiveHeight(5)
  },
  itemResultText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.1),
    fontWeight: '200',
    textAlign: 'left',
    /* marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2), */
    opacity: 0.75
  },
  resultCard: {
    flex: 0,
    padding: responsiveWidth(3),
    flexDirection: "row",
    width: responsiveWidth(90),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(3),
    backgroundColor: "#DCDADA",
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;