import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native'

const ConnectDevice = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:colors.white, flex:1}}>
        <View style={{ flexDirection: "row",
         marginBottom:Utils.ScreenHeight(3),
         marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Your Devices</Text>
                </View>

                <View style={{marginHorizontal:Utils.ScreenWidth(4)}}>
                <Text style={{  fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Your Devices is connected via Google Fit</Text>
               

                <TouchableOpacity
                  onPress={()=>{navigation.navigate("Steps")}}
                  style={{borderWidth:1,
                      flexDirection:"row", justifyContent:"flex-start",alignItems:"center",
                      height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
                  <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1184/1184701.png"}}
                  style={{height:Utils.ScreenHeight(18),marginLeft:Utils.ScreenWidth(6), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
                  />
                  <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500, marginLeft:Utils.ScreenWidth(15)}}>Steps Count</Text>

                  </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>{navigation.navigate("Calories")}}
                  style={{borderWidth:1,
                      flexDirection:"row", justifyContent:"flex-start",alignItems:"center",
                      height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
                  <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3160/3160163.png"}}
                  style={{height:Utils.ScreenHeight(18),marginLeft:Utils.ScreenWidth(6), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
                  />
                  <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500, marginLeft:Utils.ScreenWidth(15)}}>Calories Burned</Text>

                  </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>{navigation.navigate("HeartRate")}}
                  style={{borderWidth:1,
                      flexDirection:"row", justifyContent:"flex-start",alignItems:"center",
                      height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
                  <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1818/1818145.png"}}
                  style={{height:Utils.ScreenHeight(18),marginLeft:Utils.ScreenWidth(6), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
                  />
                  <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500, marginLeft:Utils.ScreenWidth(15)}}>Heart Rate</Text>

                  </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>{navigation.navigate("Actvity")}}
                  style={{borderWidth:1,
                      flexDirection:"row", justifyContent:"flex-start",alignItems:"center",
                      height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(94),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
                  <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3475/3475171.png"}}
                  style={{height:Utils.ScreenHeight(18),marginLeft:Utils.ScreenWidth(6), color: colors.primary, width:Utils.ScreenWidth(28), resizeMode:"contain" }}
                  />
                  <Text style={{fontSize:Utils.ScreenHeight(2), color: colors.primary, fontWeight:500, marginLeft:Utils.ScreenWidth(15)}}>Activity Rate</Text>

                  </TouchableOpacity>
                  
               
               


                </View>


    </SafeAreaView>
  )
}

export default ConnectDevice