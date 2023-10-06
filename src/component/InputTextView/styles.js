import React from "react";
import { StyleSheet } from "react-native";
import { colors, fonts, Utils } from "../../contants";

const styles = StyleSheet.create({
    inputViewCss: {
        borderWidth: 1,
        height: Utils.ScreenWidth(11),
        borderColor: '#CFCFCF',
        borderRadius: Utils.ScreenWidth(2),
        marginVertical: Utils.ScreenWidth(5),
        marginHorizontal: Utils.ScreenWidth(2),
        flexDirection: 'row',
    },
    inputStylesCss: {
        paddingHorizontal: 7,
        color: colors.primary,
        fontFamily: fonts.extraBold,
        height: Utils.ScreenWidth(10.8),
        fontSize: Utils.ScreenWidth(3.6), // 14
    },
    hideShowiconCss: {
        width: 18, height: 18, resizeMode: 'contain'
    }
});

export default styles;