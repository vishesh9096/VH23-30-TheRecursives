import { StyleSheet } from "react-native";
import { colors, fonts, Utils } from "../../contants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: Utils.ScreenWidth(3),
    },
    cardViewCss: {
        elevation: 5,
        borderWidth: 0.4,
        backgroundColor: colors.white,
        marginTop: Utils.ScreenWidth(4),
        borderColor: colors.inputColorP,
        height: Utils.ScreenHeight(55.5),
        borderRadius: Utils.ScreenWidth(1),
        paddingVertical: Utils.ScreenWidth(4),
        marginHorizontal: Utils.ScreenWidth(1),
        paddingHorizontal: Utils.ScreenWidth(4),
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
        backgroundColor:'white',
        borderRadius: 10,
        color: colors.inputColorP,
        borderColor: colors.primary,
        fontSize: Utils.ScreenWidth(4.2), // 16
    },
    dropDownPlaceholderStyleCss: {
        color: colors.inputColorP,
        fontSize: Utils.ScreenWidth(4.2), // 16
    },
    dropDownTextStyleCss: {
        color: colors.inputColorP,
        fontSize: Utils.ScreenWidth(4.2), // 16
    },
    addQualiTextCss: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.6), // 14
    },

})


export default styles;