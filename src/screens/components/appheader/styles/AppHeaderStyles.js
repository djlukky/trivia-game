import {Dimensions, StyleSheet} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    statusBar: {
        height: responsiveHeight(3),
        width: responsiveWidth(100),
    },
    header: {
        height: responsiveHeight(12),
        width: responsiveWidth(100),
        backgroundColor: '#2C2B4B',
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    leftPanel: {
        flex: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        height: responsiveHeight(10),
        width: responsiveWidth(21.5),
        marginLeft: responsiveWidth(2),
    },
    logoImage: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    headerTextArea: {
        flex: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#F2ECFF',
        fontFamily: 'OpenSans-Regular',
        fontSize: responsiveFontSize(2.5),
        fontWeight: '300',
        textAlign: 'center'
    },
    rightPanel: {
        flex: 20
    }
});

export default styles;