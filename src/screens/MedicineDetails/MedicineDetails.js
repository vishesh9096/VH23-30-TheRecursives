import { STRING_UNARY_OPERATORS } from '@babel/types';
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, Keyboard, TouchableOpacity, TextInput, FlatList, Button } from 'react-native';

import styles from './styles';
import { Utils, colors } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import CustomLoader from '../../component/CustomLoader';

const MedicineDetails = (props) => {
    const { navigation, route } = props;

    const medData = route?.params?.data

    const [imgBaseUrl, setImgBaseUrl] = useState('');
    const [patientsData, setPatientsData] = useState([]);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [loaderVisible, setLoaderVisible] = useState(false);

    const [searchString, setSearchString] = useState('');

    const [patient, setPatient] = useState({
        fullname: '',
        contactNum: '',
        email: '',
        gender: '',
        date: '',
        bloodGroup: '',
        pat_id: '',
        street: '',
        locality: '',
        state: '',
        city: '',
        pincode: ''
    })

    const arr = [
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        },
        {
            first_name: 'Azithral 500 Tablet',
            //last_name: '1',
            gender: '10 Tablets',
            age: 'in one Strip'

        }
    ]
    return (
        <>
        <SafeAreaView style={{backgroundColor:colors.primary}}/>
        <SafeAreaView style={styles.container}>
            
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#008080' }}>
                <TouchableOpacity onPress={() => navigation.navigate('SearchMedicines')} style={{ width: 35, height: 35, display: 'flex', justifyContent: 'flex-start', paddingHorizontal: 10 }}>
                    <Image style={{ width: 35, height: 35 }} source={ImagesPath.home.white_arrow} />
                </TouchableOpacity>
                <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '800', color: 'white' }}>Medicine Details</Text>
                </View>
            </View>
          <ScrollView>
          <TouchableOpacity
                activeOpacity={0.7}
                style={styles.appointmentReqCardViewCss}
                //onPress={() => { navigation.navigate('PatientDetails'); }}
                >
                <View style={{ flexDirection: 'row', marginVertical: Utils.ScreenWidth(3), alignItems:'center' }}>
                    <View style={styles.imgeViewCss}>
                        {/* <Image style={styles.imgCss} source={item.profile_image ? { uri: item.profile_image } : ImagesPath.home.manImg} /> */}
                        <Image style={styles.imgCss} source={ImagesPath.home.capsule_icon} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: Utils.ScreenWidth(3) }}>
                        <Text style={styles.reqTitleCss}>{medData?.producttypename} {medData?.drug_name}</Text>
                        {/* <Text style={styles.dateTimeReqTextCss}>{moment(item.created_at).format('MMMM DD')}  -  {moment(item.created_at).format('hh:mm A')}</Text> */}
                        <Text style={styles.dateTimeReqTextCss}>{medData?.composition} </Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
            <View  style={{marginHorizontal: Utils.ScreenWidth(4), marginVertical: Utils.ScreenHeight(2)}}>
                <Text style={[styles.reqTitleCss, {color: colors.primary}]}>Use Of medicine</Text>
                <Text style={styles.dateTimeReqTextCss}>{medData?.proprietarynamesuffix}{medData?.use_of_medicine}</Text>
            </View>
            <View  style={{marginHorizontal: Utils.ScreenWidth(4), marginVertical: Utils.ScreenHeight(2)}}>
                <Text style={[styles.reqTitleCss, {color: colors.primary}]}>Side Effects</Text>
                <Text style={styles.dateTimeReqTextCss}>{medData?.side_effects}</Text>
            </View>

            <View  style={{marginHorizontal: Utils.ScreenWidth(4), marginVertical: Utils.ScreenHeight(2)}}>
                <Text style={[styles.reqTitleCss, {color: colors.primary}]}>Alternate Medicine</Text>
                <Text style={styles.dateTimeReqTextCss}>{medData?.alternate_brand}</Text>
            </View>
            </ScrollView>
            <CustomLoader loaderVisible={loaderVisible} />
        </SafeAreaView>
        </>
    );
}


export default MedicineDetails;