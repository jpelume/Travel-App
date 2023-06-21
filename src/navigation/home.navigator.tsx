import React from 'react';
import {Home} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, IconName, IconType} from '../components';
import theme from '../utils/theme';

const HomeTab = createBottomTabNavigator();
const HomeNavigator = () => {
  return (
    <HomeTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingVertical: 10,
          height: 70,
          backgroundColor: 'black',
        },
      }}>
      <HomeTab.Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              iconName={IconName.HOME}
              iconType={IconType.FONT_AWESOME}
              size={focused ? 32 : 24}
              color={focused ? theme.COLORS.PRIMARY : theme.COLORS.GREY}
            />
          ),
          tabBarInactiveTintColor: theme.COLORS.GREY,
          tabBarActiveTintColor: theme.COLORS.PRIMARY,
        }}
      />
      <HomeTab.Screen
        name="Bookmark"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              iconName={IconName.BOOKMARK}
              iconType={IconType.FONT_AWESOME}
              size={focused ? 32 : 24}
              color={focused ? theme.COLORS.PRIMARY : theme.COLORS.GREY}
            />
          ),
          tabBarInactiveTintColor: theme.COLORS.GREY,
          tabBarActiveTintColor: theme.COLORS.PRIMARY,
        }}
      />
      <HomeTab.Screen
        name="Calendar"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              iconName={IconName.CALENDAR}
              iconType={IconType.FONT_AWESOME}
              size={focused ? 32 : 24}
              color={focused ? theme.COLORS.PRIMARY : theme.COLORS.GREY}
            />
          ),
          tabBarInactiveTintColor: theme.COLORS.GREY,
          tabBarActiveTintColor: theme.COLORS.PRIMARY,
        }}
      />
      <HomeTab.Screen
        name="Resources"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              iconName={IconName.BUILDING}
              iconType={IconType.FONT_AWESOME}
              size={focused ? 32 : 24}
              color={focused ? theme.COLORS.PRIMARY : theme.COLORS.GREY}
            />
          ),
          tabBarInactiveTintColor: theme.COLORS.GREY,
          tabBarActiveTintColor: theme.COLORS.PRIMARY,
        }}
      />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
