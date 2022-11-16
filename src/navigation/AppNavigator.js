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








    </Navigator>
);
export default AppNavigator;
