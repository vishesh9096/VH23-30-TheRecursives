import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../contants";

const styles = StyleSheet.create({
    modalMainViewOffCss: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000080'
    },
    cancelModalViewOff: {
        height: 230,
        borderRadius: 15,
        paddingVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',

    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 13,
        height: 45,
        borderRadius: 5,
        backgroundColor: colors.primary
    },
    buttonViewOffCss: {
        width: 170,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextoffCss: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.white
    },
});

export default styles;