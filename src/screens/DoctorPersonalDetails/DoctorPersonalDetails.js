import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, Picker, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView, StatusBar, Keyboard } from "react-native";
import styles from "./styles";
import moment from "moment";
import Helper from "../../Lib/Helper";
import ApiUrl from "../../Lib/ApiUrl";
import { AppButton } from "../../component";
import ImagesPath from "../../assests/ImagesPath";
import StepHeader from "../../component/StepHeader";
import { colors, fonts, Utils } from "../../contants";
import DropDownPicker from 'react-native-dropdown-picker';
// import CustomLoader from "../../../component/CustomLoader";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import TextInputCom from "../../component/InputTextView/TextInputCom";
import { MultiSelect } from "react-native-element-dropdown";
// import { strings } from "../LanguageScreen/StringsOfLanguages";
// import { color } from "@rneui/base";
import { SafeAreaView } from "react-native";

const data = [
    { label: 'English', value: '1' },
    { label: 'Hindi', value: '2' },
    { label: 'Marathi', value: '3' },
    { label: 'Tamil', value: '4' },
    { label: 'Telugu', value: '5' },
    { label: 'Gujarati', value: '6' },
    { label: 'Urdu', value: '7' },
    { label: 'Arabic', value: '8' },
    { label: 'Russian', value: '9' },
];

