import { StyleSheet } from "react-native";
import { colors, fonts, Utils } from "../../contants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: Utils.ScreenWidth(3)
    },

    menimg: {
        height: Utils.ScreenWidth(6.5),
        width: Utils.ScreenWidth(6.5),
        resizeMode: 'contain'
    },
    flexrow: { flexDirection: 'row', marginTop: Utils.ScreenWidth(4), alignContent: 'center', justifyContent: 'space-around' },
    menbg: {
        borderWidth: Utils.ScreenWidth(0.3),
        // borderColor: colors.newGrey,
        height: Utils.ScreenWidth(10),
        width: Utils.ScreenWidth(27),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: Utils.ScreenWidth(2),
        marginRight: Utils.ScreenWidth(4.5),
    },
    mentext: { color: colors.menbg, fontFamily: fonts.bold, fontSize: Utils.ScreenWidth(3.5), marginLeft: Utils.ScreenWidth(2) },
    inputViewCss: {
        borderWidth: 1,
        flexDirection: 'row',
        height: Utils.ScreenWidth(11),
        borderColor: colors.newGrey,
        borderRadius: Utils.ScreenWidth(2),
        //marginTop: Utils.ScreenWidth(5),
        marginHorizontal: Utils.ScreenWidth(2),
    },
    couterCodeViewCss: {
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Utils.ScreenWidth(12),
        borderRightColor: colors.newGrey,
        height: Utils.ScreenWidth(10),
        alignSelf: 'center'
    },
    couterCodeCss: {
        fontSize: Utils.ScreenWidth(4.0), // 14
        color: colors.inputColorP,
        fontFamily: fonts.extraBold
    },
    inputStylesCss: {
        paddingHorizontal: 7,
        color: colors.primary,
        fontFamily: fonts.extraBold,
        width: Utils.ScreenWidth(67),
        height: Utils.ScreenWidth(10.8),
        fontSize: Utils.ScreenWidth(3.9), // 14
        // backgroundColor: 'red'
    },
    dopViewCss: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.newGrey,
        height: Utils.ScreenWidth(9.5),
        justifyContent: 'space-between',
        borderRadius: Utils.ScreenWidth(2),
        marginVertical: Utils.ScreenWidth(5),
        marginHorizontal: Utils.ScreenWidth(2),
        paddingHorizontal: Utils.ScreenWidth(2),
    },
    dobTextCss: {
        color: colors.inputColorP,
        fontFamily: fonts.extraBold,
        fontSize: Utils.ScreenWidth(3.9), // 14
    },
    dowArrIconCss: {
        width: 15,
        height: 13,
        resizeMode: 'contain',
    },

    dropdownViewCss: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: Utils.ScreenWidth(2),
        marginHorizontal: Utils.ScreenWidth(2)
    },

    dropDownMainStylesCss: {
        // marginTop: 5,
        borderWidth: 1,
        marginBottom: 0,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        borderColor: colors.inputBorder,
        paddingVertical: Platform.OS === 'ios' ? 12 : 5,
        fontSize: Utils.ScreenWidth(4), // 16
    },
    dropDownContainerStyleCss: {
        borderRadius: 10,
        color: colors.inputColorP,
        borderColor: colors.inputBorder,
        fontSize: Utils.ScreenWidth(4), // 16
    },
    dropDownPlaceholderStyleCss: {
        color: colors.inputColorP,
        fontSize: Utils.ScreenWidth(4), // 16
    },
    dropDownTextStyleCss: {
        color: colors.inputColorP,
        fontSize: Utils.ScreenWidth(4), // 16
    },
    validtext: {
        alignSelf: 'flex-start',
        fontSize: 13,
        color: 'red',
        alignSelf: 'flex-end',
    },
    selectedStyle: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        marginLeft: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 13,
        color: colors.primary
    },
    inputSearchStyle: {
        backgroundColor: 'black',
        height: 40,
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
        color: colors.primary,
    },
    item: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.primary
    },
    inputViewCssAbout: {
        borderWidth: 1,
        //height: Utils.ScreenWidth(11),
        borderColor: colors.newGrey,
        borderRadius: Utils.ScreenWidth(2),
        //marginVertical: Utils.ScreenWidth(5),
        marginHorizontal: Utils.ScreenWidth(2),
        flexDirection: 'row',
    },
    inputStylesCssAbout: {
        paddingHorizontal: 7,
        color: colors.primary,
        fontFamily: fonts.extraBold,
        width: '100%',
        //height: Utils.ScreenWidth(10.8),
        fontSize: Utils.ScreenWidth(3.6), // 14
    },

    backViewCss: {
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 7,
        width: Utils.ScreenWidth(10),
        height: Utils.ScreenWidth(10),
        marginVertical: Utils.ScreenWidth(4),
        justifyContent: 'center', alignItems: "center",
        marginHorizontal: Utils.ScreenWidth(2),
    }
    ,
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
    addQualiTextCss: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.5), // 14
        marginTop: Utils.ScreenHeight(2),
        marginBottom: Utils.ScreenHeight(1),
        marginHorizontal: Utils.ScreenWidth(2),
    },
    cameraIconViewCss: {
        width: Utils.ScreenWidth(90),
        //height: Utils.ScreenWidth(20),
        borderRadius: 100 / 2,
        marginTop: Utils.ScreenHeight(3),
        alignSelf: 'center',
    },
    plushIconCss: {
        resizeMode: 'contain',
        marginRight: 10,
        width: Utils.ScreenWidth(3.9),
        height: Utils.ScreenWidth(3.9),
    },
    dropDownMainStylesCss: {
        // marginTop: 5,
        borderWidth: 1,
        marginBottom: 0,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
        borderColor: colors.newGrey,
        paddingVertical: Platform.OS === 'ios' ? 12 : 5,
        fontSize: Utils.ScreenWidth(4.2), // 16
    },
    dropDownContainerStyleCss: {
        borderRadius: 10,
        color: colors.white,
        borderColor: colors.newGrey,
        fontSize: Utils.ScreenWidth(4.2), // 16
        justifyContent: 'space-between',
        backgroundColor:colors.white
    },
    dropDownPlaceholderStyleCss: {
        color: colors.inputColorP,
        fontSize: Utils.ScreenWidth(4.0), // 16
        fontWeight: '500'
    },
    dropDownTextStyleCss: {
        color: colors.inputColorP,
        fontSize: Utils.ScreenWidth(4.2), // 16
    },

    cameraIconViewCss: {
        width: '95%',
        alignSelf:'center',
        height: Utils.ScreenWidth(26),
        borderRadius: 100 / 2,
        marginTop: 10
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
    degreeViewCss: {
        width: "20%",
        marginTop: 5,
        marginRight: 10,
        //borderRightWidth: 0.7,
        borderRightColor: colors.grey2,
        marginVertical: Utils.ScreenWidth(1),
        // backgroundColor: 'red'.
    },
    degreeImgCss: {
        resizeMode: 'contain',
        // backgroundColor: 'green',
        width: Utils.ScreenWidth(17.6), // 63, 
        height: Utils.ScreenWidth(18.6), // 67, 
        borderRadius: Utils.ScreenWidth(2),
    },
    cameraIconCss: {
        resizeMode: 'cover',
        borderRadius: 100 / 2,
        width: Utils.ScreenWidth(22),
        height: Utils.ScreenWidth(22),
    },

    //Modal CSS

    modalMainViewCss: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#00000060'
    },
    modalCardViewCss: {
        width: "90%",
        height: Utils.ScreenWidth(38),
        backgroundColor: colors.white,
        borderRadius: Utils.ScreenWidth(2),
        marginBottom: Utils.ScreenWidth(4),
    },
    lebletextCss: {
        color: '#484848', // colors.black,
        alignSelf: 'center',
        fontFamily: fonts.extraBold,
        fontSize: Utils.ScreenWidth(5), // 20
    },
    takeViewCss: {
        alignItems: 'center',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: Utils.ScreenWidth(19),
        borderBottomColor: colors.grey2,
    },
    closeButtonCss: {
        height: Utils.ScreenWidth(15),
        width: "90%",
        borderRadius: Utils.ScreenWidth(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D4D4D',
        marginBottom: Utils.ScreenWidth(1.5),
    },
})

export default styles;