import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './header';
import Btn from './btn';
import InputFeild from './inputFeild';

import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {constant} from '../shared/constant';

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setcheck] = useState(true);

  const login = async () => {
    try {
      const getuser = await AsyncStorage.getItem(email);
      const user = JSON.parse(getuser);
      if (user && user.email === email && user.password === password) {
        navigation.navigate('Home', {firstname: `${user.finame}`});
      } else {
        alert(constant.NOTUSER);
      }
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      <Header headerName={constant.LOGIN} content={constant.LOGINCONTENT} />

      <View style={styles.loginForm}>
        <InputFeild
          required
          setEmail={setEmail}
          setcheck={setcheck}
          title="Email"
          onChange={e => setEmail(e)}
          /* onTextEnter={e => console.log(e)} */
          precontent="Enter Email"
          visibility="true"
          /*  check="Email" */
        />

        <InputFeild
          required
          setPassword={setPassword}
          setcheck={setcheck}
          title="Password"
          /* onChangeText={e => getData(e)} */
          onChange={e => setPassword(e)}
          precontent="Creat Password"
          visibility="false"
          /*  check="Password" */
          insertimg="true"
          src={require('../asset/closeeye.png')}
        />
        <View style={styles.rememberContainer}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <CheckBox boxType={'square'} style={{height: 20, width: 20}} />
            <Text style={styles.remeitem}>Remember me</Text>
          </View>
          <Text style={[styles.remeitem, styles.forgetPas]}>
            Forgot Password?
          </Text>
        </View>
      </View>

      <View style={styles.btncontainer}>
        <Btn
          emailValue={email}
          /*  onEventHandler={validation} */
          onEventHandler={login}
          passwordValue={password}
          Valid={check}
          label="Login"
          active="true"
        />
        <Text style={styles.forgetPas}>Or</Text>
        <Btn src={require('../asset/googleicon.png')} label="Google" />
        <Btn src={require('../asset/twittericon.png')} label="Twitter" />
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },

  loginForm: {
    flex: 2,
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },

  rememberContainer: {
    flex: 0.25,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  remeitem: {
    marginLeft: 10,
    fontSize: 19,
  },
  forgetPas: {
    color: 'grey',
    fontWeight: '600',
  },
  btncontainer: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