const DoctorPersonalDetails = React.memo((props) => {
    const { navigation, route } = props;
    const params = props?.route?.params?.getResData?.phone
    const userEmail = props?.route?.params?.userEmail
    //console.log("Get Response Data>>>>>>", params);

    const stateValue = route?.params?.stateValue;

    const input_last = useRef(null)
    const input_alt = useRef(null)
    const input_expr = useRef(null)

    const [dob, setDob] = useState('');
    //  const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('male');
    // const [altNumber, setAltNumber] = useState('');
    // const [experience, setExperience] = useState('');
    const [selectGender, setSelectGender] = useState(0);
    const [latitudesDoctor, setLatitudesDoctor] = useState('');
    const [longitudeDoctor, setLongitudeDoctor] = useState('');

    const [user, setUser] = useState({ firstName: '', lastName: '', altNumber: '', experience: '', password: '', email: '' })

    const [refes, setRefes] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [selected, setSelected] = React.useState([]);
    // const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [checkValidPassword, setCheckValidPassword] = useState('');
    const [checkValidFN, setCheckValidFN] = useState('');
    const [checkValidLN, setCheckValidLN] = useState('');
    const [checkValidMail, setCheckValidMail] = useState('');
    const [about, setAbout] = useState('')
    const [achievements, setAchievements] = useState('');
   


    const [valueState, setValueState] = useState('');
    const [valueCity, setValueCity] = useState('');
    const [genderData, setGenderData] = useState([
        { img: ImagesPath.onafterprint.MenIcon, title: "male", smallTitle: 'male' },
        { img: ImagesPath.onafterprint.womenIcon, title: "female", smallTitle: 'female' },
        { img: ImagesPath.onafterprint.otherIcon, title: "other", smallTitle: 'other' },
    ]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [openColleges, setOpenColleges] = useState(false);
    const [valueColleges, setValueColleges] = useState(null);
    const [itemsColleges, setItemsColleges] = useState([
        { label: 'All India Institute of Medical Sciences', value: 'All India Institute of Medical Sciences' }, { label: 'CHRISTIAN MEDICAL COLLEGE', value: 'CHRISTIAN MEDICAL COLLEGE' }, { label: "King George's Medical University", value: "King George's Medical University" },
        { label: 'Kasturba Medical College, Manipal', value: 'Kasturba Medical College, Manipal' }, { label: 'Sri Ramachandra Institute', value: 'Sri Ramachandra Institute' }, { label: 'Vardhman Mahavir Medical College', value: 'Vardhman Mahavir Medical College' },
        { label: 'MAMC New Delhi', value: 'MAMC New Delhi' }, { label: 'Jawaharlal Institute of Postgraduate Medical Education & Research', value: 'Jawaharlal Institute of Postgraduate Medical Education & Research' }
    ]);

    
   

    useEffect(() => {
        if (route.params?.stateValue) {
            setValueState(route?.params?.stateValue)
        }
        if (route.params?.cityValue) {
            setValueCity(route?.params?.cityValue)
        }
    }, [route.params?.stateValue, route.params?.cityValue])

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let data = moment(date).format('YYYY-MM-DD');
        setDob(data)
        hideDatePicker();
    };

    const handleChckFirstName = text => {
        let regexPassword = /^[a-z ,.'-]+$/i;
        setUser({ ...user, firstName: text })

        if (regexPassword.test(text)) {
            setCheckValidFN(false);
        } else {
            setCheckValidFN(true);
        }
    };

    const handleChckEmail = text => {
        //let regexPassword =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //let regexPassword = /^[a-zA-Z0-9_.+-]+@(\.[a-zA-Z0-9-]+){1,2}\.[a-zA-Z]{2,}$/
        let regexPassword = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)\.[a-zA-Z]{2,}$/

        setUser({ ...user, email: text })

        if (regexPassword.test(text)) {
            setCheckValidMail(false);
        } else {
            setCheckValidMail(true);
        }
    };

    const handleChckLastName = text => {
        let regexPassword = /^[a-z ,.'-]+$/i;
        setUser({ ...user, lastName: text })

        if (regexPassword.test(text)) {
            setCheckValidLN(false);
        } else {
            setCheckValidLN(true);
        }
    };

    const handleCheckPassword = text => {
        //let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let regexPassword = /^.{8,}$/

        setUser({ ...user, password: text })

        if (regexPassword.test(text)) {
            setCheckValidPassword(false);
        } else {
            setCheckValidPassword(true);
        }
    };

    const handleInput = (text) => {
        setUser({ ...user, altNumber: text })
        if (text.length === 10) {
            Keyboard.dismiss();
        }
    }

    const spet1Api = () => {
        // if (!user.firstName) {
        //     Helper.showToast('Please Enter your full name');
        //     return
        // } if (!gender) {
        //     Helper.showToast('Please slect your gender');
        //     return
        // } if (!user.password) {
        //     Helper.showToast('Please enter a password');
        //     return
        // }
        //  if (user.altNumber.length > 0 && user.altNumber.length < 10) {
        //     Helper.showToast('Please enter a valid mobile number');
        //     return
        // }
        // if (!user.email) {
        //     Helper.showToast('Please enter your email');
        //     return
        // }
        // if (user.password.length <= 5) {
        //     Helper.showToast('Please enter atleast 6 character in password');
        //     return
        // }
        if (checkValidPassword === true) {
            Helper.showToast('Password is invalid');
            return;
        }
        if (checkValidFN === true) {
            Helper.showToast('Please Enter valid first name');
            return;
        }
        if (checkValidMail === true) {
            Helper.showToast('Please Enter a valid Email');
            return;
        }
        const formdata = new FormData();
        formdata.append('first_name', user.firstName);
        formdata.append('dob', dob);
        formdata.append('gender', gender);
        formdata.append('alternate_phone', params);
        // formdata.append('experience', user.experience);
        // formdata.append('state', valueState);
        // formdata.append('city', valueCity);
        // formdata.append('languages', selected)
        formdata.append('about', about)
        formdata.append('achievements', achievements)
        formdata.append('Longitude', longitudeDoctor);
        formdata.append('Latitude', latitudesDoctor);
        console.log('-------------formdata ::: ', formdata);
        showLoader(true)

    //   console.log(user,"here")
                            navigation.navigate("DoctorProfessionalDetails",{user:formdata})
       
    }

    const selectGfunction = (item, index) => {
        setGender(item.smallTitle);
        setSelectGender(index);
    }

    const genderFunction = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => { selectGfunction(item, index) }}
                style={[styles.menbg, {
                    backgroundColor: selectGender === index ? colors.primary : colors.white,
                    borderColor: selectGender === index ? colors.primary : colors.primary,
                }]}>
                <Image source={item.img} style={[styles.menimg, { tintColor: selectGender === index ? colors.white : colors.primary }]} />
                <Text style={[styles.mentext, {
                    color: selectGender === index ? colors.white : colors.primary
                }]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const renderDataItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                {/* <StepHeader step={1} left={"0%"} /> */}
                <View style={{flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'center', marginTop:Utils.ScreenHeight(2)}}>
                    {/* <TouchableOpacity activeOpacity={0.3}
                        style={styles.backViewCss}
                        onPress={() => navigation.goBack()}>
                        <Image source={ImagesPath.signUp.backIcon} style={styles.backIconCss} />
                    </TouchableOpacity> */}
                    {/* <View style={{alignSelf:'center', width:'70%', alignItems:'center'}}> */}
                        <Image style={[styles.logoIconCss]} source={ImagesPath.home.logo_primary} />
                    {/* </View> */}
                </View>

                <View style={{ width:'95%',marginLeft: Utils.ScreenWidth(2),marginTop: Utils.ScreenWidth(5), alignItems: 'flex-start', height: Utils.ScreenHeight(5), borderBottomWidth: 1, borderColor: colors.grey2 }}>
                    <Text style={{textAlign: 'center', color:colors.black, fontSize: 17, fontWeight:'600'}}>
                        Personal Details
                    </Text>
                </View>

                <View style={{ width:'95%',marginLeft: Utils.ScreenWidth(2),marginTop: Utils.ScreenWidth(5), alignItems: 'flex-start', height: Utils.ScreenHeight(2), flexDirection:'row'}}>
                    <Text style={{textAlign: 'center', color:colors.black, fontSize: 13, fontWeight:'600'}}>
                        Add Personal Details
                    </Text>
                    <Text style={{marginHorizontal: 2, textAlign: 'center', color:colors.red, fontSize: 13, fontWeight:'600'}}>
                        *
                    </Text>
                </View>

                <View style={{alignItems: 'flex-start' }}>
                    <TextInputCom
                        value={user.firstName}
                        keyboardType="default"
                        placeholder={'Enter your full name'}
                        returnKeyType="next"
                        maxLength={50}
                      //  getFocus={() => input_last.current.focus()}
                        getFocus={() => input_last.current.focus()}
                        //onChangeText={(text) => { setFirstName(text) }}
                        onChangeText={text => handleChckFirstName(text)}
                    />

                    {checkValidFN ? (
                        <View style={{ marginLeft: 15, marginBottom: 0, marginTop: -9 }}>
                            <Text style={styles.validtext}>Please enter a valid name</Text>
                        </View>

                    ) : (
                        null
                    )}
                </View>
                <View style={{ marginTop: Utils.ScreenWidth(-2) }}>
                   
                   
                </View>
                <View style={{ left: "2%" }}>
                    <FlatList
                        numColumns={3}
                        data={genderData}
                        extraData={useState}
                        renderItem={genderFunction}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.inputViewCss}>
                        <TextInput
                            maxLength={10}
                            value={params}
                            keyboardType="phone-pad"
                            style={styles.inputStylesCss}
                            returnKeyType="next"
                            setFocus={input_expr}
                            placeholderTextColor={colors.inputColorP}
                            placeholder={'Enter Mobile'}
                            //getFocus={() => input_alt.current.focus()}
                            //getFocus={() => input_alt.current.focus()}
                            // onChangeText={(text) => { setAltNumber(text) }}
                            //onChangeText={text => handleInput(text)}
                        />
                </View>

                <View style={{alignItems: 'flex-start' }}>
                    <TextInputCom
                        value={user.email}
                        keyboardType="default"
                        placeholder={'Enter Email'}
                        returnKeyType="next"
                        //maxLength={20}
                       // getFocus={() => input_last.current.focus()}
                       // getFocus={() => input_last.current.focus()}
                        //onChangeText={(text) => { setFirstName(text) }}
                        onChangeText={text => handleChckEmail(text)}
                    />

                    {checkValidMail ? (
                        <View style={{ marginLeft: 15, marginBottom: 0, marginTop: -9 }}>
                            <Text style={styles.validtext}>Please enter a valid email</Text>
                        </View>

                    ) : (
                        null
                    )}
                </View>
                {/* <View style={styles.dropdownViewCss}>
                    <View style={{ width: "48%" }}>
                        <TouchableOpacity
                            activeOpacity={0.1}
                            style={[styles.dopViewCss, { marginHorizontal: Utils.ScreenWidth(0), marginVertical: Utils.ScreenWidth(0), }]}
                            onPress={() => { navigation.navigate('StateNameList'); }}>
                            {valueState ?
                                <Text style={[styles.dobTextCss, { color: colors.primary, width: 130, fontSize: Utils.ScreenWidth(3.5), }]}>{valueState}</Text>
                                :
                                <Text style={styles.dobTextCss}>{strings.state}</Text>
                            }
                            <Image style={styles.dowArrIconCss} source={ImagesPath.onafterprint.dow_arrIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "48%" }}>
                        <TouchableOpacity
                            activeOpacity={0.1}
                            style={[styles.dopViewCss, { marginHorizontal: Utils.ScreenWidth(0), marginVertical: Utils.ScreenWidth(0), }]}
                            onPress={() => { navigation.navigate('CityNameList', { state: stateValue }); }}>
                            {valueCity ?
                                <Text style={[styles.dobTextCss, { color: colors.primary, width: 130, fontSize: Utils.ScreenWidth(3.5), }]}>{valueCity}</Text>
                                :
                                <Text style={styles.dobTextCss}>{strings.city}</Text>
                            }
                            <Image style={styles.dowArrIconCss} source={ImagesPath.onafterprint.dow_arrIcon} />
                        </TouchableOpacity>
                    </View>
                </View> */}
                {/* <View style={{backgroundColor: 'black',height: 50, width: 50, marginVertical: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(10) }}>
                <DropDownPicker
                        // dropDownDirection="TOP"
                        // zIndex={5000}
                        // open={openYears}
                        // value={valueYears}
                        // items={itemsYears}
                        // listMode="SCROLLVIEW"
                        // setOpen={setOpenYears}
                        // setValue={setValueYears}
                        // setItems={setItemsYears}
                        // disableBorderRadius={true}
                        // borderColor={colors.primary}
                        // placeholder={'Year of Passing'}
                        // maxHeight={Utils.ScreenWidth(28)}
                        // style={styles.dropDownMainStylesCss}
                        // labelStyle={{ color: colors.primary }}
                        // textStyle={styles.dropDownTextStyleCss}
                        // scrollViewProps={{ nestedScrollEnabled: true, }}
                        // placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        // dropDownContainerStyle={styles.dropDownContainerStyleCss}
                    />
                </View> */}
                {/* <TouchableOpacity activeOpacity={0.1} style={{ marginVertical: Utils.ScreenWidth(0), marginBottom: Utils.ScreenWidth(0) }}>
                    <MultiSelect
                        style={{ borderWidth: 1, borderColor: colors.primary, borderRadius: Utils.ScreenWidth(2), marginVertical: Utils.ScreenWidth(3), marginLeft: 7, marginRight: 5 }}
                        placeholderStyle={{ color: colors.inputColorP, fontSize: 14, padding: 5, fontFamily: fonts.extraBold }}
                        selectedTextStyle={styles.selectedTextStyle}
                        InputSearchStyle={styles.inputSearchStyle}
                        iconStyle={{ marginRight: 5, }}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder={strings.add_language}
                        dropdownPosition="top"
                        value={selected}
                        onChange={item => {
                            setSelected(item);
                        }}
                        // onChange={item => setUser({ ...user, sele: item })}
                        renderItem={renderDataItem}
                        renderSelectedItem={(item, unSelect) => (
                            <View style={styles.selectedStyle}>
                                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                                <TouchableOpacity activeOpacity={0.1} onPress={() => unSelect && unSelect(item)}>
                                    <Image style={{ height: 15, width: 15, resizeMode: 'contain' }} source={ImagesPath.onafterprint.cross} />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </TouchableOpacity> */}
                <View style={{alignItems: 'flex-start', marginTop: Utils.ScreenHeight(-2) }}>
                    <TextInputCom
                        value={user.password}
                        autoCapitalize='none'
                        placeholder={'Create Password'}
                        icon={true}
                        onPressEye={() => setPasswordVisible(!passwordVisible)}
                        eyeVisible={passwordVisible}
                        // onChangeText={(text) => { setPassword(text) }}
                        onChangeText={(text) => handleCheckPassword(text)}
                    />

                    {checkValidPassword ? (
                        <View style={{ marginLeft: 15, marginBottom: 5, position: 'absolute', top: 60 }}>
                            <Text style={styles.validtext}>Password length should be atleast 8 characters.</Text>
                        </View>

                    ) : (
                        null
                    )}
                    {/* {password ?
                        <TouchableOpacity onPress={() => setPassword}>
                            <Image style={{ width: 20, height: 20, position: 'absolute', bottom: 30, left: 300 }} source={ImagesPath.signUp.hide} />
                        </TouchableOpacity>
                        :
                        <Image style={{ width: 20, height: 20, position: 'absolute', bottom: 30, left: 300 }} source={ImagesPath.signUp.show} />} */}
                </View>

                <View style={{ width:'95%',marginLeft: Utils.ScreenWidth(2),marginBottom: Utils.ScreenWidth(5), alignItems: 'flex-start', height: Utils.ScreenHeight(1), borderBottomWidth: 1, borderColor: colors.grey2 }}>
                </View>

                <View style={{ width:'95%',marginLeft: Utils.ScreenWidth(2), alignItems: 'flex-start', height: Utils.ScreenHeight(3), flexDirection:'row'}}>
                    <Text style={{textAlign: 'center', color:colors.black, fontSize: 13, fontWeight:'600'}}>
                        About me 
                    </Text>
                    <Text style={{marginHorizontal: 2, textAlign: 'center', color:colors.newGrey, fontSize: 13, fontWeight:'600'}}>
                        {' (optional)'}
                    </Text>
                </View>
                <View style={[styles.inputViewCssAbout, { marginTop: Utils.ScreenWidth(2), alignItems: 'flex-start' }]}>
                    <TextInput
                        value={about}
                        keyboardType="default"
                        maxLength={500}
                        multiline={true}
                        
                        textAlignVertical={'top'}
                        numberOfLines={7}
                        style={[styles.inputStylesCssAbout]}
                        placeholder={'Write about yourself'}
                        placeholderTextColor={'grey'}
                        // getFocus={() => input_alt.current.focus()}
                        //setFocus={input_last}
                        // onChangeText={(text) => { setLastName(text) }}
                        onChangeText={text => setAbout(text)}
                    />

                    {checkValidLN ? (
                        <View style={{ marginLeft: 15, marginBottom: 0, marginTop: -9 }}>
                            <Text style={styles.validtext}>Please enter a valid last name</Text>
                        </View>

                    ) : (
                        null
                    )}
                </View>

                <View style={[styles.inputViewCssAbout, { marginTop: Utils.ScreenWidth(2), alignItems: 'flex-start' }]}>
                <TextInput
                        value={achievements}
                        keyboardType="default"
                        maxLength={500}
                        multiline={true}
                        textAlignVertical={'top'}
                        numberOfLines={4}
                        style={[styles.inputStylesCssAbout]}
                        placeholder={'Add Achievements'}
                        placeholderTextColor={'grey'}
                        // getFocus={() => input_alt.current.focus()}
                        //setFocus={input_last}
                        // onChangeText={(text) => { setLastName(text) }}
                        onChangeText={text => setAchievements(text)}
                    />
                </View>
                <View style={{ marginTop: Utils.ScreenWidth(5), marginBottom: 10 }}>
                    <AppButton
                        title={"Continue"}
                        buttonWidth={Utils.ScreenWidth(90)}
                        onPress={() => { 
                            spet1Api()}}
                    //onPress={() => {navigation.navigate('OnboardingScreen9')}}
                    />
                </View>
                <View style={{height:Utils.ScreenHeight(40)}}></View>
            </ScrollView>
            {/* <CustomLoader loaderVisible={loaderVisible} /> */}
            
        </SafeAreaView>
    )

})


export default DoctorPersonalDetails