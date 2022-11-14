import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import onBoardingScreen from '../screens/onBoardingScreen';
import LoginStack from './LoginStck';
import Register from '../screens/Register';
import Intro from '../screens/Intro';
import Bottomtab from '../screens/BottomTab';




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





    </Navigator>
);
export default AppNavigator;
