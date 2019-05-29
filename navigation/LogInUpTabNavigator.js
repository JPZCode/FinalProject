import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/LogIn';

const Main = createStackNavigator({
  Main: RegisterScreen,
});

Main.navigationOptions = {
  tabBarLabel: 'LogUp',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-add${focused ? '' : '-outline'}`
          : 'md-add'
      }
    />
  ),
};

const LogIn = createStackNavigator({
  Log: LoginScreen,
});

LogIn.navigationOptions = {
  tabBarLabel: 'LogIn',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name = {
        Platform.OS === 'ios' ? 'ios-log-in' : 'md-log-in'
      }
    />
  ),
};

export default createBottomTabNavigator({
  Main,
  LogIn,
});
