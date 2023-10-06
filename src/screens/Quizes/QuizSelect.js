import { View, Text, SafeAreaView, ScrollView, Image, StatusBar } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Utils, colors } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';

const QuizSelect = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: colors.white}}>
         <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
        <View style = {{justifyContent: 'center', alignItems: 'center', height: Utils.ScreenHeight(6) }}>
             <Text style = {{fontWeight: 500, fontSize: 20, color: colors.black}}>Take a Short Quiz</Text>
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
    <ScrollView style = {{}} >

        

        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: Utils.ScreenHeight(1), marginBottom: Utils.ScreenHeight(1)}}>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("PlayQuiz")}}
            style = {{backgroundColor: colors.white, elevation: 7, height: Utils.ScreenHeight(16), width: Utils.ScreenWidth(30), borderRadius: 8, alignItems: 'center', marginbottom: Utils.ScreenHeight(1)}}>
                <View>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3965/3965088.png"}}
                style = {{height: Utils.ScreenHeight(12), width: Utils.ScreenWidth(12), resizeMode: 'contain'}}
                />
                <Text style = {{marginTop: Utils.ScreenHeight(0), 
                                color: colors.grey, fontWeight: 400, 
                                fontSize: 16}}>Quiz 1</Text>
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>{navigation.navigate("")}}
            style = {{backgroundColor: colors.white, elevation: 7, height: Utils.ScreenHeight(16), width: Utils.ScreenWidth(30), borderRadius: 8, alignItems: 'center', marginbottom: Utils.ScreenHeight(1)}}>
                <View>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/3965/3965088.png"}}
                style = {{height: Utils.ScreenHeight(12), width: Utils.ScreenWidth(12), resizeMode: 'contain'}}
                />
                <Text style = {{marginTop: Utils.ScreenHeight(0), 
                                color: colors.grey, fontWeight: 400, 
                                fontSize: 16}}>Quiz 1</Text>
                </View>
                
            </TouchableOpacity>
        </View>
    </ScrollView> 
    </SafeAreaView>
  )
}

export default QuizSelect
