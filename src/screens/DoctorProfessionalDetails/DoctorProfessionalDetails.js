import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, Picker, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView, StatusBar, Keyboard, SafeAreaView } from "react-native";
import styles from "./styles";
import moment from "moment";
import Helper from "../../Lib/Helper";
import ApiUrl from "../../Lib/ApiUrl";
import { AppButton } from "../../component";
import ImagesPath from "../../assests/ImagesPath";
import StepHeader from "../../component/StepHeader";
import { colors, fonts, Utils } from "../../contants";
import DropDownPicker from 'react-native-dropdown-picker';
import CustomLoader from "../../component/CustomLoader";
import { MultiSelect } from "react-native-element-dropdown";

import ImageCropPicker from "../../component/ImageCropPicker";
import { Modal } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';

const DoctorProfessionalDetails = React.memo((props) => {
    const { navigation, route} = props;

    const user = route.params.user
    console.log("idar ", user)
    const dob = props?.route?.params?.dob
    const input_last = useRef(null)
    const input_alt = useRef(null)
    const input_expr = useRef(null)
    const [number, setNumber] = useState('');
    const [refse, setRefse] = useState(false);
    const [imgQua1, setImgQua1] = useState('');
    const [imgQua2, setImgQua2] = useState('');
    const [imgQua3, setImgQua3] = useState('');
    const [imgQua4, setImgQua4] = useState('');
    const [imgQua5, setImgQua5] = useState('');
    const [imgQua6, setImgQua6] = useState('');
    //console.log('DOB>>>>>>>>>>>',dob)

    // const [user, setUser] = useState({ firstName: '', lastName: '', altNumber: '', experience: '', password: '', email: '' })
    const [refes, setRefes] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [imageSourceReg, setImageSourceReg] = useState('')
    const [imageSourceAadhaar, setImageSourceAadhaar] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [modalAaadhaarVisible, setModalAadhaarVisible] = useState(false);
    const [openDegrees, setOpenDegrees] = useState(false);
    const [valueDegrees, setValueDegrees] = useState(null);
    const [openSpecialization, setOpenSpecialization] = useState(false);
    const [valueSpecialization, setValueSpecialization] = useState(null);
    const [valueDegreeInput, setValueDegreeInput] = useState(null);
    const [itemsDegrees, setItemsDegrees] = useState([
        { label: 'Doctor of Medicine', value: 'Doctor of Medicine' }, { label: 'MBBS', value: 'MBBS' },
        { label: 'BAMS', value: 'BAMS' }, { label: 'Doctor of Philosophy', value: 'Doctor of Philosophy' }, { label: 'Doctor of Education', value: 'Doctor of Education' }, { label: 'BYNS', value: 'BYNS' },
        { label: 'MBBS', value: 'MBBS' }, { label: 'MCH', value: 'MCH' }, { label: 'BDS', value: 'BDS' }, { label: 'MDS', value: 'MDS' }, { label: 'BAMS', value: 'BAMS' }, { label: 'BUMS', value: 'BUMS' }, { label: 'BSMS', value: 'BSMS' }, { label: 'MD Siddha', value: 'MD Siddha' }, { label: 'MS Orthopaedics ', value: 'MS Orthopaedics ' }, { label: 'BHMS', value: 'BHMS' }, { label: 'MD Homeopathy', value: 'MD Homeopathy' }, { label: 'DHMS', value: 'DHMS' }, { label: 'MS ENT ', value: 'MS ENT ' }, { label: 'DNB Ophthalmology', value: 'DNB Ophthalmology' }, { label: 'MS - Master of Surgery', value: 'MS - Master of Surgery' }, { label: 'DM Cardiology', value: 'DM Cardiology' }, { label: 'DNB General Medicine', value: 'DNB General Medicine' }, { label: 'B.V.Sc & AH', value: 'B.V.Sc & AH' }, { label: 'DNB', value: 'DNB' }, { label: 'B.Pth', value: 'B.Pth' }, { label: 'Other', value: 'Other' },
    ]);

    const [experience, setExperience] = useState('');
    const [aadhaarNum, setAadhaarNum] = useState('');
    const [itemsSpecialization, setItemsSpecialization] = useState([
        { label: 'General Physician', value: 'General Physician' }, 
        { label: 'Neurologist', value: 'Neurologist' }, 
        { label: "Cardiologist", value: "Cardiologist" },
        { label: 'Physiotherapist', value: 'Physiotherapist' }, 
        { label: 'Orthopedist', value: 'Orthopedist' }, 
        { label: 'Dermatologist', value: 'Dermatologist' },
        { label: 'Dentist', value: 'Dentist' }, 
        { label: 'Gyneacologist', value: 'Gyneacologist' },
        { label: 'Psychiatrist', value: 'Psychiatrist' },
        { label: 'Sexology', value: 'Sexology' },
        { label: 'Pediatrician', value: 'Pediatrician' },
        { label: 'Gastroenterologist', value: 'Gastroenterologist' },
        { label: 'Geneticist', value: 'Geneticist' }
    ]);

    const getProfessionalDetails = () => {
        // if (!number) {
        //     Helper.showToast('Please enter your Registration Number');
        //     return;
        // }
        // if (!valueSpecialization) {
        //     Helper.showToast('Please enter your Specialization');
        //     return;
        // }
        // if (!valueDegrees) {
        //     Helper.showToast('Please enter your degree');
        //     return;
        // }
        // if (!imgQua1) {
        //     Helper.showToast('Please enter your Registration Proof');
        //     return;
        // }
        // if (!experience) {
        //     Helper.showToast('Please enter your Experience');
        //     return;
        // }
        // if (!aadhaarNum) {
        //     Helper.showToast('Please enter your Aadhaar Number');
        //     return;
        // }
        // if (aadhaarNum.length < 12) {
        //     Helper.showToast('Please enter valid Aadhaar Number');
        //     return;
        // }
        // if (!imgQua4) {
        //     Helper.showToast('Please enter your Aadhaar Card');
        //     return;
        // }
        // let formdata = new FormData();
        // formdata.append('reg_number', number);
        // if (imgQua1) {
        //     formdata.append('registration_image', {
        //         'uri': imgQua1,
        //         'type': "image/jpeg",
        //         'name': Date.now() + "image1.jpg",
        //     });
        // }
        // formdata.append('specialization', valueSpecialization);
        // formdata.append('experience', experience);
        // formdata.append('course_name', valueDegrees === 'Other' ? valueDegreeInput : valueDegrees);
        // formdata.append('aadhar_number', aadhaarNum);
        // if (imgQua4) {
        //     formdata.append('aadhar_image', {
        //         'uri': imgQua4,
        //         'type': "image/jpeg",
        //         'name': Date.now() + "image2.jpg",
        //     });
        // }
        // return
        showLoader(true);
        // Helper.makeRequest({ url: ApiUrl.professionalDetails, data: formdata, method: "FORMDATA" }).then((data) => {
        //     hideLoader(false)
        //     if (data.status === "success") {
        //         Helper.setData('userdata', data.data);
        //         // setImgQua1('');
        //         // setImgQua2('');
        //         // setImgQua3('');
        //         navigation.navigate('OnboardingScreen8')
        //     } else {
        //         hideLoader(false);
        //         Helper.showToast(data.message)
        //     }
        //     // Helper.showToast(data.message)
        // }).catch(err => {
        //     console.log("----err::: ", err)
        //     // Helper.showToast(err.message)
        //     hideLoader(false);
        // })
        var formdata = new FormData();
formdata.append("mobile_no", "998703578381");
formdata.append("user_type", "doctor");
formdata.append("first_name", "Vishesh");
formdata.append("last_name", "Gatha");
formdata.append("email", "gathavishesh@gmail.com");
formdata.append("hospital_affiliation", "Kama");
formdata.append("license_number", "11111111111111111111");
formdata.append("years_of_experience", "12");
formdata.append("website", "google.com");
formdata.append("address", "Mumbai");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};
setLoaderVisible(true)
fetch("https://8344-103-134-7-130.ngrok-free.app/api/user-registration/", requestOptions)
  .then(response => response.json())
  .then(result =>{
    var formdata = new FormData();
        formdata.append("phoneNumber", "9324009992");
        formdata.append("uri", result.letter_head_url);
        formdata.append("title", "Here is Your Letter Head");

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

fetch("http://127.0.0.1:3000/upload", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    setLoaderVisible(false)
    console.log(result.letter_head_url)
    navigation.navigate("LetterHeadScreen", {url:result.letter_head_url})
  }
    )
  .catch(error =>{ 
    setLoaderVisible(false)
    console.log('error', error)


});
    }

    const handleInput = (text) => {
        setUser({ ...user, altNumber: text })
        if (text.length === 10) {
            Keyboard.dismiss();
        }
    }


    const selectGfunction = (item, index) => {
        setGender(item.smallTitle);
        setSelectGender(index);
    }

    const selectCameraReg = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            //console.log("image", image.mime)
            let upload = {
                'uri': image.path,
                'name': image.mime,
                'type': image.mime,
            };
            imgUri = image.path
            setImageSourceReg(image.path);
            setRefse(!refse);
            console.log('-----------Camera: ', imgUri, imageSourceReg);
            setModalVisible(false);
        });
    }

    const selectGelleryReg = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            // multiple: true
        }).then(image => {
            setModalVisible(false);
            let upload = {
                'uri': image.path,
                'name': image.mime,
                'type': image.mime,
            };
            setImageSourceReg(upload);
            setRefse(!refse);
            // console.log('-----------Gellery::: ', image);
        });
    }

    const selectCameraAadhar = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            //console.log("image", image.mime)
            let upload = {
                'uri': image.path,
                'name': image.mime,
                'type': image.mime,
            };
            imgUri = image.path
            setImageSourceAadhaar(upload);
            setRefse(!refse);
            console.log('-----------Camera: ', imgUri, imageSourceAadhaar);
            setModalAadhaarVisible(false);
        });
    }

    const selectGelleryAadhaar = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            // multiple: true
        }).then(image => {
            setModalAadhaarVisible(false);
            let upload = {
                'uri': image.path,
                'name': image.mime,
                'type': image.mime,
            };
            setImageSourceAadhaar(upload);
            setRefse(!refse);
            // console.log('-----------Gellery::: ', image);
        });
    }


    const uploadImg = (value) => {
        if (!imgQua1) {
            selectImgPostFunction1(value);
            return;
        }
        if (!imgQua2) {
            selectImgPostFunction2(value);
            return;
        }
        if (!imgQua3) {
            selectImgPostFunction3(value);
            return;
        }
    }

    const uploadImgAadhaar = (value) => {
        if (!imgQua4) {
            selectImgPostFunction4(value);
            return;
        }
        if (!imgQua5) {
            selectImgPostFunction5(value);
            return;
        }
        if (!imgQua6) {
            selectImgPostFunction6(value);
            return;
        }
    }

    const selectImgPostFunction1 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImgQua1(upload.uri);
        setRefse(!refse);
        console.log('------------------img1::: ', value);
    }

    const selectImgPostFunction2 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImgQua2(upload.uri);
        setRefse(!refse);
        // console.log('------------------img2::: ', upload.uri);
    }

    const selectImgPostFunction3 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImgQua3(upload.uri);
        setRefse(!refse);
        // console.log('------------------img3::: ', upload.uri);
    }

    const selectImgPostFunction4 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImgQua4(upload.uri);
        setRefse(!refse);
        console.log('------------------img1::: ', value);
    }

    const selectImgPostFunction5 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImgQua5(upload.uri);
        setRefse(!refse);
        // console.log('------------------img2::: ', upload.uri);
    }

    const selectImgPostFunction6 = (value) => {
        let upload = {
            'uri': value.path,
            'name': value.mime,
            'type': value.mime,
        };
        setImgQua6(upload.uri);
        setRefse(!refse);
        // console.log('------------------img3::: ', upload.uri);
    }


    const removeImg = (value) => {
        if (value === 'img1') {
            setImgQua1('');
            setRefse(!refse);
        }
        if (value === 'img2') {
            setImgQua2('');
            setRefse(!refse);
        }
        if (value === 'img3') {
            setImgQua3('');
            setRefse(!refse);
        }
    }

    const removeImgAadhaar = (value) => {
        if (value === 'img4') {
            setImgQua4('');
            setRefse(!refse);
        }
        if (value === 'img5') {
            setImgQua5('');
            setRefse(!refse);
        }
        if (value === 'img6') {
            setImgQua6('');
            setRefse(!refse);
        }
    }

    const modalFuncRegistration = () => {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(false);
                }}>
                <View style={styles.modalMainViewCss}>
                    <View style={styles.modalCardViewCss}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.takeViewCss}
                            onPress={() => { selectCameraReg() }}>
                            <Text style={styles.lebletextCss}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => { selectGelleryReg() }}
                            style={[styles.takeViewCss, { borderBottomWidth: 0, }]}>
                            <Text style={styles.lebletextCss}>Choose from Library</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.closeButtonCss}
                        onPress={() => { setModalVisible(false); }}>
                        <Text style={[styles.lebletextCss, { color: colors.white }]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    const modalFuncAadhaar = () => {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalAaadhaarVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalAadhaarVisible(false);
                }}>
                <View style={styles.modalMainViewCss}>
                    <View style={styles.modalCardViewCss}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.takeViewCss}
                            onPress={() => { selectCameraAadhar() }}>
                            <Text style={styles.lebletextCss}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => { selectGelleryAadhaar() }}
                            style={[styles.takeViewCss, { borderBottomWidth: 0, }]}>
                            <Text style={styles.lebletextCss}>Choose from Library</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.closeButtonCss}
                        onPress={() => { setModalAadhaarVisible(false); }}>
                        <Text style={[styles.lebletextCss, { color: colors.white }]}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    // const calculateExperience = () => {
    //     const currentYear = new Date().getFullYear();
    //     const birthYear = new Date(dob).getFullYear();
    //     const yearsOfExperience = currentYear - birthYear;
    
    //     if (yearsOfExperience >= 0 && yearsOfExperience < 13) {
    //       setExperience(yearsOfExperience.toString());
    //     } else {
    //       setExperience('Invalid');
    //       Helper.showToast("Please enter valid Experience")
    //     }
    // };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                {/* <StepHeader step={1} left={"0%"} /> */}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: Utils.ScreenHeight(2) }}>
                    <TouchableOpacity activeOpacity={0.3}
                        style={styles.backViewCss}
                        onPress={() => navigation.navigate("OnboardingFee")}>
                        <Image source={ImagesPath.signUp.backIcon} style={styles.backIconCss} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', width: '70%', alignItems: 'center' }}>
                        <Image style={[styles.logoIconCss]} source={ImagesPath.home.logo_primary} />
                    </View>
                </View>

                <View style={{ width: '95%', marginLeft: Utils.ScreenWidth(2), marginTop: Utils.ScreenWidth(5), alignItems: 'flex-start', height: Utils.ScreenHeight(5), borderBottomWidth: 1, borderColor: colors.grey2 }}>
                    <Text style={{ textAlign: 'center', color: colors.black, fontSize: 17, fontWeight: '600' }}>
                        Professional Details
                    </Text>
                </View>

                <Text style={styles.addQualiTextCss}>Registration Number</Text>
                <View style={styles.inputViewCss}>
                    <TextInput
                        value={number}
                        keyboardType='default'
                        placeholder="Enter Registration Number"
                        returnKeyType="next"
                        autoCapitalize='characters'
                        maxLength={20}
                        style={styles.inputStylesCss}
                        // onSubmitEditing={() => input_collegeUn.current.focus()}
                        placeholderTextColor={colors.inputColorP}
                        onChangeText={(text) => { setNumber(text.replace(/[`~!@#$%^&*()|+=?;:'",.<>]/gi, '')) }}
                    />
                </View>
                <View style={{ height: imgQua1 ? Utils.ScreenHeight(13) : Utils.ScreenHeight(7), marginBottom: imgQua1 ? Utils.ScreenHeight(2.5) : 0 }}>

                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                        {imgQua1 &&
                            <View style={styles.degreeViewCss}>
                                <Image style={styles.degreeImgCss} source={{ uri: imgQua1 }} />
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { removeImg('img1'); }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                        {imgQua2 &&
                            <View style={styles.degreeViewCss}>
                                <Image style={styles.degreeImgCss} source={{ uri: imgQua2 }} />
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { removeImg('img2'); }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                        {imgQua3 &&
                            <View style={styles.degreeViewCss}>
                                <Image style={styles.degreeImgCss} source={{ uri: imgQua3 }} />
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { removeImg('img3'); }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    <TouchableOpacity activeOpacity={0.7}
                        style={styles.cameraIconViewCss}
                        onPress={() => { setModalVisible(true); }}>
                        {imageSourceReg ?
                            <Image style={styles.cameraIconViewCss} source={{ uri: imageSourceReg.uri }} />
                            :
                            <ImageCropPicker
                                title={'Upload Registration Proof'}
                                // disabled={selectPostImgArray.length >= 10 ? true : false}
                                // getImgPost={(value) => { selectImgPostFunction(value) }}
                                getImgPost={(value) => { uploadImg(value) }}
                            />
                        }
                    </TouchableOpacity>

                </View>

                <View style={{ height: Utils.ScreenHeight(3) }} />
                <Text style={styles.addQualiTextCss}>{'Specialization'}</Text>
                <View style={{ width: '95%', alignSelf: 'center', zIndex:30 }}>
                    <DropDownPicker
                        dropDownDirection="BOTTOM"
                        zIndex={8000}
                        open={openSpecialization}
                        value={valueSpecialization}
                        items={itemsSpecialization}
                        listMode="SCROLLVIEW"

                        setOpen={setOpenSpecialization}
                        setValue={setValueSpecialization}
                        setItems={setItemsSpecialization}
                        disableBorderRadius={true}
                        customItemContainerStyle={{backgroundColor:colors.white}}
                        borderColor={colors.newGrey}
                        placeholder={'Select Specialization'}
                        maxHeight={Utils.ScreenWidth(60)}
                        style={styles.dropDownMainStylesCss}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{ nestedScrollEnabled: true, }}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                    />
                </View>

                <Text style={styles.addQualiTextCss}>{'Degree'}</Text>
                <View style={{ width: '95%', alignSelf: 'center',zIndex:20 }}>
                    <DropDownPicker
                        dropDownDirection="BOTTOM"
                        zIndex={3000}
                        open={openDegrees}
                        value={valueDegrees}
                        items={itemsDegrees}
                        listMode="SCROLLVIEW"
                        setOpen={setOpenDegrees}
                        setValue={setValueDegrees}
                        setItems={setItemsDegrees}
                        disableBorderRadius={true}
                        borderColor={colors.newGrey}
                        placeholder={'Select Degree'}
                        maxHeight={Utils.ScreenWidth(60)}
                        style={styles.dropDownMainStylesCss}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{ nestedScrollEnabled: true, }}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                    />
                </View>

                <Text style={styles.addQualiTextCss}>{'Experience'}</Text>
                <View style={styles.inputViewCss}>
                    <TextInput
                        value={experience}
                        keyboardType='number-pad'
                        placeholder={'Enter your experience'}
                        maxLength={2}
                        style={styles.inputStylesCss}
                        // onSubmitEditing={() => input_collegeUn.current.focus()}
                        placeholderTextColor={colors.inputColorP}
                        onChangeText={(text) => { setExperience(text.replace(/[`~!@#$%^&*()|+=?;:'",.<>]/gi, '')) }}
                    />
                </View>

                <Text style={styles.addQualiTextCss}>{'Aadhaar Number'}</Text>
                <View style={styles.inputViewCss}>
                    <TextInput
                        value={aadhaarNum}
                        keyboardType='number-pad'
                        placeholder={'Enter your Aadhaar Number'}
                        maxLength={12}
                        style={styles.inputStylesCss}
                        // onSubmitEditing={() => input_collegeUn.current.focus()}
                        placeholderTextColor={colors.inputColorP}
                        onChangeText={(text) => { setAadhaarNum(text.replace(/[`~!@#$%^&*()|+=?;:'",.<>-]/gi, '')) }}
                    />
                </View>

                <View style={{ height: imgQua4 ? Utils.ScreenHeight(13) : Utils.ScreenHeight(7), marginBottom: imgQua4 ? Utils.ScreenHeight(2.5) : 0 }}>

                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                        {imgQua4 &&
                            <View style={styles.degreeViewCss}>
                                <Image style={styles.degreeImgCss} source={{ uri: imgQua4 }} />
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { removeImgAadhaar('img4'); }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                        {imgQua5 &&
                            <View style={styles.degreeViewCss}>
                                <Image style={styles.degreeImgCss} source={{ uri: imgQua5 }} />
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { removeImgAadhaar('img5'); }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                        {imgQua6 &&
                            <View style={styles.degreeViewCss}>
                                <Image style={styles.degreeImgCss} source={{ uri: imgQua6 }} />
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => { removeImgAadhaar('img6'); }}
                                    style={styles.cancelIconViewCss}>
                                    <Image style={styles.cancelIconCss} source={ImagesPath.onafterprint.cancel_icon} />
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    <TouchableOpacity activeOpacity={0.7}
                        style={styles.cameraIconViewCss}
                        onPress={() => { setModalAadhaarVisible(true); }}>
                        {imageSourceAadhaar ?
                            <Image style={styles.cameraIconViewCss} source={{ uri: imageSourceAadhaar.uri }} />
                            :
                            <ImageCropPicker
                                title={'Upload Aadhaar Card'}
                                // disabled={selectPostImgArray.length >= 10 ? true : false}
                                // getImgPost={(value) => { selectImgPostFunction(value) }}
                                getImgPost={(value) => { uploadImgAadhaar(value) }}
                            />
                        }
                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: Utils.ScreenWidth(8), marginBottom: 10 }}>
                    <AppButton
                        title="Continue"
                        buttonWidth={Utils.ScreenWidth(90)}
                        onPress={() => { getProfessionalDetails() }}
                    //onPress={() => { navigation.navigate('OnboardingScreen8') }}
                    />
                </View>
                {modalFuncRegistration()}
                {modalFuncAadhaar()}
                <View style={{height:Utils.ScreenHeight(30)}}></View>
            </ScrollView>
            <CustomLoader loaderVisible={loaderVisible} />
        </SafeAreaView>
    )

})


export default DoctorProfessionalDetails