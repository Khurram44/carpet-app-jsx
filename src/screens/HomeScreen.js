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
import { Catgories } from "../config/Data";



const HomeScreen = () => {
    const navigation = useNavigation();







    return (
        <View style={styles.container}>

            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
            /> 
            <View style={{marginTop:hp('2%')}}>
                <Text style={styles.heading}>Top Categories</Text>
            <View style={{marginTop:hp('2%'), flexDirection: 'row', justifyContent: 'space-around' ,flexWrap:'wrap',width:wp('100%'),alignSelf:'center'}}>
                {Catgories.map((data) => {
                    return ( 
                        <TouchableOpacity>
                        <View style={styles.back}>
                            <Image source={data.image} style={styles.img} />
                            <Text style={styles.title}>{data.title}</Text>
                        </View>
                        </TouchableOpacity> 
                    )
                })}

                <TouchableOpacity style={styles.back1}>
                    <Text style={styles.seeall}>See All</Text>
                </TouchableOpacity>
            </View>
            </View>



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
        color:colors.black,
        letterSpacing:0.5
    },
    seeall: {
        fontSize: 10,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        color:'#fff'
    },
    back: {
        backgroundColor: '#F6F6F6',
        width: wp('21%'),
        padding: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal:wp('1')

    },
    back1: {
        backgroundColor:colors.black,
        width: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('2%'),
        marginHorizontal:wp('1'),
        height:hp('9.5%')

    },
    heading:{
        fontSize:18,
        fontFamily:fonts.LORA_SEMI_BOLD,
        alignSelf:'center',
        color:colors.black,
        letterSpacing:0.5
    }






})



