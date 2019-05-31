import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
//import Register from '../screens/Register';
import LogNavigator from '../navigation/LogInUpTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
  //TabNavigator: LogNavigator,
  Navigator: MainTabNavigator,

}));