import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {constant} from '../../shared/constant';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({route, navigation}) => {
  const {firstname} = route.params;
  const [users, setUsers] = useState();
  console.log(firstname);

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    const key = await AsyncStorage.getAllKeys();
    /* console.log(key); */
    const dataUser = await AsyncStorage.multiGet(key);
    setUsers(dataUser);
    console.log(users);
    for (let i in key) {
      /* console.log(users[i][0]); */
      console.log(users[i][1]);
      /* console.log(JSON.parse(users[i][1]).finame); */
    }
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.profilecontainer}>
          <Text style={styles.welcomeContent}>
            {constant.WELCOMECONTENT} {firstname}
          </Text>
          <FlatList
            data={users}
            renderItem={({item}) => <Text>{JSON.parse(item[1]).finame}</Text>}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
export default Welcome;
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  welcomeContent: {
    color: '#0048f0',
    fontSize: 40,
    fontWeight: '500',
  },
});
