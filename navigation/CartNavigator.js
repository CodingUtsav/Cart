import {createAppContainer, createStackNavigator} from 'react-navigation';
import MyProduct from '../componets/MyProduct';

const CartNavigator = createStackNavigator({
  Home: {
    screen: MyProduct,
  },
});

export default createAppContainer(CartNavigator);
