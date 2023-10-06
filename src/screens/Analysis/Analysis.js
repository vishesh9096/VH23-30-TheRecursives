import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const Analysis = () => {
    const navigation = useNavigation()
  return (
    <View style={{paddingHorizontal:Utils.ScreenWidth(4), flex:1, paddingTop:Utils.ScreenHeight(2)}}>
      {/* <Text style={{fontSize:Utils.ScreenHeight(2)}}>Take Correct Decisions with Accurate Analysis!</Text> */}
    <ScrollView>
    <View style={{
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(90),borderRadius:12, marginTop:Utils.ScreenHeight(3),alignSelf:"center", }}>
    <Image source={ImagesPath.LegalBridge.graph}
    style={{height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(90), resizeMode:"contain", }}
    />


    </View>




    <TouchableOpacity
    onPress={()=>{navigation.navigate("StartInterview")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(90),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/10817/10817271.png"}}
    style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(40), resizeMode:"contain", }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>Practice Interviews{'\n'}With AI</Text>

    </TouchableOpacity>

    <TouchableOpacity 
    onPress={()=>{navigation.navigate("Jobs")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(90),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/609/609134.png"}}
    style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(40), resizeMode:"contain", }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>View Job {'\n'}Recommendations</Text>

    </TouchableOpacity>


    <TouchableOpacity
    
    onPress={()=>{navigation.navigate("PlayQuiz")}}style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(90),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/7128/7128250.png"}}
    style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(40), resizeMode:"contain", }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>Take a 2 minute Quiz {'\n'}to Test Your Skills</Text>

    </TouchableOpacity>

    <TouchableOpacity 
    onPress={()=>{navigation.navigate("Courses")}}
    style={{borderWidth:1,
        flexDirection:"row", justifyContent:"space-evenly",alignItems:"center",
        height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(90),borderRadius:12, marginTop:Utils.ScreenHeight(3),backgroundColor:colors.white, alignSelf:"center", borderColor:colors.grey2}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2997/2997554.png"}}
    style={{height:Utils.ScreenHeight(12), width:Utils.ScreenWidth(40), resizeMode:"contain", }}
    />
    <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>Personalised Courses</Text>

    </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

export default Analysis