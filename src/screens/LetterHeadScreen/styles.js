import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts, Utils } from "../../contants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FFFF'
    },
    pdf: {
        flex: 1,
        alignSelf:'center',
        backgroundColor:colors.grey2,
        //justifyContent:'center',
        // marginTop:Utils.ScreenHeight(2),
        // borderWidth:1,
        // borderColor:colors.grey2,
        width: Utils.ScreenWidth(90),
        height: Utils.ScreenWidth(130)
    },
    backViewCss: {
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 7,
        width: Utils.ScreenWidth(10),
        height: Utils.ScreenWidth(10),
        marginTop: Utils.ScreenWidth(4),
        justifyContent: 'center', alignItems: "center",
        marginHorizontal: Utils.ScreenWidth(2),
    },
    backIconCss: {
        resizeMode: 'contain',
        height: Utils.ScreenWidth(4.1),
        width: Utils.ScreenWidth(5.1),
    },
    logoIconCss: {
        resizeMode: 'contain',
        height: Utils.ScreenHeight(5.5), // 40I
        width: Utils.ScreenHeight(10), // 95
        //marginVertical: Utils.ScreenWidth(7),
        //marginLeft: 45,
        //marginBottom: -1,
    },
})

export default styles;