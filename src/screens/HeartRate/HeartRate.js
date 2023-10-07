import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImagesPath from '../../assests/ImagesPath';
import { Utils, colors } from '../../contants';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const HeartRate = () => {
    const navigation = useNavigation()
    const latestdata = [
        { id: '1', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago", image:ImagesPath.LegalBridge.c1 },
        { id: '2', header: "News Updates", title: "Preventing Multiplicity And Streamlining Processes For ...", duration: "30 min ago" ,image:ImagesPath.LegalBridge.c2 },
        { id: '3', header: "High Court", title: "Gujarat High Court Weekly Round-Up: August 28 To ...", duration: "45 min ago",image:ImagesPath.LegalBridge.c3 },
        { id: '4', header: "Supreme Court", title: "Manipur Violence | Following Supreme Court's Direction ...", duration: "50 min ago" ,image:ImagesPath.LegalBridge.c4},
        
  
    ];

    const latest = ({ item }) => {
        const day = moment(new Date(item.startTime)).format('DD MMM, y')
        // console.log("idar ", item.startTime.split())
        return (
            <TouchableOpacity>
                <View style={{flexDirection:"row", marginBottom:Utils.ScreenHeight(1)}}>
                    <View>
                        <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1818/1818145.png"}}
                            style={{ width: Utils.ScreenWidth(25), height: Utils.ScreenHeight(10), resizeMode: "contain" }} />
                    </View>
                    <View style={{flex:1, justifyContent:"space-evenly"}}>
                        <Text style={{fontSize:12, color:colors.grey, fontWeight:300}}> {item.value} </Text>
                        <Text style={{fontSize:23, fontWeight:400}}>Heart Rate: {item.value + 60} </Text>
                        <Text style={{fontSize:12, color:colors.grey, fontWeight:300}}>{item.startTime} </Text>
                       
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
    const [data,setdata] = useState([])
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://v1.nocodeapi.com/deepparekh/fit/jNHMFGOmmsFrIvCG/aggregatesDatasets?dataTypeName=steps_count,active_minutes,calories_expended,heart_minutes,sleep_segment,weight&timePeriod=30days", requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result)
                setdata(result.heart_minutes)
            
            
            })
            .catch(error => console.log('error', error));
    }, [])
    
  return (
    <SafeAreaView style={{backgroundColor:colors.white, flex:1}}>
          <View style={{ flexDirection: "row",
         marginBottom:Utils.ScreenHeight(3),
         marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Heart Tracking</Text>
                </View>
                <View style={{marginHorizontal:Utils.ScreenWidth(4)}}>
       <FlatList

                        data={data} renderItem={latest} />

</View>
    </SafeAreaView>
  )
}



export default HeartRate

