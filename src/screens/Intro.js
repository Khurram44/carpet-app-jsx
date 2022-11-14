import React, { useEffect } from "react";
import { StyleSheet, View, Image, StatusBar, SafeAreaView } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import fonts from "../constants/fonts";
import LinearGradient from 'react-native-linear-gradient';
import Images from "../assets/Images";
import { colors } from "../config/Colors";

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const Intro = () => {

    return (
        <SafeAreaView style={styles.container}>
             <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />
<View style = {styles.head}>
            <Image source={Images.BlackHeader}/></View>
            <View style = {styles.center}>
            <Image source={Images.center}/></View>
            <View style = {styles.foot}> 
            
            </View>
        </SafeAreaView>

    )
}
export default Intro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    } 
})