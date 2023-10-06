import React from "react";
import { TouchableOpacity, Text, View, Image, ActivityIndicator } from 'react-native';
import styles from "./styles";
import { colors, Utils } from "../../contants";

function AppButton(props) {
    const { disabled, title, onPress, icon, key, width, height, buttonWidth, bgColor, loader } = props;
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.1}
            style={[styles.container, {
                backgroundColor: disabled === true ? colors.inputColorP : bgColor ? bgColor : '#08A4A4',
            }]}
            onPress={() => { onPress() }}>
            {icon &&
                <View style={styles.iconViewCss}>
                    <Image style={{
                        width: width ? width : Utils.ScreenWidth(4), // 16,
                        height: height ? height : Utils.ScreenWidth(4),
                    }} source={icon} />

                </View>
            }
            <View style={[styles.titleViewCss, { width: icon ? Utils.ScreenWidth(60) : buttonWidth }]}>
                {/* {loader ?<ActivityIndicator size={'small'} color={Colors.white} />} */}
                <Text style={styles.titleCss}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default AppButton;