import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
export const AsyncStr = () => {
  const [value, setValue] = useState();
  const [input, setInput] = useState();
  const [key, setKey] = useState();
  const obj = {
    fname: 'lovepreet',
    lname: 'singh',
    email: 'lovepreet@gmail.com',
    password: '3214',
  };
  const changeText = text => {
    setInput(text);
    console.log(text);
  };

  const changeKey = txt => {
    setKey(txt);
  };

  const storeData = async keyvalue => {
    try {
      console.log('chech 0 for key value: ', typeof keyvalue);
      const data = await JSON.stringify(obj);
      await AsyncStorage.setItem(keyvalue, data);
      console.log('check 1 : Saved with : ', data);
    } catch (e) {
      // saving error
    }
  };
  const getData = async keyforsrch => {
    try {
      const data = await AsyncStorage.getItem(keyforsrch);
      const res = await JSON.parse(data);
      console.log('object data : ', res);
      const keys = await AsyncStorage.getAllKeys();
      console.log('for all keys : ', keys);
      console.log('Chech 2 : getData after save : ', data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Sign up</Text>
        <TextInput placeholder="enter key" onChangeText={e => setKey(e)} />
        <TextInput
          placeholder="enter number"
          onChangeText={e => changeText(e)}
        />
        <TextInput
          placeholder="enter key for getting data"
          onChangeText={e => changeKey(e)}
        />
        <TouchableOpacity onPress={() => storeData(key)}>
          <Text> Press Me for save data!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getData(key)}>
          <Text> Press Me for retieve data!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
