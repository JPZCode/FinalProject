import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LogNavigator from './MainNavigator';

export default createAppContainer(createSwitchNavigator({
  
  TabNavigator: LogNavigator,
  Navigator: MainTabNavigator,

}));