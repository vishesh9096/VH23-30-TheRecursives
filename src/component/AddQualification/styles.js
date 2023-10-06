import React from "react";
import { StyleSheet } from "react-native";
import { colors, fonts, Utils } from "../../contants";

const styles = StyleSheet.create({
    cardViewCss: {
        elevation: 5,
        borderWidth: 0.4,
        backgroundColor: colors.white,
        marginTop: Utils.ScreenWidth(4),
        borderColor: colors.inputColorP,
        borderRadius: Utils.ScreenWidth(1),
        paddingVertical: Utils.ScreenWidth(4),
        marginHorizontal: Utils.ScreenWidth(1),
        paddingHorizontal: Utils.ScreenWidth(4),
    },
    addQualiTextCss: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.6), // 14
    },
    inputViewCss: {
        borderWidth: 1,
        height: Utils.ScreenWidth(11),
        borderColor: colors.primary,
        marginBottom: Utils.ScreenWidth(6),
        borderRadius: Utils.ScreenWidth(2),
        marginVertical: Utils.ScreenWidth(2),
    },
    inputStylesCss: {
        color: colors.primary,
        fontFamily: fonts.extraBold,
        height: Utils.ScreenWidth(11),
        fontSize: Utils.ScreenWidth(3.9), // 14
        paddingHorizontal: Utils.ScreenWidth(2),
    },
    dowArrIconCss: {
        width: 14,
        height: 9,
        resizeMode: 'contain',
    },
    degreeViewCss: {
        width: "24%",
        marginTop: 5,
        marginRight: 10,
        borderRightWidth: 0.7,
        borderRightColor: colors.grey2,
        marginBottom: Utils.ScreenWidth(4),
        // backgroundColor: 'red'.
    },
    degreeImgCss: {
        resizeMode: 'contain',
        // backgroundColor: 'green',
        width: Utils.ScreenWidth(17.6), // 63, 
        height: Utils.ScreenWidth(18.6), // 67, 
        borderRadius: Utils.ScreenWidth(2),
    },
    cancelIconViewCss: {
        top: -10,
        width: 25,
        height: 25,
        left: "70%",
        paddingVertical: 8,
        alignItems: 'center',
        position: 'absolute',
        paddingHorizontal: 8,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    cancelIconCss: {
        width: 12,
        height: 12,
        position: 'absolute',
        resizeMode: 'contain',
    },
    dropDownMainStylesCss: {
        // marginTop: 5,
        borderWidth: 1,
        marginBottom: 0,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        paddingVertical: Platform.OS === 'ios' ? 12 : 5,
        fontSize: Utils.ScreenWidth(4.2), // 16
    },
    dropDownContainerStyleCss: {
        borderRadius: 10,
        color: colors.inputColorP,
        borderColor: colors.primary,
        fontSize: Utils.ScreenWidth(4.2), // 16
    },
    dropDownPlaceholderStyleCss: {
        color: colors.inputColorP,
        fontSize: Utils.ScreenWidth(4.0), // 16
    },
    dropDownTextStyleCss: {
        color: colors.inputColorP,
        fontSize: Utils.ScreenWidth(4.2), // 16
    }
});

export default styles;