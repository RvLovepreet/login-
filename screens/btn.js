import React, {useState} from 'react';
import InputFeild from './inputFeild';
import Info1 from './inputFeild';

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
const Btn = ({
  active,
  src,
  label,
  style,
  emailValue,
  Valid,
  passwordValue,
  onEventHandler,
}) => {
  const createAccount = () => {
    if (emailValue.length && passwordValue.length && Valid) {
      alert(
        `Your Email id : ${emailValue},\n Your Password : ${passwordValue}`,
      );
    } else {
      alert(
        'Enter valid email Or \nCreate Strong Password! \n with at least 8 character \n (using symbol,number,upper case and lower case)',
      );
    }
  };
  return (
    <View>
      <TouchableOpacity
        style={active ? styles.loginbtn : styles.btnstyle}
        onPress={onEventHandler}>
        {src ? <Image style={{width: 30, height: 30}} source={src} /> : null}
        <Text style={active ? styles.loginbtntext : styles.btntext}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btncontainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingRight: 20,
  },
  btnstyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#b1bbd2',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  btntext: {
    color: '#111',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 8,
  },
  loginbtntext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  loginbtn: {
    backgroundColor: '#0048f0',
    width: 360,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});
