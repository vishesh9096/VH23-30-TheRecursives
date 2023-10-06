import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native';

const wellbeing = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView>
    <ScrollView>
      <TouchableOpacity
    onPress={()=>{navigation.navigate("policies")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://img.freepik.com/free-vector/woman-with-kid-consulting-doctor_74855-4587.jpg?w=740&t=st=1696582121~exp=1696582721~hmac=a639219472556f45fcc078f93ed70ad7f1f73a75c5cf36a2966434a3ac544475"}}
    style={{height:Utils.ScreenHeight(18), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500}}>Government Policies</Text>

    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=>{navigation.navigate("StartInterview")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://img.freepik.com/free-vector/time-vaccinate-illustration_1284-59254.jpg?w=1060&t=st=1696584629~exp=1696585229~hmac=de7b3775091846eae8a7ffe8007aed1e8b29168d07c5b96aad88aa084f09acc8"}}
    style={{height:Utils.ScreenHeight(18), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500}}>Free Medical Camps</Text>

    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=>{navigation.navigate("StartInterview")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://img.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient-illustration_23-2148863748.jpg?size=626&ext=jpg&uid=R111949587&semt=ais"}}
    style={{height:Utils.ScreenHeight(18), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500, maxWidth: '60%'}}>Vaccination/ Treatment Centers</Text>

    </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  )
}

export default wellbeing