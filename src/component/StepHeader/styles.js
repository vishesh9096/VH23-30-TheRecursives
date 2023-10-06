import React from "react";
import { StyleSheet } from "react-native";
import { colors, fonts, Utils } from "../../contants";

const styles = StyleSheet.create({
    backViewCss: {
        // width: Utils.ScreenWidth(10),
        height: Utils.ScreenWidth(7),
        marginVertical: Utils.ScreenWidth(4),
        justifyContent: 'center', alignItems: "center",
        marginHorizontal: Utils.ScreenWidth(2),
    }
    ,
    backIconCss: {
        resizeMode: 'contain',
        height: Utils.ScreenWidth(4.8),
        width: Utils.ScreenWidth(5.8),
        marginLeft: 8
    },
    logoIconCss: {
        alignSelf: 'center',
        resizeMode: 'contain',
        height: 43, // 40I
        width: 96, // 95
        marginVertical: Utils.ScreenWidth(7),
        marginLeft: 45,
        marginBottom: -1,
    },
    OneHealth: {
        fontSize: Utils.ScreenWidth(1.7),
        textAlign: 'center', 
        color: colors.black,
        fontFamily: fonts.bold, 
        marginTop: Utils.ScreenWidth(-11),
        // left: Utils.ScreenWidth(2.3),
    },
    Step: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.9), // 14
        textAlign: 'center', 
        marginTop: Utils.ScreenWidth(10),
    },
    borderW: {
        height: 4,
        // width: "95%",
        backgroundColor: colors.grey2,
        marginTop: Utils.ScreenWidth(2),
        borderRadius: Utils.ScreenWidth(1),
        marginHorizontal: Utils.ScreenWidth(13),
    },
    border2: {
        height: 4,
        width: "12%",
        backgroundColor: '#008080',
        borderRadius: Utils.ScreenWidth(1),
    },
});

export default styles;