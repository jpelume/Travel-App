import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, UpdateProfile, Welcome} from '../screens';

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Signup"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="UpdateProfile" component={UpdateProfile} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
