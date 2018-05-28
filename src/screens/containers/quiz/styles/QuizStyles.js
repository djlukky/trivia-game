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
  card: {
    backgroundColor: '#DCDADA',
    height: responsiveHeight(20),
    width: responsiveWidth(80),
    elevation: 3,
    alignItems: "center", 
    justifyContent: "center",
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(5),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    padding: responsiveHeight(5),
    borderRadius: responsiveWidth(2)
  },
  header: {
    alignItems: "center", 
    justifyContent: "center"
  },
  question: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '200',
    textAlign: 'center',
    opacity: 1
  },
  pageno: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.3),
    fontWeight: '200',
    textAlign: 'center',
    opacity: 1,
    marginTop: 5
  },
  option: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '300',
    textAlign: 'left',
  },
  optionContainer: {
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    backgroundColor: '#DCDADA',
    borderRadius: responsiveWidth(2),
    elevation: 3,
    padding: 10,
    marginBottom: responsiveHeight(3)
    /* shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25 */
  }
});

export default styles;