import React from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, Text, Modal, View } from 'react-native'
import ImagesPath from '../../assests/ImagesPath';
import { colors, fonts, Utils } from '../../contants';
import ImagePicker from 'react-native-image-crop-picker';
// import { strings } from '../../screens/LanguageScreen/StringsOfLanguages';

export default class ImageCropPicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    // ++++++++++++ Images select function +++++++++++

    // selectPicker = () => {
    //     Alert.alert(
    //         "Image",
    //         "My Alert Msg",
    //         [
    //             {
    //                 text: "Cancel",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel"
    //             },
    //             { text: "Camera", onPress: () => { this.selectCamera() } },
    //             { text: "Gellery", onPress: () => { this.selectGellery() } }
    //         ]
    //     );
    // }

    modalFunc = () => {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    this.setState({ modalVisible: false });
                }}>
                <View style={styles.modalMainViewCss}>
                    <View style={styles.modalCardViewCss}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.takeViewCss}
                            onPress={() => { this.selectCamera() }}>
                            <Text style={styles.lebletextCss}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => { this.selectGellery() }}
                            style={[styles.takeViewCss, { borderBottomWidth: 0, }]}>
                            <Text style={styles.lebletextCss}>Choose From Library</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.closeButtonCss}
                        onPress={() => { this.setState({ modalVisible: false }) }}>
                        <Text style={[styles.lebletextCss, { color: colors.white }]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    selectCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            this.setState({ modalVisible: false });
            this.props.getImgPost(image)
            console.log('-----------Camera::: ', image);
        });
    }

    selectGellery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            // multiple: true
        }).then(image => {
            this.setState({ modalVisible: false });
            this.props.getImgPost(image);
            console.log('-----------Gellery::: ', image);
        });
    }

    render() {
        const { title, type,  disabled } = this.props
        return (
            <>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { this.setState({ modalVisible: true }); }}
                    style={styles.addDegreeViewCss}>
                    <Image style={styles.plushIconCss} source={ImagesPath.onafterprint.plush_icon} />
                    <Text style={styles.addQualiTextCss}>{title}</Text>
                </TouchableOpacity>
                {this.modalFunc()}
            </>
        )
    }
}

const styles = StyleSheet.create({
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
        height: Utils.ScreenWidth(11),
        width: "90%",
        borderRadius: Utils.ScreenWidth(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008080',
        marginBottom: Utils.ScreenWidth(1.5),
    },
    addDegreeViewCss: {
        elevation: 2,
        borderWidth: 0.4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: colors.black,
        backgroundColor: colors.white,
        height: Utils.ScreenWidth(12.5),
        borderRadius: Utils.ScreenWidth(1.5),
    },
    plushIconCss: {
        resizeMode: 'contain',
        marginRight: 10,
        width: Utils.ScreenWidth(3.9),
        height: Utils.ScreenWidth(3.9),
    },
    addQualiTextCss: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.6), // 14
    },
});