import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const InputFeild = props => {
  const [onfocus, setFocus] = useState(false);
  const [visible, setVisible] = useState(
    props.visibility === 'true' ? false : true,
  );

  const imag = props.insertimg === 'true' ? true : false;
  const validation = (checktype, value) => {
    switch (checktype) {
      case 'Email' || 'email' || 'EMAIL':
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(value) === false) {
          props.setEm(value);
          props.setcheck(false);
        } else {
          props.setEm(value);
          props.setcheck(true);
        }
        break;
      case 'Password' || 'password' || 'PASSWORD':
        let reg1 =
          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (reg1.test(value) === false) {
          props.setPsw(value);
          props.setcheck(false);
        } else {
          props.setPsw(value);
          props.setcheck(true);
        }
        break;
      default:
        break;
    }
  };
  const visiblePassword = () => {
    setVisible(!visible);
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
        onChangeText={text => {
          validation(props.check, text);
          if (props.onChange) {
            props.onChange(text);
          }
        }}
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
export default InputFeild;
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
