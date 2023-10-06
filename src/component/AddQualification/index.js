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

const imgBaseUrl = "http://onehealthassist.com/storage/";

function AddQualification(props) {
    const { navigation, refse3, editAllDataCards, getUpdateDoc, editApi } = props;

    const input_collegeUn = useRef(null)

    const [degree_name, setDegree_name] = useState('');
    const [collegeUni_name, setCollegeUni_name] = useState('');
    const [docImgData, setDocImgData] = useState([]);
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');

    const [refse, setRefse] = useState(false);
    const [refse2, setRefse2] = useState(false);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);

    const [openYears, setOpenYears] = useState(false);
    const [valueYears, setValueYears] = useState(null);

    const [openColleges, setOpenColleges] = useState(false);
    const [valueColleges, setValueColleges] = useState(null);
    const [itemsColleges, setItemsColleges] = useState([
        { label: 'Indian Institute of Medical Sciences', value: 'Indian Institute of Medical Sciences' }, { label: 'CHRISTIAN MEDICAL COLLEGE', value: 'CHRISTIAN MEDICAL COLLEGE' }, { label: "King George's Medical University", value: "King George's Medical University" },
        { label: 'Kasturba Medical College, Manipal', value: 'Kasturba Medical College, Manipal' }, { label: 'Sri Ramachandra Institute', value: 'Sri Ramachandra Institute' }, { label: 'Vardhman Mahavir Medical College', value: 'Vardhman Mahavir Medical College' },
        { label: 'MAMC New Delhi', value: 'MAMC New Delhi' }, { label: 'Jawaharlal Institute of Postgraduate Medical Education & Research', value: 'Jawaharlal Institute of Postgraduate Medical Education & Research' },
        { label: 'Other', value: 'Other' }
    ]);
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
        { label: '1990', value: '1990' }, { label: '1989', value: '1989' }, { label: '1988', value: '1988' },{ label: '1987', value: '1987' },
        { label: '1986', value: '1986' }, { label: '1985', value: '1985' }, { label: '1984', value: '1984' },
        { label: '1983', value: '1983' }, { label: '1982', value: '1982' }, { label: '1981', value: '1981' },
        { label: '1980', value: '1980' }, { label: '1979', value: '1979' }, { label: '1978', value: '1978' }, { label: '1977', value: '1977' },
        { label: '1980', value: '1980' }, { label: '1979', value: '1979' }, { label: '1978', value: '1978' }, { label: '1977', value: '1977' },
        { label: '1972', value: '1972' }, { label: '1971', value: '1971' }, { label: '1970', value: '1970' }, { label: '1969', value: '1969' },
    ]);

    const [openDegrees, setOpenDegrees] = useState(false);
    const [valueDegrees, setValueDegrees] = useState(null);
    const [itemsDegrees, setItemsDegrees] = useState([
        { label: 'Doctor of Medicine', value: 'Doctor of Medicine' }, { label: 'MBBS', value: 'MBBS' },
        { label: 'BAMS', value: 'BAMS' }, { label: 'Doctor of Philosophy', value: 'Doctor of Philosophy' }, { label: 'Doctor of Education', value: 'Doctor of Education' },{ label: 'BYNS', value: 'BYNS' }, { label: 'BUMS', value: 'BUMS' }, { label: 'BHMS', value: 'BHMS' },
        { label: 'BDS', value: 'BDS' },{ label: 'B.V.Sc & AH', value: 'B.V.Sc & AH' }, { label: 'DNB', value: 'DNB' },{ label: 'B.Pth', value: 'B.Pth' }, { label: 'Other', value: 'Other' },
    ]);

    useEffect(() => {
        setRefse(!refse3)
        setRefse2(!refse2);
        console.log('-----editAllDataCards: ', editAllDataCards?.year);
        setValueDegrees(editAllDataCards.course_name)
       // setDegree_name(editAllDataCards.course_name);
        setValueColleges(editAllDataCards.college_university)
        //setCollegeUni_name(editAllDataCards.college_university);
        setValueYears(editAllDataCards?.year?.toString())
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
        formdata.append('qualificationId', id);
        if (img == 'image1') {
            formdata.append('image1', 'delete');
        }
        if (img == 'image2') {
            formdata.append('image2', 'delete');
        }
        if (img == 'image3') {
            formdata.append('image3', 'delete');
        }
        // console.log('-----------Delete api res :: ', formdata);
        // return
        showLoader(true);
        Helper.makeRequest({ url: ApiUrl.deleteDocQualification, data: formdata, method: "FORMDATA" }).then((data) => {
            hideLoader(false)
            // console.log('-----------DDDDDeleteDocQualification res :: ', data);
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
                //Helper.showToast(data.message)
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
        // console.log('------------------img1::: ', upload.uri);
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
        // console.log('------------------img2::: ', upload.uri);

    }
    const selectImgPostFunction3 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImg3(upload.uri);
        setRefse2(!refse2);
        // console.log('------------------img3::: ', upload.uri);
    }

    return (
        <>
            <View style={styles.cardViewCss}>
                <Text style={styles.addQualiTextCss}>Degree</Text>
                <View style={styles.inputViewCss}>
                    <TextInput
                        value={valueDegrees}
                        // autoCapitalize='none'
                        keyboardType="default"
                        placeholder="Enter Degree"
                        returnKeyType="next"
                        style={styles.inputStylesCss}
                        onSubmitEditing={() => input_collegeUn.current.focus()}
                        placeholderTextColor={colors.inputColorP}
                        onChangeText={(text) => { setValueDegrees(text) }}
                    />
                </View>
                {/* <View style={{ marginVertical: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(10) }}>
                    <DropDownPicker
                        dropDownDirection="BOTTOM"
                        zIndex={5000}
                        open={openDegrees}
                        value={valueDegrees}
                        items={itemsDegrees}
                        listMode="SCROLLVIEW"
                        setOpen={setOpenDegrees}
                        setValue={setValueDegrees}
                        setItems={setItemsDegrees}
                        disableBorderRadius={true}
                        borderColor={colors.primary}
                        placeholder={'Select Degree'}
                        maxHeight={Utils.ScreenWidth(48)}
                        style={styles.dropDownMainStylesCss}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{ nestedScrollEnabled: true, }}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                    />
                </View> */}
                <Text style={styles.addQualiTextCss}>College/University</Text>
                <View style={styles.inputViewCss}>
                    <TextInput
                        value={valueColleges}
                        // autoCapitalize='none'
                        keyboardType="default"
                        placeholder="Enter Degree"
                        returnKeyType="next"
                        style={styles.inputStylesCss}
                        onSubmitEditing={() => input_collegeUn.current.focus()}
                        placeholderTextColor={colors.inputColorP}
                        onChangeText={(text) => { setValueColleges(text) }}
                    />
                </View>
                {/* <View style={{ marginVertical: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(10) }}>
                    <DropDownPicker
                        dropDownDirection="BOTTOM"
                        zIndex={4000}
                        open={openColleges}
                        value={valueColleges}
                        items={itemsColleges}
                        listMode="SCROLLVIEW"
                        setOpen={setOpenColleges}
                        setValue={setValueColleges}
                        setItems={setItemsColleges}
                        disableBorderRadius={true}
                        borderColor={colors.primary}
                        placeholder={'Select College'}
                        maxHeight={Utils.ScreenWidth(48)}
                        style={styles.dropDownMainStylesCss}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{ nestedScrollEnabled: true, }}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                    />
                </View>
            */}
                <Text style={styles.addQualiTextCss}>Year</Text>
                <View style={{ marginVertical: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(10) }}>
                    <DropDownPicker
                        zIndex={500}
                        open={openYears}
                        value={valueYears}
                        items={itemsYears}
                        dropDownDirection="TOP"
                        listMode="SCROLLVIEW"
                        setOpen={setOpenYears}
                        setValue={setValueYears}
                        setItems={setItemsYears}
                        disableBorderRadius={true}
                        borderColor={colors.primary}
                        placeholder={'Year of Passing'}
                        style={styles.dropDownMainStylesCss}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{nestedScrollEnabled: true,}}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                        maxHeight={img1 ? Utils.ScreenWidth(70) : Utils.ScreenWidth(45)}
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
                        title={'Add Degree'}
                        // disabled={selectPostImgArray.length >= 10 ? true : false}
                        getImgPost={(value) => { uploadImg(value) }}
                    />
                </View>

            </View>
            <View style={{ marginTop: Utils.ScreenWidth(5), marginBottom: Utils.ScreenWidth(2), }}>
                <AppButton
                    title={'Update'}
                    buttonWidth={Utils.ScreenWidth(90)}
                    onPress={() => { getUpdateDoc(editAllDataCards.id, valueDegrees, valueColleges, valueYears, img1, img2, img3) }} // getUpdateDocQualification()
                />
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
        </>
    )
};

export default AddQualification;