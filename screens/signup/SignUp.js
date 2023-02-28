import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {constant} from '../../shared/constant';
import {View, StyleSheet, Button} from 'react-native';
import InputFeild from '../inputFeild';
import Header from '../header';
import Btn from '../btn';
const SignUp = () => {
  const [fname, setfirstName] = useState('Lovepreet');
  const [lname, setlname] = useState('Singh');
  const [em, setEm] = useState('lovepreet@gmail.com');
  const [mobNo, setMobileNo] = useState('7740013458');
  const [psw, setPsw] = useState('love2000');

  const obj = {
    finame: fname,
    laname: lname,
    email: em,
    mobileNo: mobNo,
    password: psw,
  };
  const createAccount = async keyvalue => {
    try {
      console.log('chech 0 for key value: ', typeof keyvalue);
      const data = await JSON.stringify(obj);
      await AsyncStorage.setItem(keyvalue, data);
      console.log('check 1 : Saved with : ', data);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={styles.container}>
      <Header headerName={constant.SIGNUP} />
      <View style={styles.loginForm}>
        <InputFeild
          precontent="Enter First Name"
          title="First Name"
          visibility="true"
          required
        />
        <InputFeild
          precontent="Enter Last Name"
          title="Last Name"
          visibility="true"
        />
        <InputFeild
          precontent="Enter Email Name"
          required
          title="Email"
          visibility="true"
        />
        <InputFeild
          precontent="Enter Mobile No."
          title="Mobile No."
          visibility="true"
        />
        {/*  <InputFeild
          precontent="DD/MM/YYYY"
          title="Date of Birth"
          visibility="true"
        /> */}
        <InputFeild
          precontent="Create Password"
          title="Password"
          required
          visibility="false"
        />
        <InputFeild
          precontent="Confirm Password"
          title="Confirm Password"
          required
          visibility="false"
          onChange={e => setPsw(e)}
        />
      </View>
      <View style={styles.btncontainer}>
        <Button title="create Account" onPress={() => createAccount(em)} />
        <Btn
          label="Create Account"
          onEventHandler={() => createAccount(em)}
          active="true"
        />
      </View>
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -95,
  },
  loginForm: {
    flex: 2,
    alignItems: 'flex-start',
    marginTop: -175,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  btncontainer: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
