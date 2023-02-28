import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export const AsyArrayObj = () => {
  const [user, setUser] = useState({
    fname: 'abc',
    lname: 'xyz',
  });

  //for first name
  const setFirstName = e => {
    setUser(preFname => ({
      ...preFname,
      fname: e.target,
    }));
  };

  //for last name
  const setLastName = e => {
    setUser(preLname => ({
      ...preLname,
      lname: e.target,
    }));
  };
  const setObj = () => {
    console.log(user);
  };
  return (
    <SafeAreaView>
      <View>
        <TextInput
          placeholder="enter your first name"
          onTextInput={e => setFirstName(e)}
        />
        <TextInput
          placeholder="enter your Last name"
          onTextInput={e => setLastName(e)}
        />
        <TextInput placeholder="enter your email" />
        <TextInput placeholder="enter your phone" />
        <TextInput placeholder="enter your password" />
        <TouchableOpacity onPress={setObj}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default AsyArrayObj;
