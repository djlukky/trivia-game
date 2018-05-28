import { StyleSheet, Dimensions } from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

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
    backgroundColor: '#F5F3F3',
    height: responsiveHeight(20),
    width: responsiveWidth(80),
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(5),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    padding: responsiveWidth(5),
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
    textAlign: 'left',
    opacity: 1
  },
  pageno: {
    fontFamily: 'OpenSans-Regular',
    fontSize: responsiveFontSize(2.3),
    fontWeight: '200',
    textAlign: 'center',
    opacity: 1,
    marginTop: responsiveHeight(3)
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
    justifyContent: 'center',
    padding: responsiveWidth(5),
    marginBottom: responsiveHeight(3)
  }
});

export default styles;