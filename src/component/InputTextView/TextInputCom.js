

import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { colors, Utils } from "../../contants";
import ImagesPath from "../../assests/ImagesPath";

function TextInputCom(props) {
    const { icon, onPressEye, eyeVisible = true, value, onChangeText, keyboardType, placeholder, autoCapitalize, getFocus, maxLength , setFocus, returnKeyType, placeholderTextColor = colors.inputColorP, textAlignVertical, multiline, numberOfLines } = props;

    return (
        <View style={[styles.inputViewCss, { paddingHorizontal: icon ? Utils.ScreenWidth(1) : 0, }]}>
            <TextInput
                ref={setFocus}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                style={[styles.inputStylesCss, { flex: icon ? 0.9 : 1 }]}
                autoCapitalize={autoCapitalize}
                onSubmitEditing={getFocus}
                returnKeyType={returnKeyType}
                secureTextEntry={!eyeVisible}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                maxLength={maxLength}
                numberOfLines={numberOfLines}
                multiline={multiline}
                textAlignVertical={textAlignVertical}
            />
            {icon &&
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={onPressEye}
                    style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={styles.hideShowiconCss}
                        source={eyeVisible ? ImagesPath.signUp.show : ImagesPath.signUp.hide} />
                </TouchableOpacity>
            }
        </View>
    )
};

export default TextInputCom;