import React, { useCallback, useEffect, useRef, useState } from "react";
import { TouchableOpacity, Text, View, Image, ActivityIndicator, TextInput } from 'react-native';
import ImagesPath from "../../assests/ImagesPath";
import { colors, fonts, Utils } from "../../contants";
import moment from 'moment';
import styles from "./styles";
import AppButton from "../AppButton";
import Helper from "../../Lib/Helper";
import ApiUrl from "../../Lib/ApiUrl";
import CustomLoader from "../CustomLoader";
import ImageCropPicker from "../ImageCropPicker";
import DropDownPicker from 'react-native-dropdown-picker';
import { strings } from "../../screens/LanguageScreen/StringsOfLanguages";

const imgBaseUrl = "http://onehealthassist.com/storage/";

function AddIdentifyProofs(props) {
    const { navigation, refse3, editAllDataCards, getUpdateDoc, editApi } = props;

    const input_collegeUn = useRef(null)

    const [number, setNumber] = useState('');

    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');

    const [refse, setRefse] = useState(false);
    const [refse2, setRefse2] = useState(false);

    const [loaderVisible, setLoaderVisible] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);

    const [openCouncil, setOpenCouncil] = useState(false);
    const [valueCouncil, setValueCouncil] = useState(null);
    const [itemsCouncil, setItemsCouncil] = useState([
        { label: 'Aadhaar Card', value: 'Aadhaar Card' },
        { label: 'Passport', value: 'Passport' },
        { label: 'Driving License', value: 'Driving License' },
        { label: 'PAN Card', value: 'PAN Card' },
        { label: 'Electricity Bill', value: 'Electricity Bill' },
    ]);

    const [checkValidPan, setCheckValidPan] = useState(false);
    const [checkValidPassport, setCheckValidPassport] = useState(false);



    useEffect(() => {
        setRefse(!refse3)
        setRefse2(!refse2)
        // console.log('-----editAllDataCards: ', editAllDataCards);
        setNumber(editAllDataCards.number);
        setValueCouncil(editAllDataCards.proof_type);

        if (editAllDataCards.image1) {
            setImg1(imgBaseUrl + editAllDataCards.image1);
            // console.log('-----------image1 :: ', imgBaseUrl + editAllDataCards.image1);
        }
        if (editAllDataCards.image2) {
            setImg2(imgBaseUrl + editAllDataCards.image2);
            // console.log('-----------image2 :: ', imgBaseUrl + editAllDataCards.image2);
        }
        if (editAllDataCards.image3) {
            setImg3(imgBaseUrl + editAllDataCards.image3);
            // console.log('-----------image3 :: ', imgBaseUrl + editAllDataCards.image3);
        }
    }, [editAllDataCards])

    const getDeleteImgApi = (id, img) => {
        // console.log('-----------img img :: ', id, img);

        let formdata = new FormData();
        formdata.append('proofId', id);
        if (img == 'image1') {
            formdata.append('image1', 'delete');
        }
        if (img == 'image2') {
            formdata.append('image2', 'delete');
        }
        if (img == 'image3') {
            formdata.append('image3', 'delete');
        }
        console.log('-----------Delete api res :: ', formdata);
        // return
        showLoader(true);
        Helper.makeRequest({ url: ApiUrl.deleteDoctorIdentityProof, data: formdata, method: "FORMDATA" }).then((data) => {
            hideLoader(false)
            console.log('-----------DDDDdeleteDoctorIdentityProof res :: ', data);
            if (data.status === "success") {
                if (img == 'image1') {
                    setImg1('');
                }
                if (img == 'image2') {
                    setImg2('');
                }
                if (img == 'image3') {
                    setImg3('');
                }
                editApi(editAllDataCards.id)
                setRefse(!refse);
            } else {
                hideLoader(false);
                alert(data.message)
            }
            // Helper.showToast(data.message)
        }).catch(err => {
            console.log("----err::: ", err)
            // Helper.showToast(err.message)
            hideLoader(false);
        })
    }

    const uploadImg = (value) => {
        if (!img1) {
            selectImgPostFunction1(value);
            return;
        }
        if (!img2) {
            selectImgPostFunction2(value);
            return;
        }
        if (!img3) {
            selectImgPostFunction3(value);
            return;
        }
    }

    const selectImgPostFunction1 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImg1(upload.uri);
        setRefse2(!refse2);
        console.log('------------------img1::: ', upload.uri);
        // docImgData.push(upload);
        //     if (!img1) {
        //         setImg1(docImgData[0]?.uri);
        //         console.log('------------------img1::: ', docImgData[0]?.uri);
        //         return;
        //     }

    }
    const selectImgPostFunction2 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImg2(upload.uri);
        setRefse2(!refse2);
        console.log('------------------img2::: ', upload.uri);

    }
    const selectImgPostFunction3 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImg3(upload.uri);
        setRefse2(!refse2);
        console.log('------------------img3::: ', upload.uri);
    }

    const handleCheckPan = text => {
        let panRegex = /^([A-Z]{5}[0-9]{4}[A-Z]{1})$/;
        setNumber(text)

        if (panRegex.test(text)) {
            setCheckValidPan(false);
        } else {
            setCheckValidPan(true);
        }
    };

    const handleCheckPassport = text => {
        let passRegex = /^([A-Z]{1}[0-9]{7})$/;
        setNumber(text)

        if (passRegex.test(text)) {
            setCheckValidPassport(false);
        } else {
            setCheckValidPassport(true);
        }
    };

    const handleCouncilChange = (itemValue) => {
        // Check if the selected value already exists in the input fields
        if (editAllDataCards.proof_type === itemValue) {
            //Helper.showToast('This identity proof is already selected');
            alert('This identity proof is already selected');
        } else {
            setValueCouncil(itemValue);
        }
    };

    //   useEffect(() => {
    //     // Update the itemsCouncil state by filtering out already selected values
    //     const filteredItemsCouncil = itemsCouncil.filter(
    //       (item) => !editAllDataCards.some((data) => data.proof_type === item.value)
    //     );
    //     setItemsCouncil(filteredItemsCouncil);
    //   }, [editAllDataCards]);



    return (
        <>
            <View style={styles.cardViewCss}>
                <Text style={styles.addQualiTextCss}>{strings.select_identity_proof}</Text>
                <View style={{ flex: 0.3, marginTop: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(6) }}>
                    <DropDownPicker
                        zIndex={5000}
                        open={openCouncil}
                        value={valueCouncil}
                        items={itemsCouncil}
                        setOpen={setOpenCouncil}
                        setValue={setValueCouncil}
                        setItems={setItemsCouncil}
                        disableBorderRadius={true}
                        borderColor={colors.primary}
                        placeholder={strings.select_identity_proof}
                        maxHeight={Utils.ScreenWidth(40)}
                        style={styles.dropDownMainStylesCss}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{ nestedScrollEnabled: true, }}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                    />
                </View>
                {valueCouncil === 'Aadhaar Card' &&
                    <>
                        <Text style={styles.addQualiTextCss}>{strings.aadhaar_card_number}</Text>
                        <View style={styles.inputViewCss}>
                            <TextInput
                                value={number}
                                returnKeyType="done"
                                keyboardType="phone-pad"
                                maxLength={12}
                                style={styles.inputStylesCss}
                                placeholder={strings.aadhaar_card_number}
                                placeholderTextColor={colors.inputColorP}
                                onChangeText={(text) => { setNumber(text.replace(/[`~!@#$%^&*()/\|+=?;:'",.<>]/gi, '')) }}
                            />
                        </View>
                    </>
                }

                {valueCouncil === 'Passport' &&
                    <>
                        <Text style={styles.addQualiTextCss}>{strings.passport_number}</Text>
                        <View style={
                            {
                                borderWidth: 1,
                                height: Utils.ScreenWidth(11),
                                borderColor: colors.primary,
                                marginBottom: Utils.ScreenWidth(2),
                                borderRadius: Utils.ScreenWidth(2),
                                // marginVertical: Utils.ScreenWidth(2),
                            }
                        }>
                            <TextInput
                                value={number}
                                returnKeyType="done"
                                keyboardType='default'
                                maxLength={8}
                                autoCapitalize='characters'
                                style={styles.inputStylesCss}
                                placeholder={strings.passport_number}
                                placeholderTextColor={colors.inputColorP}
                                onChangeText={(text) => { handleCheckPassport(text) }}
                            />
                        </View>

                        {checkValidPassport ? (
                            <View style={{ alignSelf: 'flex-start', marginLeft: 5, marginBottom: Utils.ScreenWidth(2) }}>
                                <Text style={styles.validtext}>Please enter a valid Passport number</Text>
                            </View>

                        ) : (
                            null
                        )}
                    </>
                }

                {valueCouncil === 'Driving License' &&
                    <>
                        <Text style={styles.addQualiTextCss}>{strings.licence_number}</Text>
                        <View style={styles.inputViewCss}>
                            <TextInput
                                value={number}
                                returnKeyType="done"
                                keyboardType='default'
                                maxLength={16}
                                style={styles.inputStylesCss}
                                placeholder={strings.licence_number}
                                placeholderTextColor={colors.inputColorP}
                                onChangeText={(text) => { setNumber(text.replace(/[`~!@#$%^&*()/\|+=?;:'",.<>]/gi, '')) }}
                            />
                        </View>
                    </>
                }

                {valueCouncil === 'PAN Card' &&
                    <>
                        <Text style={styles.addQualiTextCss}>{strings.pan_card_number}</Text>
                        <View style={
                            {
                                borderWidth: 1,
                                height: Utils.ScreenWidth(11),
                                borderColor: colors.primary,
                                marginBottom: Utils.ScreenWidth(2),
                                borderRadius: Utils.ScreenWidth(2),
                                // marginVertical: Utils.ScreenWidth(2),
                            }
                        }>
                            <TextInput
                                value={number}
                                returnKeyType="done"
                                keyboardType='default'
                                maxLength={10}
                                style={styles.inputStylesCss}
                                autoCapitalize='characters'
                                placeholder={strings.enter_pan_number}
                                placeholderTextColor={colors.inputColorP}
                                onChangeText={(text) => { handleCheckPan(text) }}
                            />
                        </View>

                        {checkValidPan ? (
                            <View style={{ alignSelf: 'flex-start', marginLeft: 5, marginBottom: Utils.ScreenWidth(2) }}>
                                <Text style={styles.validtext}>Please enter a valid PAN</Text>
                            </View>

                        ) : (
                            null
                        )}
                    </>
                }

                {valueCouncil === 'Electricity Bill' &&
                    <>
                        <Text style={styles.addQualiTextCss}>{strings.electricity_bill_number}</Text>
                        <View style={styles.inputViewCss}>
                            <TextInput
                                value={number}
                                returnKeyType="done"
                                keyboardType='default'
                                maxLength={12}
                                autoCapitalize='characters'
                                style={styles.inputStylesCss}
                                placeholder={strings.enter_bill_number}
                                placeholderTextColor={colors.inputColorP}
                                onChangeText={(text) => { setNumber(text.replace(/[`~!@#$%^&*()/\|+=?;:'",.<>]/gi, '')) }}
                            />
                        </View>
                    </>
                }
                {/* {img1 || img2 || img3 && */}
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {img1 &&
                            <View style={styles.degreeViewCss}>
                                {editAllDataCards.image1 ?
                                    <Image style={styles.degreeImgCss} source={{ uri: img1 }} />
                                    :
                                    <Image style={styles.degreeImgCss} source={{ uri: img1 }} />
                                }
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { getDeleteImgApi(editAllDataCards.id, 'image1'); }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                        {img2 &&
                            <View style={styles.degreeViewCss}>
                                {editAllDataCards.image2 ?
                                    <Image style={styles.degreeImgCss} source={{ uri: img2 }} />
                                    :
                                    <Image style={styles.degreeImgCss} source={{ uri: img2 }} />
                                }
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { getDeleteImgApi(editAllDataCards.id, 'image2') }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                        {img3 &&
                            <View style={styles.degreeViewCss}>
                                {editAllDataCards.image3 ?
                                    <Image style={styles.degreeImgCss} source={{ uri: img3 }} />
                                    :
                                    <Image style={styles.degreeImgCss} source={{ uri: img3 }} />
                                }
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { getDeleteImgApi(editAllDataCards.id, 'image3') }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                    </View>

                </View>
                {/* } */}
                <View>
                    <ImageCropPicker
                        title={strings.upload_identity_proof}
                        // disabled={selectPostImgArray.length >= 10 ? true : false}
                        getImgPost={(value) => { uploadImg(value) }}
                    />
                </View>

            </View>

            <View style={{ marginTop: Utils.ScreenWidth(5), marginBottom: Utils.ScreenWidth(2), }}>
                {
                    checkValidPan || checkValidPassport === true ?
                        <AppButton
                            title={'Update'}
                            buttonWidth={Utils.ScreenWidth(90)}
                            onPress={() => {
                                //Helper.showToast('Enter Valid Number')
                                alert('Enter Valid Number')
                            }}
                        />
                        :
                        <AppButton
                            title={'Update'}
                            buttonWidth={Utils.ScreenWidth(90)}
                            onPress={() => { getUpdateDoc(editAllDataCards.id, number, valueCouncil, img1, img2, img3, checkValidPan, checkValidPassport); setOpenCouncil(false); }} // getUpdateDocQualification()
                        />
                    //onPress={() => { getUpdateDoc(editAllDataCards.id, number, valueCouncil, img1, img2, img3, checkValidPan, checkValidPassport); setOpenCouncil(false); }} // getUpdateDocQualification()

                }
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
        </>
    )
};

export default AddIdentifyProofs;