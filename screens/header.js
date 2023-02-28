import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Header = props => {
  return (
    <View style={styles.loginheadingcontainer}>
      <View style={styles.loginElement}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={styles.loginImage}
            source={require('../asset/login.png')}
          />

          <Text style={styles.login}>{props.headerName}</Text>
        </View>
        <Image
          style={{width: 20, height: 20}}
          source={require('../asset/close2.png')}
        />
      </View>
      {props.content ? (
        <Text style={styles.logincontent}>{props.content}</Text>
      ) : null}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  loginheadingcontainer: {
    flex: 1,
    padding: 20,
  },
  loginElement: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  login: {
    fontSize: 26,
    fontWeight: 500,
  },
  logincontent: {
    fontSize: 20,
    fontWeight: '600',
    color: 'grey',
  },
});
