import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen';
import DetailScreen from './src/screens/detailScreen';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'BusinessSearch'
    }
  }
);

export default createAppContainer(navigator);