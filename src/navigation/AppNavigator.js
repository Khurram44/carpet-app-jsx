import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import onBoardingScreen from '../screens/onBoardingScreen';
import LoginStack from './LoginStck';
import Register from '../screens/Register';
import Intro from '../screens/Intro';
import Bottomtab from '../screens/BottomTab';
import AllCategories from '../screens/AllCategories';
import ProductListing from '../screens/ProductListing';
import ProductDetail from '../screens/ProductDetails';
import ReviewsScreen from '../screens/ReviewsScreen';
import OrderComplete from '../screens/OrderComplete';




const { Navigator, Screen } = createStackNavigator();
    
const AppNavigator = () => (
    <Navigator screenOptions={{ headerShown: false, }} >

        {/* <Screen name='SplashScreen' component={SplashScreen} />      
        <Screen name='onBoardingScreen' component={onBoardingScreen} />  
        <Screen name='LoginStack' component={LoginStack} />        */}

        {/* <Screen name='LoginStack' component={LoginStack} /> */}

        {/* <Screen name='Register' component={Register} /> */}
        <Screen name='Intro' component={Intro} />
        <Screen name='Bottomtab' component={Bottomtab}/>
        <Screen name='AllCategories' component={AllCategories}/>
        <Screen name='ProductListing' component={ProductListing}/>
        <Screen name='ProductDetail' component={ProductDetail}/>
        <Screen name='ReviewsScreen' component={ReviewsScreen}/>
        <Screen name='OrderComplete' component={OrderComplete}/>











    </Navigator>
);
export default AppNavigator;
