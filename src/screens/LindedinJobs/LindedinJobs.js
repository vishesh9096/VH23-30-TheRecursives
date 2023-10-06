import { View, Text, StatusBar, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { Utils, colors } from '../../contants';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImagesPath from '../../assests/ImagesPath';

const LindedinJobs = () => {
    const navigation = useNavigation();
    const[data,setdata] = useState([]);
    const[loader,setloader] = useState(false);

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    useEffect(() => {
      // oid:"6504e0754312a4f26f9616fa"
      // console.log("from useff")
      var formdata = new FormData();
      formdata.append("user_education", "Bachelor of Engineering");
      formdata.append("user_skills", "react,java,python,flutter,react,javascript,nodejs,sql");
      formdata.append("user_bio", "Vishesh Gatha is a graduate of University of Mumbai, Thadomal Shahani Engineering College, Mumbai. He is currently working as a React Native Developer for One Portfolio pvt ltd AppStore. He has developed an app for tracking users daily fitness goals. He also built a mobile app to reduce food wastage for Unscript rookies Hackathon. Vishesh is also a member of the NSS-TSEC as an event coordinator.");
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      console.log("inside useeffect")
    //   setloader(true)
      fetch("http://127.0.0.1:5000/api/recommendjobs", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
        setdata(result)
        setloader(false)
        })
        .catch(error =>{ console.log('error', error)
        setloader(false)
    });
      
    }, [])
    const latest = ({ item, index }) => {
      return (
        <View >
        <View style = {{flexDirection: 'row'}}>
        <View style = {{backgroundColor: colors.primary, height: Utils.ScreenHeight(11.6), width: Utils.ScreenWidth(2), marginHorizontal: Utils.ScreenWidth(1.2), marginTop: Utils.ScreenHeight(1.8)}}/>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5), borderWidth:1, width: '96%', justifyContent:"space-between", height:Utils.ScreenHeight(12), 
                                 borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}
          onPress={() => {}}>
               <View style={{flexDirection:"row", alignItems:"center", marginLeft:Utils.ScreenWidth(2) }}>
                <Image source={ImagesPath.LegalBridge.job} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginTop:Utils.ScreenWidth(4), marginHorizontal: Utils.ScreenWidth(2), marginBottom:Utils.ScreenWidth(4), maxWidth: '80%'}}>
                <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:"400", color: colors.black, width:Utils.ScreenWidth(35)}}>{item.JobTitle}</Text>
                <Text style={{fontSize:Utils.ScreenHeight(1.2), fontWeight:"400", color: colors.green}}>{item?.Company}</Text>
                </View>
                
                <View
                
                style={{flex:1, justifyContent:'center', marginLeft:Utils.ScreenWidth(10), borderWidth:1, marginRight:Utils.ScreenWidth(3),justifyContent:'center', alignItems:"center", borderRadius:10 }}>
                    <Text
                   
                    style={{fontWeight:600 ,
                    
                    paddingVertical:Utils.ScreenHeight(0.7), paddingHorizontal:Utils.ScreenWidth(0.3) }}>{item.Percentage}% chance</Text>

                </View>
                </View>
               
                
          </TouchableOpacity>
          </View>
          <View style={{marginHorizontal:Utils.ScreenWidth(4), borderBottomWidth:1, borderColor:colors.grey2}}>
          <Text style={{fontWeight:500, fontSize:18}}>Missing skills:</Text>
          <Text style={{marginBottom:Utils.ScreenHeight(3)}}>{item.MissingSkills}</Text>
          </View>
          </View>

          
      )
  }
    
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: colors.white}}>
         {loader ? (
            <View style={{ alignItems: 'center', justifyContent:"center", flex:1}}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Please wait till we analyse jobs for you...</Text>
            </View>
          ) : (
            <View>
          <View style = {{justifyContent: 'center', alignItems: 'center', height: Utils.ScreenHeight(6) }}>
             {/* <Text style = {{fontWeight: 500, fontSize: 20, color: colors.black}}>Recommended Jobs</Text> */}
        </View>
        <TouchableOpacity activeOpacity={0.3}
                          style={{
                              marginLeft: Utils.ScreenWidth(3),
                              alignItems: 'center',
                              elevation: 7,
                              backgroundColor: '#fff',
                              borderRadius: 8,
                              justifyContent: 'center',
                              top: Utils.ScreenHeight(-3),
                              width: Utils.ScreenWidth(12),
                              height: Utils.ScreenHeight(6),}}
                          onPress={() => {
                              navigation.goBack()
                          }}>
                          <Image source={ImagesPath.signUp.backIcon} 
                          style={{
                          resizeMode: 'contain',
                          height: Utils.ScreenWidth(4.8),
                          width: Utils.ScreenWidth(5.8),}} />
                      </TouchableOpacity>
        <ScrollView style={{marginHorizontal:Utils.ScreenWidth(2)}}> 
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{  fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Your Job Recommendations</Text>

                    </View>
                    <FlatList renderItem={latest} data={data}/>
    
          
        </ScrollView>
                    </View> )}
    </SafeAreaView>
  )
}

export default LindedinJobs