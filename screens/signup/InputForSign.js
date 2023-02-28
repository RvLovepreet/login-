import React, {useState} from 'react';
import Btn from './btn';
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

const InputFeildForSignIn = props => {
  const [onfocus, setFocus] = useState(false);
  const [visible, setVisible] = useState(
    props.visibility === 'true' ? false : true,
  );
  const [focus, setfocus] = useState(false);
  const imag = props.insertimg === 'true' ? true : false;
  const validation = (checktype, value) => {
    switch (checktype) {
      case 'Email' || 'email' || 'EMAIL':
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(value) === false) {
          props.setEmail(value);
          props.setcheck(false);
          return false;
        } else {
          props.setEmail(value);
          props.setcheck(true);
          return true;
        }
        break;
      case 'Password' || 'password' || 'PASSWORD':
        let reg1 =
          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (reg1.test(value) === false) {
          props.setPassword(value);
          props.setcheck(false);
          return false;
        } else {
          props.setPassword(value);
          props.setcheck(true);
          return true;
        }
        break;
      default:
        break;
    }
  };
  const visiblePassword = () => {
    setVisible(!visible);
  };
  const onblur = () => {
    setFocus('heldf', false);
  };

  return (
    <View style={styles.loginHeading}>
      <Text style={styles.label}>
        {props.title}
        {props.required ? <Text style={styles.required}>*</Text> : null}
      </Text>
      <TextInput
        style={
          onfocus
            ? [styles.inputTextonFocus, styles.inputText]
            : [styles.inputTextnotFocus, styles.inputText]
        }
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={props.precontent}
        secureTextEntry={visible}
        onChangeText={text => validation(props.check, text)}
      />

      {imag ? (
        <TouchableOpacity onPress={visiblePassword}>
          <Image
            style={styles.inputimage}
            source={visible ? props.src : require('../asset/openeye.png')}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InputFeildForSignIn;

const styles = StyleSheet.create({
  loginHeading: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    paddingLeft: 20,
  },
  label: {
    fontSize: 20,
  },
  required: {
    color: 'red',
    fontWeight: '600',
  },
  inputTextonFocus: {
    borderWidth: 1,
    borderColor: '#3556fd',
  },
  inputTextnotFocus: {
    borderWidth: 1,
    borderColor: '#b1bbd2',
  },
  inputText: {
    color: '#fff',
    fontSize: 24,
    height: 45,
    fontWeight: '400',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 35,
    width: 350,
    paddingLeft: 10,
    color: '#111',
    marginTop: 10,
  },
  inputTextwithFocus: {
    color: '#fff',
    fontSize: 24,
    height: 45,
    fontWeight: '400',
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 35,
    width: 350,
    paddingLeft: 10,
    color: '#111',
    marginTop: 10,
  },
  inputimage: {
    top: -30,
    alignSelf: 'flex-end',
    marginRight: 50,
    width: 30,
    height: 20,
  },
});
