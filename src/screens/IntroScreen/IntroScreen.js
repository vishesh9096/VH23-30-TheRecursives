import React from "react";

import { SafeAreaView, View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Utils, colors } from "../../contants";
import ImagesPath from "../../assests/ImagesPath";
import ApiUrl from "../../Lib/ApiUrl";


const OnboardWelcome = (props) => {
    const {navigation} = props
    return (
        <>
        <SafeAreaView style={{backgroundColor:colors.white}}/>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image style={{
           
                width: Utils.ScreenWidth(100), height: Utils.ScreenHeight(60), resizeMode:'contain' }} source={ImagesPath.onafterprint.intro} />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 40 }}>
                
               {/* <Text style={{fontSize:Utils.ScreenHeight(3), fontWeight:500}}>Indias #1 {'\n'} Career Recommendation App</Text> */}
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Loginclient')
                }}
                style={{ backgroundColor: colors.primary, width: '90%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(10) }}>
                    <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>Get started Client </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('LoginDoctor')
                }}
                style={{ backgroundColor: colors.primary, width: '90%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(2) }}>
                    <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>Get started Doctor</Text>
                </TouchableOpacity>

            </View>
        </View>
        </>
    )
}
export default OnboardWelcome;