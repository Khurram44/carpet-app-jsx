import React, { useState } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Feather from 'react-native-vector-icons/Feather'
import Images from "../assets/Images";
import Button from "../components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AllRugs from "../components/AllRugs";
import RecentlyViewed from "../components/RecentlyViewed";
import SimilarProducts from "../components/SimilarProducts";
import ServiceSection from "../components/ServiceSection";
import SpotLight from "../components/SpotLight";
import PopularRugs from "../components/PopularRugs";
import ShopbySize from "../components/ShopbySize";
import Categories from "../components/Categories";



const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            />
            <ScrollView>
                <View >
                     <Categories/>
                    <AllRugs/>
                    <RecentlyViewed />
                    <SimilarProducts />
                    <ServiceSection /> 
                    <SpotLight/>
                    <ShopbySize/>
                    <View style={{marginBottom:hp('15%')}}> 
                    <PopularRugs/> 
                    </View> 
                   
                </View>
            </ScrollView>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    img: {
        alignSelf: 'center'
    },
    title: {
        fontSize: 10,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        marginTop: hp('1%'),
        color: colors.black,
        letterSpacing: 0.5
    },
    seeall: {
        fontSize: 10,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        color: '#fff'
    },
    back: {
        backgroundColor: '#F6F6F6',
        width: wp('21%'),
        padding: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal: wp('1')

    },
    back1: {
        backgroundColor: colors.black,
        width: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal: wp('1'),
        height: hp('9.5%')

    },
    heading: {
        fontSize: 18,
        fontFamily: fonts.LORA_SEMI_BOLD,
        alignSelf: 'center',
        color: colors.black,
        letterSpacing: 0.5
    }






})



