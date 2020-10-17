import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen';
import ResultShowScreen from './src/screens/resultShowScreen';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'BusinessSearch'
    }
  }
);

export default createAppContainer(navigator);