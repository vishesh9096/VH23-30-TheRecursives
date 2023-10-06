import React, { createRef, useCallback, useEffect, useRef, useState } from "react";
import { TouchableOpacity, Text, View, Image, ActivityIndicator, TextInput, Modal } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import ImagesPath from "../../assests/ImagesPath";
import { colors } from "../../contants";
import Helper from "../../Lib/Helper";
import styles from "./styles";
import { strings } from "../../screens/LanguageScreen/StringsOfLanguages";


function SignatureView(props) {
    const { navigation, refscreen, visible, setVisible, signaturVar,  setSignatureValue, uploadSignApi } = props;

    const [resScreen, setResScreen] = useState(!refscreen)

    const sign = createRef();

    const saveSign = () => {
        sign.current.saveImage();
    };

    const resetSign = () => {
        sign.current.resetImage();
    };

    const _onSaveEvent = (result) => {
        //Helper.showToast('Signature Captured Successfully');
        alert('Signature Captured Successfully');
        onSave(result)
    };

    const _onDragEvent = () => {
        // This callback will be called when the user enters signature
        console.log('dragged');
    };

    const onSave = function (result) {
        setSignatureValue('');
        setResScreen(!resScreen);
        // console.log('result---', 'file://' + result?.pathName);
        const fileUri = { uri: 'file://' + result?.pathName };
        //setData(`data:image/png;base64,${result.encoded}`);
        // console.log('filwUri--', fileUri);
        setSignatureValue(fileUri)
        // signatureView.current.show(false);
    };

    const successModalVisibleFunction = (visible) => {
        setVisible(visible)
    }

    const cancelButton = () => {
        setSignatureValue('');
        setVisible(false);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(false);
            }}>
            <View style={styles.modalMainViewOffCss}>
                <View style={[styles.cancelModalViewOff, { height: 600 }]}>
                    <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
                        <TouchableOpacity onPress={() => { cancelButton(); }}>
                            <Image source={ImagesPath.onafterprint.cancel_icon}
                                style={{ width: 20, height: 20, resizeMode: 'contain', top: 2 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', }}>
                        <SignatureCapture
                            style={{ flex: 1 }}
                            ref={sign}
                            onSaveEvent={_onSaveEvent}
                            onDragEvent={(e) => {
                                console.log('----onDragEvent:: ', e);
                            }}
                            saveImageFileInExtStorage={true}
                            showNativeButtons={false}
                            showTitleLabel={false}
                            backgroundColor="transparent"
                            strokeColor="#000000"
                            minStrokeWidth={10}
                            maxStrokeWidth={10}
                            showBorder={true} />
                    </View>
                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => { saveSign() }} >
                            <Text style={{ fontSize: 14, color: 'white' }}>{strings.save}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => { resetSign() }} >
                            <Text style={{ fontSize: 14, color: 'white' }}>{strings.reset}</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                        <TouchableOpacity
                            disabled={signaturVar === '' ? true : false}
                            activeOpacity={0.7}
                            style={[styles.buttonViewOffCss, { backgroundColor: signaturVar === '' ? colors.grey2 : colors.primary }]}
                            onPress={() => { uploadSignApi(); }}>
                            <Text style={styles.buttonTextoffCss}>{strings.submit}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default SignatureView;