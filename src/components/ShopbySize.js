import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Images from "../assets/Images";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";
import Sbzh from "./Sbzh";

const Data = [
    {
        id: 1,
        size: "12x16"
    }, {
        id: 2,
        size: "16x16"
    }, 


]

const ShopbySize = (props) => {
    return (
        <View style={styles.mainholder}>
            <Sbzh title="SHOP BY SIZE (FT)" />
            {
                Data.map((data) => {
                    return (
                        <View>
                            <View style={styles.rowholder}>
                                <View style={styles.container}>
                                    <Text style = {styles.size}>{data.size}</Text>
                                </View>
                                <View style={styles.container}>
                                    <Text style = {styles.size}>{data.size}</Text>
                                </View>
                                <View style={styles.container}>
                                    <Text style = {styles.size}>{data.size}</Text>
                                </View>



                            </View>

                          </View>
                    )
                })
            }

        </View>
    );
};

export default ShopbySize;

const styles = StyleSheet.create({
    container: {

        backgroundColor: "#F6F6F6",
        borderRadius: 50,
        width: wp("25%"),
        paddingHorizontal: wp("2.5%"),
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:hp("1%")

    },
    mainholder: {
        backgroundColor: colors.White,
        paddingHorizontal: wp("1.5%"),
        marginTop: -hp("2.5%")
    }, rowholder: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: hp("2.5%"),
    },
    text: {

        fontFamily: fonts.POPPINS_MEDIUM,
        fontWeight: "400",
        fontSize: 15,
        color: colors.GENERALTEXT,
        textAlign: "center",
        marginTop: -hp("1")

    },
    size:{
        fontSize:14,
        fontFamily:fonts.POPPINS_MEDIUM,
        fontWeight:"400",
        color:"#101010"
    }
});
