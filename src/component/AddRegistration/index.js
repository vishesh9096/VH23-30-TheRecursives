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

function AddRegistration(props) {
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
        { label: 'Andhar Pradesh Medical Council', value: 'Andhar Pradesh Medical Council' }, { label: 'Arunachal Pradesh Medical Council', value: 'Arunachal Pradesh Medical Council' },
        { label: 'Assam Medical Council', value: 'Assam Medical Council' }, { label: 'Bhopal Medical Council', value: 'Bhopal Medical Council' }, { label: 'Bihar Medical Council', value: 'Bihar Medical Council' },
        { label: 'Bombay Medical Council', value: 'Bombay Medical Council' }, { label: 'Chandigarh Medical Council', value: 'Chandigarh Medical Council' }, { label: 'Delhi Medical Council', value: 'Delhi Medical Council' },
        { label: 'Goa Medical Council', value: 'Goa Medical Council' }, { label: 'Gujrat Medical Council', value: 'Gujrat Medical Council' }, { label: 'Haryana Medical Council', value: 'Haryana Medical Council' },
        { label: 'Himachal Pradesh Medical Council', value: 'Himachal Pradesh Medical Council' }, { label: 'Hyderabad Medical Council', value: 'Hyderabad Medical Council' }, { label: 'Jammu & Kashmir Medical Council', value: 'Jammu & Kashmir Medical Council' },
        { label: 'Jharkhand Medical Council', value: 'Jharkhand Medical Council' }, { label: 'Karnataka Medical Council', value: 'Karnataka Medical Council' }, { label: 'Madhya Pradesh Medical Council', value: 'Madhya Pradesh Medical Council' },
        { label: 'Madras Medical Council', value: 'Madras Medical Council' }, { label: 'Mahakoshal Medical Council', value: 'Mahakoshal Medical Council' }, { label: 'Maharashtra Medical Council', value: 'Maharashtra Medical Council' },
        { label: 'Medical Council Of India (MCI)', value: 'Medical Council Of India (MCI)' }, { label: 'Medical Council of Tanganyika', value: 'Medical Council of Tanganyika' }, { label: 'Mizoram Medical Council', value: 'Mizoram Medical Council' },
        { label: 'Mysore Medical Council', value: 'Mysore Medical Council' }, { label: 'Nagaland Medical Council', value: 'Nagaland Medical Council' }, { label: 'Orissa Council of Medical Registration', value: 'Orissa Council of Medical Registration' },
        { label: 'Pondicherry Medical Council', value: 'Pondicherry Medical Council' }, { label: 'Punjab Medical Council', value: 'Punjab Medical Council' }, { label: 'Rajasthan Medical Council', value: 'Rajasthan Medical Council' },
        { label: 'Sikkim Medical Council', value: 'Sikkim Medical Council' }, { label: 'Tamil Nadu Medical Council', value: 'Tamil Nadu Medical Council' }, { label: 'Telengana Cochin Medical Council, Trivandrun', value: 'Telengana Cochin Medical Council, Trivandrun' },
        { label: 'Tripura State Medical Council', value: 'Tripura State Medical Council' }, { label: 'Utter Pradesh Medical Council', value: 'Utter Pradesh Medical Council' }, { label: 'Uttarakhand Medical Council', value: 'Uttarakhand Medical Council' },
        { label: 'Vidharba Medical Council', value: 'Vidharba Medical Council' }, { label: 'West Bengal Medical Council', value: 'West Bengal Medical Council' }
    ]);

    const [openYears, setOpenYears] = useState(false);
    const [valueYears, setValueYears] = useState(null);
    const [itemsYears, setItemsYears] = useState([
        { label: '2023', value: '2023' }, { label: '2022', value: '2022' }, { label: '2021', value: '2021' },
        { label: '2020', value: '2020' }, { label: '2019', value: '2019' }, { label: '2018', value: '2018' },
        { label: '2017', value: '2017' }, { label: '2016', value: '2016' }, { label: '2015', value: '2015' },
        { label: '2014', value: '2014' }, { label: '2013', value: '2013' }, { label: '2012', value: '2012' },
        { label: '2011', value: '2011' }, { label: '2010', value: '2010' }, { label: '2009', value: '2009' },
        { label: '2008', value: '2008' }, { label: '2007', value: '2007' }, { label: '2006', value: '2006' },
        { label: '2005', value: '2005' }, { label: '2004', value: '2004' }, { label: '2003', value: '2003' },
        { label: '2002', value: '2002' }, { label: '2001', value: '2001' }, { label: '2000', value: '2000' },
        { label: '1999', value: '1999' }, { label: '1998', value: '1998' }, { label: '1997', value: '1997' },
        { label: '1996', value: '1996' }, { label: '1995', value: '1995' }, { label: '1994', value: '1994' },
        { label: '1993', value: '1993' }, { label: '1992', value: '1992' }, { label: '1991', value: '1991' },
        { label: '1990', value: '1990' }, { label: '1989', value: '1989' }, { label: '1988', value: '1988' },
    ]);

    useEffect(() => {
        setRefse(!refse3)
        setRefse2(!refse2);
        console.log('-----editAllDataCards: ', editAllDataCards.year);
        setNumber(editAllDataCards.number);
        setValueCouncil(editAllDataCards.council);
        // setItemsCouncil(editAllDataCards.council);
        setValueYears(editAllDataCards.year.toString())

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
        formdata.append('registrationId', id);
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
        Helper.makeRequest({ url: ApiUrl.deleteDocRegistration, data: formdata, method: "FORMDATA" }).then((data) => {
            hideLoader(false)
            console.log('-----------DDDDdeleteDocRegistration res :: ', data);
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
               // Helper.showToast(data.message)
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

    return (
        <>
            <View style={styles.cardViewCss}>
                <Text style={styles.addQualiTextCss}>{strings.registration_number}</Text>
                <View style={styles.inputViewCss}>
                    <TextInput
                        value={number}
                        keyboardType='default'
                        placeholder={strings.registration_number}
                        returnKeyType="next"
                        autoCapitalize='characters'
                        maxLength={20}
                        style={styles.inputStylesCss}
                        // onSubmitEditing={() => input_collegeUn.current.focus()}
                        placeholderTextColor={colors.inputColorP}
                        onChangeText={(text) => { setNumber(text.replace(/[`~!@#$%^&*()|+=?;:'",.<>]/gi, '')) }}
                    />
                </View>
                <Text style={styles.addQualiTextCss}>{strings.select_council}</Text>
                <View style={{ flex: 1, marginTop: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(6) }}>
                    <DropDownPicker
                        zIndex={5000}
                        open={openCouncil}
                        value={valueCouncil}
                        items={itemsCouncil}
                        listMode="SCROLLVIEW"
                        setOpen={setOpenCouncil}
                        setValue={setValueCouncil}
                        setItems={setItemsCouncil}
                        placeholder={strings.enter_council}
                        maxHeight={Utils.ScreenWidth(48)}
                        disableBorderRadius={true}
                        borderColor={colors.primary}
                        style={styles.dropDownMainStylesCss}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{ nestedScrollEnabled: true, }}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                    />
                </View>
                <Text style={styles.addQualiTextCss}>{strings.year}</Text>
                <View style={{ flex: 1, marginVertical: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(10) }}>
                    <DropDownPicker
                        zIndex={1000}
                        open={openYears}
                        value={valueYears}
                        items={itemsYears}
                        listMode="SCROLLVIEW"
                        dropDownDirection="TOP"
                        setOpen={setOpenYears}
                        setValue={setValueYears}
                        setItems={setItemsYears}
                        placeholder={strings.enter_year}
                        disableBorderRadius={true}
                        borderColor={colors.primary}
                        style={styles.dropDownMainStylesCss}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{ nestedScrollEnabled: true, }}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                        maxHeight={img1 || img2 || img3 ? Utils.ScreenWidth(48) : Utils.ScreenWidth(50)}
                    />
                </View>
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

                    <ImageCropPicker
                        title={strings.upload_registration_proof}
                        // disabled={selectPostImgArray.length >= 10 ? true : false}
                        getImgPost={(value) => { uploadImg(value) }}
                    />
                </View>

            </View>
            <View style={{ marginTop: Utils.ScreenWidth(5), marginBottom: Utils.ScreenWidth(2), }}>
                <AppButton
                    title={'Update'}
                    buttonWidth={Utils.ScreenWidth(90)}
                    onPress={() => { getUpdateDoc(editAllDataCards.id, number, valueCouncil, valueYears, img1, img2, img3); setOpenCouncil(false); setOpenYears(false) }} // getUpdateDocQualification()
                />
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
        </>
    )
};

export default AddRegistration;