import {StyleSheet, Dimensions} from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  contents: {
    backgroundColor: "#EAEAEA", 
    alignItems: "center", 
    justifyContent: "center"
  },
  card: {
    flex: 0.5,
    backgroundColor: '#DCDADA',
    elevation: 3,
    alignItems: "center", 
    justifyContent: "center",
    marginTop: responsiveHeight(10),
    marginLeft: responsiveWidth(10),
    marginRight: responsiveWidth(10),
    padding: responsiveHeight(5),
    borderRadius: responsiveWidth(2)
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
  begin: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '300',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: responsiveHeight(2),
    height: responsiveHeight(8),
    width: responsiveWidth(50),
    backgroundColor: '#E13E2D',
    borderRadius: responsiveWidth(2),
    elevation: 3,
    padding: 10
  }
});

export default styles;