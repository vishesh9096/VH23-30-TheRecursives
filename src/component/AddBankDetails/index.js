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
import DropDownPicker from 'react-native-dropdown-picker';

const imgBaseUrl = "http://onehealthassist.com/storage/";

function AddbankDetails(props, { route }) {
    const { navigation, editAllDataCards, getUpdateDoc, editApi } = props;
    console.log("routes...", props);

    const input_ifsc = useRef(null)

    const [accountNumber, setAccountNumber] = useState('');
    const [iFSCCode, setIFSCCode] = useState('');

    const [refse, setRefse] = useState(false);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [checkValidIFSC,setCheckValidIFSC] = useState(false)

    const [openBankDetails, setOpenBankDetails] = useState(false);
    const [valueBankDetails, setValueBankDetails] = useState(null);
    const [itemsBankDetails, setItemsBankDetails] = useState([
        { label: 'Axis Bank', value: 'Axis Bank' },
        { label: 'Bandhan Bank', value: 'Bandhan Bank' },
        { label: 'CSB Bank', value: 'CSB Bank' },
        { label: 'City Union Bank', value: 'City Union Bank' },
        { label: 'DCB Bank', value: 'DCB Bank' },
        { label: 'Dhanlaxmi Bank', value: 'Dhanlaxmi Bank' },
        { label: 'Federal Bank', value: 'Federal Bank' },
        { label: 'HDFC Bank', value: 'HDFC Bank' },
        { label: 'ICICI Bank', value: 'ICICI Bank' },
        { label: 'Induslnd Bank', value: 'Induslnd Bank' },
        { label: 'IDFC First Bank', value: 'IDFC First Bank' },
        { label: 'Jammu & Kashmir Bank', value: 'Jammu & Kashmir Bank' },
        { label: 'Karnataka Bank', value: 'Karnataka Bank' },
        { label: 'Karur Vysya Bank', value: 'Karur Vysya Bank' },
        { label: 'Kotak Mahindra Bank', value: 'Kotak Mahindra Bank' },
        { label: 'Nainital Bank', value: 'Nainital Bank' },
        { label: 'RBL Bank', value: 'RBL Bank' },
        { label: 'South Indian Bank', value: 'South Indian Bank' },
        { label: 'Tamilnad Mercantile Bank', value: 'Tamilnad Mercantile Bank' },
        { label: 'YES Bank', value: 'YES Bank' },
        { label: 'IDBI Bank', value: 'IDBI Bank' },

    ]);

    useEffect(() => {
        setRefse(!refse)
        console.log('-----editAllDataCards: ', editAllDataCards);
        setValueBankDetails(editAllDataCards?.bank_name);
        setAccountNumber(editAllDataCards?.account_number);
        setIFSCCode(editAllDataCards?.ifsc_code)
    }, [editAllDataCards])


    const handleCheckIFSC = text => {
        let ifscRegex = /^([A-Z]{4}[0]{1}[0-9]{6})$/;
        setIFSCCode(text)

        if (ifscRegex.test(text)) {
            setCheckValidIFSC(false);
        } else {
            setCheckValidIFSC(true);
        }
    };

    return (
        <>
            <View style={styles.cardViewCss}>
                <Text style={styles.addQualiTextCss}>Bank Name</Text>
                <View style={{ flex: 0.3, marginTop: Utils.ScreenWidth(2), marginBottom: Utils.ScreenWidth(6), zIndex:80 }}>
                    <DropDownPicker

                        listMode="SCROLLVIEW"
                        open={openBankDetails}
                        value={valueBankDetails}
                        items={itemsBankDetails}
                        setOpen={setOpenBankDetails}
                        setValue={setValueBankDetails}
                        setItems={setItemsBankDetails}
                        disableBorderRadius={true}
                        borderColor={colors.primary}
                        maxHeight={Utils.ScreenWidth(50)}
                        style={styles.dropDownMainStylesCss}
                        placeholder={'Select Bank Name'}
                        labelStyle={{ color: colors.primary }}
                        textStyle={styles.dropDownTextStyleCss}
                        scrollViewProps={{ nestedScrollEnabled: true, }}
                        placeholderStyle={styles.dropDownPlaceholderStyleCss}
                        dropDownContainerStyle={styles.dropDownContainerStyleCss}
                    />
                </View>
                <Text style={styles.addQualiTextCss}>Account Number</Text>
                <View style={styles.inputViewCss}>
                    <TextInput
                        value={accountNumber}
                        returnKeyType="next"
                        keyboardType={'number-pad'}
                        style={styles.inputStylesCss}
                        placeholder="Enter Account Number"
                        placeholderTextColor={colors.inputColorP}
                        onChangeText={(text) => { setAccountNumber(text.replace(/[`~!@#$%^&*()/\|+=?;:'",.<>]/gi, '')) }}
                        onSubmitEditing={() => input_ifsc.current.focus()}
                    />
                </View>
                <Text style={styles.addQualiTextCss}>IFSC Code</Text>
                <View style={styles.inputViewCss}>
                    <TextInput
                        value={iFSCCode}
                        ref={input_ifsc}
                        returnKeyType="done"
                        keyboardType='default'
                        autoCapitalize='characters'
                        style={styles.inputStylesCss}
                        placeholder="Enter IFSC Code"
                        placeholderTextColor={colors.inputColorP}
                        onChangeText={(text) => handleCheckIFSC(text)}
                    />

                    {checkValidIFSC ? (
                        <View style={{ alignSelf: 'flex-start', marginLeft: 5, marginBottom: Utils.ScreenWidth(2) }}>
                            <Text style={styles.validtext}>Please enter a valid IFSC code</Text>
                        </View>

                    ) : (
                        null
                    )}
                </View>

            </View>
            <View style={{ marginTop: Utils.ScreenWidth(7), marginBottom: Utils.ScreenWidth(2), }}>
                <AppButton
                    title={'Update'}
                    buttonWidth={Utils.ScreenWidth(90)}
                    onPress={() => { getUpdateDoc(editAllDataCards?.id, valueBankDetails, accountNumber, iFSCCode) }} // getUpdateDocQualification()
                />
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
        </>
    )
};

export default AddbankDetails;