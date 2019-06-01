import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LogNavigator from '../navigation/LogInUpTabNavigator';

export default createAppContainer(createSwitchNavigator({
  
  TabNavigator: LogNavigator,
  Navigator: MainTabNavigator,

}));