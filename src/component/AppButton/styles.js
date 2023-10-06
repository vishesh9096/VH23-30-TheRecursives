import React from "react";
import { StyleSheet } from "react-native";
import { colors, fonts, Utils } from "../../contants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: Utils.ScreenWidth(11),
        borderRadius: Utils.ScreenWidth(2),
        marginHorizontal: Utils.ScreenWidth(2),
        // marginTop: 40,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: Utils.ScreenWidth(2),
    },
    iconViewCss: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Utils.ScreenWidth(13),
    },
    iconGmailCss: {
        resizeMode: 'contain',
        width: 24 ,// Utils.ScreenWidth(4), // 16,
        height: 24 , // Utils.ScreenWidth(4), // 16,
    },
    iconCss: {
        resizeMode: 'contain',
        width: Utils.ScreenWidth(4), // 16,
        height: Utils.ScreenWidth(4), // 16,
    },
    titleViewCss: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleCss: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.9), // 14

    },
});

export default styles;