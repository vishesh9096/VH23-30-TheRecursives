import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, Keyboard, TouchableOpacity, TextInput, StatusBar, Switch, FlatList, ActivityIndicator, ImageBackground, Alert, } from 'react-native';
import ImagesPath from '../../assests/ImagesPath';
import { colors, fonts, Utils } from "../../contants";
import styles from './styles';
import moment from 'moment';
import CustomLoader from '../../component/CustomLoader';
import ProgessiveImage from '../../component/ProgessiveImage';



const HomeScreen = (props) => {
    const { navigation, route } = props;

    const [getDateData, setGetDateData] = useState();
    const [selectCalender, setSelectCalender] = useState(null);
    const [currDate, setCurrDate] = useState('');
    const [callJoin, setCallJoin] = useState('');
    const [FCMtoken, setFCMToken] = useState('');

    const [artclBaseUrl, setArtclBaseUrl] = useState('');
    const [articlesData, setArticlesData] = useState([]);
    const [appointmentsData, setAppointmentsData] = useState([]);

    const [isRef, setIsRef] = useState(false)
    const [isSwitch, setIsSwitch] = useState(true);
    const [isLoader, setiIsLoader] = useState(false);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);


   
    
    

   


    return (
        <SafeAreaView style={styles.container}>
            <Image
                resizeMode='stretch'
                source={ImagesPath.home.background}
                style={{ width: Utils.ScreenWidth(100), position: 'absolute' }}

            />
            <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
            <View style={styles.headerViewCss}>
          
                <View style={{ flex: 0.5, justifyContent: 'center' }}>

                    <Image style={{
                        width: Utils.ScreenWidth(27),
                        height: Utils.ScreenWidth(27),
                        resizeMode: 'contain',
                        marginTop: Utils.ScreenHeight(3),
                        marginLeft: Utils.ScreenWidth(5)
                    }} source={ImagesPath.home.logo_primary} />
                </View>

                <View style={styles.switchViewCss}>
     
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.bellIconViewCss}
                    onPress={() => {
                        // navigation.openDrawer() 
                        //    logoutAction()
                        navigation.navigate('Settings')
                    }}
                >
                    <Image style={styles.bellIconCss} source={ImagesPath.home.settings_home} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.bellIconViewCss}
                    onPress={() => { navigation.navigate('Notification') }}>
                    <Image style={styles.bellIconCss} source={ImagesPath.home.bell_white} />
                </TouchableOpacity>
            </View>

            <ScrollView
                style={{ paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
               
                <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: Utils.ScreenHeight(3) }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('CalendarScreen')
                        }} style={{ width: '45%', height: Utils.ScreenHeight(21), borderWidth: 1, borderColor: colors.primary, borderRadius: 7, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: colors.white }}>
                            <Image style={styles.addIconCss} source={ImagesPath.home.calender} />
                            <Text style={{ textAlign: 'center', fontSize: 14, color: colors.primary, fontWeight: 'bold', marginVertical: 7 }}>Calender</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ClientSearchScreen')
                        }} style={{ width: '45%', height: Utils.ScreenHeight(21), borderWidth: 1, borderColor: colors.primary, borderRadius: 7, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: colors.white }}>
                            <Image style={styles.addIconCss} source={ImagesPath.home.patient_info} />
                            <Text style={{ textAlign: 'center', fontSize: 14, color: colors.primary, fontWeight: 'bold', marginVertical: 7 }}>Patient</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('ViewProfile')
                        }} style={{ width: '45%', height: Utils.ScreenHeight(21), borderWidth: 1, borderColor: colors.primary, borderRadius: 7, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: colors.white }}>
                            <Image style={styles.addIconCss} source={ImagesPath.home.user_profile} />
                            <Text style={{ textAlign: 'center', fontSize: 14, color: colors.primary, fontWeight: 'bold', marginVertical: 7 }}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('SearchMedicines')
                        }} style={{ width: '45%', height: Utils.ScreenHeight(21), borderWidth: 1, borderColor: colors.primary, borderRadius: 7, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: colors.white }}>
                            <Image style={[styles.addIconCss, { marginLeft: Utils.ScreenWidth(3) }]} source={ImagesPath.home.search_medicine} />
                            <Text style={{ textAlign: 'center', fontSize: 14, color: colors.primary, fontWeight: 'bold', marginVertical: 7 }}>Medicine Hub</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: Utils.ScreenHeight(3) }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Articles')
                        }} style={{ width: '45%', height: Utils.ScreenHeight(21), borderWidth: 1, borderColor: colors.primary, borderRadius: 7, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: colors.white }}>
                            <Image style={styles.addIconCss} source={ImagesPath.home.articles} />
                            <Text style={{ textAlign: 'center', fontSize: 14, color: colors.primary, fontWeight: 'bold', marginVertical: 7 }}>Articles</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={() => {
                            //     navigation.navigate('PatientReviews')
                            // }}
                            style={{ width: '45%', height: Utils.ScreenHeight(21), borderWidth: 1, borderColor: colors.primary, borderRadius: 7, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', elevation: 10, backgroundColor: colors.white }}>
                            <Image style={styles.addIconCss} source={ImagesPath.home.patient_review} />
                            <Text style={{ textAlign: 'center', fontSize: 14, color: colors.primary, fontWeight: 'bold', marginVertical: 7 }}>Patient Reviews</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <CustomLoader loaderVisible={loaderVisible} />
        </SafeAreaView>
    );
}


export default HomeScreen;
