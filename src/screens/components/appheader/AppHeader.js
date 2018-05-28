import React, { PureComponent } from 'react';
import { Image, Text, View, StatusBar } from 'react-native';
import styles from './styles/AppHeaderStyles';

export default class AppHeader extends PureComponent<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        const {title1, title2} = this.props;
      return (
          <View>
            <StatusBar style={styles.statusBar} 
                        backgroundColor= '#1E1C37'
                        barStyle="light-content"/>
            <View style={styles.header}>
                <View style={styles.leftPanel}>
                    <View style={styles.logo}>
                        <Image  source={require('../../../images/g2i.png')}
                                resizeMode='contain'
                                resizeMethod='auto' 
                                style={styles.logoImage}/>
                    </View>
                </View>
                <View style={styles.headerTextArea}>
                    <Text style={styles.headerTitle}>{title1}</Text>
                    { (title2 != undefined) && <Text style={styles.headerTitle}>{title2}</Text> }
                </View>
                <View style={styles.rightPanel} />
            </View>
        </View>
      );
    }
}