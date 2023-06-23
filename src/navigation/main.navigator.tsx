import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './home.navigator';
import {HotelDetails, Places} from '../screens';

const MainStack = createStackNavigator();
const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={HomeNavigator} />
      <MainStack.Screen name="Places" component={Places} />
      <MainStack.Screen name="HotelDetails" component={HotelDetails} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
