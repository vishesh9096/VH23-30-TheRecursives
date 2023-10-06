import React from "react";
import { StyleSheet } from "react-native";
import { colors, fonts, Utils } from "../../contants";

const styles = StyleSheet.create({
    headerViewCss: {
        flexDirection: 'row',
        height: Utils.ScreenWidth(15),
        paddingHorizontal: Utils.ScreenWidth(3),
    },
    menuIconViewCss: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIconCss: {
        resizeMode: 'contain',
        height: Utils.ScreenWidth(4.8),
        width: Utils.ScreenWidth(5.8),
    },
    titleCss: {
        fontWeight: '800',
        color: colors.black,
        fontFamily: fonts.extraBold,
        left: Utils.ScreenWidth(5),
        fontSize: Utils.ScreenWidth(4.36), // 18
    },
});

export default styles;