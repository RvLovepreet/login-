import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from './screens/signup/SignUp';
import {AsyncStr} from './screens/signup/AsyStr';
import {AsyArrayObj} from './screens/signup/AsyArrayObj';
import LoginForm from './screens';
import Welcome from './screens/Profile/Welcome';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Home" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  /*  return <SignUp />; */
  /*   return <AsyArrayObj />; */
  /*   return <AsyncStr />; */
  /*  return <LoginForm />; */
};

export default App;
