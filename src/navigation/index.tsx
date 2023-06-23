import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './auth.navigator';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './main.navigator';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="Main" component={MainNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
