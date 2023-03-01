import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {constant} from '../../shared/constant';
import {View, StyleSheet} from 'react-native';
import InputFeild from '../inputFeild';
import Header from '../header';
import Btn from '../btn';

const SignUp = ({navigation}) => {
  const [check, setcheck] = useState(true);
  const [fname, setfirstName] = useState('');
  const [lname, setlname] = useState('');
  const [em, setEm] = useState('');
  const [mobNo, setMobileNo] = useState('');
  const [psw, setPsw] = useState('');
  const [conpsw, setConpsw] = useState('');
  const [didExist, setDidExist] = useState(false);
  const createUser = async keyvalue => {
    try {
      const obj = {
        finame: fname,
        laname: lname,
        email: em,
        mobileNo: mobNo,
        password: psw,
      };

      const data = JSON.stringify(obj);
      console.log('check for data Storage : ', data);
      await AsyncStorage.setItem(keyvalue, data);
      alert(constant.ACCOUNTCREATE);
      navigation.navigate('Login');
      const getuser = await AsyncStorage.getItem(obj.email);
      const user = JSON.parse(getuser);
      console.log('check for data get for key : ', keyvalue, ': ', user);
    } catch (e) {
      // saving error
    }
  };
  const validation = () => {
    if (em.length && psw.length && check) {
      return true;
    } else {
      alert(constant.STRONGPASSWORD);
      return false;
    }
  };
  const userExist = async key => {
    const checkuser = await AsyncStorage.getItem(key);
    if (checkuser === null) {
      setDidExist(false);
    } else {
      setDidExist(true);
    }
  };

  const createAccount = key => {
    userExist(key);
    if (didExist) {
      alert(constant.ALREADY_EXIST);
    } else {
      if (validation()) {
        psw === conpsw
          ? createUser(key)
          : alert(constant.NOTMACTHPASSWORDANDCOMFIRMPASSWORD);
      }
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
          onChange={e => setfirstName(e)}
        />
        <InputFeild
          precontent="Enter Last Name"
          title="Last Name"
          visibility="true"
          onChange={e => setlname(e)}
        />
        <InputFeild
          precontent="Enter Email Name"
          required
          title="Email"
          visibility="true"
          check="Email"
          setEm={setEm}
          setcheck={setcheck}
          /*  onChange={e => setEm(e)} */
        />
        <InputFeild
          precontent="Enter Mobile No."
          title="Mobile No."
          visibility="true"
          onChange={e => setMobileNo(e)}
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
          setPsw={setPsw}
          setcheck={setcheck}
          check="Password"
          insertimg="true"
          src={require('../../asset/closeeye.png')}
          /*  onChange={e => setPsw(e)} */
        />
        <InputFeild
          precontent="Confirm Password"
          title="Confirm Password"
          required
          visibility="false"
          onChange={e => setConpsw(e)}
          insertimg="true"
          src={require('../../asset/closeeye.png')}
        />
      </View>
      <View style={styles.btncontainer}>
        <Btn
          label="Create Account"
          onEventHandler={() => createAccount(em)}
          /* onEventHandler={() => showvalues()} */
          active="true"
        />
        <Btn
          label="Login"
          onEventHandler={() => navigation.navigate('Login')}
          /* onEventHandler={() => showvalues()} */
        />
      </View>
    </View>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -140,
  },
  loginForm: {
    flex: 2,
    alignItems: 'flex-start',
    marginTop: -150,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  btncontainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
