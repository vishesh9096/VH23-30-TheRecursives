import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'

const community = () => {
  return (
   <ScrollView style={{paddingHorizontal:Utils.ScreenWidth(5),
   backgroundColor:colors.white,
   paddingTop:Utils.ScreenHeight(2)}}>
    <View>
        <Text style={{fontSize:Utils.ScreenHeight(2)}}>Stories</Text>
        <ScrollView 
        style={{marginTop:Utils.ScreenHeight(1)}}
        horizontal>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),justifyContent:"center",marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(8), borderRadius:100, borderWidth:1, borderStyle:"dashed"}}>
                <Text style={{fontSize:Utils.ScreenHeight(3), alignSelf:"center"}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(8), backgroundColor:colors.primary, borderRadius:100 }}>
                <Image 
                style={{height:Utils.ScreenHeight(8),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(8)}}
                source={ImagesPath.home.manImg}/>
            </TouchableOpacity>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(8), backgroundColor:colors.primary, borderRadius:100 }}>
                <Image 
                style={{height:Utils.ScreenHeight(8),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(8)}}
                source={ImagesPath.home.manImg}/>
            </TouchableOpacity>
            <TouchableOpacity style={{height:Utils.ScreenHeight(8),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(8), backgroundColor:colors.primary, borderRadius:100 }}>
                <Image 
                style={{height:Utils.ScreenHeight(8),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(8)}}
                source={ImagesPath.home.manImg}/>
            </TouchableOpacity>
            
            
        </ScrollView>
        <View style={{marginTop:Utils.ScreenHeight(2), borderBottomWidth:0.6, borderColor:colors.grey2}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>

            <View style={{height:Utils.ScreenHeight(4.5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(4.5), backgroundColor:colors.primary, borderRadius:100 }}>
                <Image 
                style={{height:Utils.ScreenHeight(4.5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(4.5)}}
                source={ImagesPath.home.manImg}/>
            </View>
                <View style={{marginLeft:Utils.ScreenWidth(2)}}>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:600}}>Vishesh Gatha</Text>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:400 , color:colors.grey}} >Mumbai</Text>

                </View>
            </View>
                <View style={{height:Utils.ScreenHeight(40), 
                    marginTop:Utils.ScreenHeight(1),
                    width:Utils.ScreenHeight(40) }}>
                <Image 
                style={{height:Utils.ScreenHeight(40)
                   
                    , resizeMode:"contain", borderRadius:20
                    ,marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(40)}}
                source={ImagesPath.LegalBridge.c3} />
            </View>
            <View style={{marginLeft:Utils.ScreenWidth(3), marginBottom:Utils.ScreenHeight(2)}}>
                <Text style={{fontSize:Utils.ScreenHeight(1.8)}}>Vishesh Gatha</Text>
                <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:400 , color:colors.grey}} >Living my best life with best people and best surroundings</Text>     
            </View>

        </View>
        <View style={{marginTop:Utils.ScreenHeight(2), borderBottomWidth:0.6, borderColor:colors.grey2}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>

            <View style={{height:Utils.ScreenHeight(4.5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(4.5), backgroundColor:colors.primary, borderRadius:100 }}>
                <Image 
                style={{height:Utils.ScreenHeight(4.5),marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(4.5)}}
                source={ImagesPath.home.manImg}/>
            </View>
                <View style={{marginLeft:Utils.ScreenWidth(2)}}>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:600}}>Vishesh Gatha</Text>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:400 , color:colors.grey}} >Mumbai</Text>

                </View>
            </View>
                <View style={{height:Utils.ScreenHeight(40), 
                    marginTop:Utils.ScreenHeight(1),
                    width:Utils.ScreenHeight(40) }}>
                <Image 
                style={{height:Utils.ScreenHeight(40)
                   
                    , resizeMode:"contain", borderRadius:20
                    ,marginRight:Utils.ScreenWidth(2), width:Utils.ScreenHeight(40)}}
                source={ImagesPath.LegalBridge.c3} />
            </View>
            <View style={{marginLeft:Utils.ScreenWidth(3), marginBottom:Utils.ScreenHeight(2)}}>
                <Text style={{fontSize:Utils.ScreenHeight(1.8)}}>Vishesh Gatha</Text>
                <Text style={{fontSize:Utils.ScreenHeight(1.5), fontWeight:400 , color:colors.grey}} >Living my best life with best people and best surroundings</Text>     
            </View>

        </View>
    </View>

   </ScrollView>
  )
}

export default community