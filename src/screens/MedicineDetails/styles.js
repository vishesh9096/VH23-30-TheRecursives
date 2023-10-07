import React from "react";
import { StyleSheet } from "react-native";
import { Utils, colors, fonts } from "../../contants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
       // width:'100%',
        backgroundColor: colors.white,
        flexDirection:'column'
    },
    card: {
        backgroundColor: 'white',
       // borderRadius: 10,
        alignSelf: 'center',
        borderColor: colors.grey2,
        width: '90%',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
       // elevation: 20,
      },
      shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: Platform.OS === 'ios' ? 0.2 : 0.9,
        shadowRadius: 3,
      },
    
      imgStl: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
    headerViewCss: {
        flexDirection: 'row',
        width:'100%',
       // height: Utils.ScreenWidth(15),
        backgroundColor:'#999',
        paddingHorizontal: Utils.ScreenWidth(3),
    },
    menuIconViewCss: {
        //flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIconCss: {
        width: Utils.ScreenWidth(3.3),
        height: Utils.ScreenWidth(3.5),
        resizeMode: 'cover',
    },
    titleCss: {
        fontWeight: '800',
        color: colors.black,
        fontFamily: fonts.extraBold,
        left: Utils.ScreenWidth(3),
        fontSize: Utils.ScreenWidth(4.36), // 18
    },
    appointmentReqViewCss: {
        justifyContent: 'center',
        backgroundColor: '#FAF7F1',
       // height: Utils.ScreenWidth(9),
        paddingHorizontal: Utils.ScreenWidth(5),
    },
    appointmentReqTextCss: {
        color: '#AC4911',
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.4), // 14
    },
    appointmentReqCardViewCss: {
      //  elevation: 5,
        backgroundColor: colors.white,
        // marginTop: Utils.ScreenWidth(4),
        borderColor: colors.inputColorP,
      //  borderRadius: Utils.ScreenWidth(2),
       // marginVertical: Utils.ScreenWidth(2),
        marginHorizontal: Utils.ScreenWidth(4)
    },
    imgeViewCss: {
       // flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCss: {
        resizeMode: 'contain',
        width: Utils.ScreenWidth(21),
        height: Utils.ScreenWidth(21),
        //borderRadius: 40
    },
    reqTitleCss: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontWeight:'bold',
        fontSize: Utils.ScreenWidth(3.9), // 16
        marginBottom: Utils.ScreenWidth(0.8),
    },
    dateTimeReqTextCss: {
        color: "#2632386A",
        fontFamily: fonts.extraBold,
        fontSize: Utils.ScreenWidth(3.4), // 14
    },
    notFounViewCss: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notFounTextCss: {
        color: colors.black,
        fontFamily: fonts.extraBold,
        fontSize: Utils.ScreenWidth(5), // 14
    }
});

export default styles;