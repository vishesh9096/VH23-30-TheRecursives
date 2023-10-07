import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native'
import ImagesPath from '../../assests/ImagesPath'
import moment from 'moment'

const ReportsOCR = () => {
    
    const data = {
        "Units": [
            "Hemoglobin"
        ],
        "Date": [
            "Date",
            "2011-08-25 08"
        ],
        "2011-08-25 08": [
            "2011-08-25 08",
            "Age",
            "25y 10m 26d",
            "Sex",
            "Female"
        ],
        "Doctor": [
            "Doctor",
            "Cameron Cordara",
            "Test id B165AAF4"
        ],
        "COMPLETE": [
            "COMPLETE",
            "BLOOD",
            "COUNT"
        ],
        "Test Name": [
            "Test Name",
            "Result",
            "Normal Range"
        ],
        "12": [
            "12",
            "11.0 - 16.0",
            "g/dL"
        ],
        "RBC": [
            "RBC",
            "3.3",
            "3.5-5.50",
            "10^6/uL"
        ],
        "HCT": [
            "HCT",
            "36",
            "37.0-50.0",
            "%"
        ],
        "MCV": [
            "MCV",
            "83",
            "82-95",
            "fI"
        ],
        "MCH": [
            "MCH",
            "28",
            "27-31",
            "pg"
        ],
        "MCHC": [
            "MCHC",
            "33",
            "32.0-36.0",
            "g/dL"
        ],
        "RDW-CV": [
            "RDW-CV",
            "12",
            "11.5-14.5",
            "%"
        ],
        "RDW-SD": [
            "RDW-SD",
            "44",
            "35-56",
            "f1"
        ],
        "WBC": [
            "WBC",
            "6.7",
            "4.5-11",
            "10^3/uL"
        ],
        "NEU%": [
            "NEU%",
            "60",
            "4070",
            "%"
        ],
        "LYM%": [
            "LYM%",
            "30",
            "20-45",
            "%"
        ],
        "MON%": [
            "MON%",
            "8",
            "2-10",
            " %"
        ],
        "EOS%": [
            "EOS%",
            "2",
            "1-6",
            "%"
        ],
        "BAS%": [
            "BAS%",
            " 0",
            "0-2",
            "%"
        ],
        "LYM#": [
            "LYM#",
            "2",
            "1.5-4.0",
            "10^3/uL"
        ],
        "GRA#": [
            "GRA#",
            "4.7",
            "2.0-7.5",
            "10^3/uL"
        ],
        "PLT": [
            "PLT",
            "256",
            "150-450",
            "10^3/uL"
        ],
        "3": [
            "3"
        ]
    }
    const dataArray = Object.keys(data).map((key) => ({
        key: key,
        data: data[key].slice(1), // Remove the first element which is not a word
        word: data[key][1], // Store the first element as a word
      }));
      const reversedArray = [...dataArray].reverse();
   
    const [text,settext] = useState("");
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
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Search Reports</Text>
                </View>
                <View
                style={{
                    marginVertical: Utils.ScreenHeight(1),
                    paddingHorizontal: Utils.ScreenWidth(3),
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <TextInput
                    // label={'phone'}
                    placeholder={'Search'}
                    onChangeText={data => {
                       
                        settext(data)

                    }}
                    value={text}
                    placeholderTextColor={colors.inputColorP}
                    maxLength={20}
                    style={{
                        fontSize: 15,
                        borderRadius: 5,
                        backgroundColor: colors.white,
                        padding: Utils.ScreenHeight(0.5),
                        height:Utils.ScreenHeight(5),
                        // paddingHorizontal: moderateScale(30),
                        color: colors.black,
                        // backgroundColor:"red",
                        borderWidth: 1,
                        borderColor:colors.primary,
                        width: '100%',
                    }}
                />
            </View>

                <FlatList

                        data={reversedArray} renderItem={
                            ({item})=>{
                                const formattedString = item.key+" : "+  item.data[0]+"---> "+item.data[1]+ "(normal range)";
                                console.log(item, formattedString)
                                if(text=== ""){
                                    return(
                                         <TouchableOpacity>
                                    <View style={{flexDirection:"row", marginBottom:Utils.ScreenHeight(1)}}>
                                        <View>
                                            <Image source={ImagesPath.home.logo_primary}
                                                style={{ width: Utils.ScreenWidth(25), height: Utils.ScreenHeight(10), resizeMode: "contain" }} />
                                        </View>
                                        <View style={{flex:1, justifyContent:"flex-start", flexDirection:"row",alignItems:"center" }}>
                    
                                            <Text style={{fontSize:20, fontWeight:400}}> {formattedString} </Text>
                                            <Text style={{fontSize:19, fontWeight:400}}> </Text>
                    
                                           
                                        </View>
                                    </View>
                    
                                </TouchableOpacity>
                                      
                    
                                    )
                                     }
                                     if(formattedString?.toLowerCase().includes(text.toLowerCase())){
                                        return(
                                            <TouchableOpacity>
                                            <View style={{flexDirection:"row", marginBottom:Utils.ScreenHeight(1)}}>
                                                <View>
                                                    <Image source={ImagesPath.home.logo_primary}
                                                        style={{ width: Utils.ScreenWidth(25), height: Utils.ScreenHeight(10), resizeMode: "contain" }} />
                                                </View>
                                                <View style={{flex:1, justifyContent:"flex-start", flexDirection:"row",alignItems:"center" }}>
                            
                                                    <Text style={{fontSize:20, fontWeight:400}}> {formattedString} </Text>
                                                    <Text style={{fontSize:19, fontWeight:400}}> </Text>
                            
                                                   
                                                </View>
                                            </View>
                            
                                        </TouchableOpacity>
                                           
                                        )
                                     }
                            }
                        } />
    </SafeAreaView>
  )
}

export default ReportsOCR