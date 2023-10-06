import { View, Text, StatusBar, Image, Modal, Dimensions, Alert } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Utils, colors } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import { QuizData } from '../../contants/QuizData';
import QuestionItem from './QuestionItem';
import Helper from '../../Lib/Helper';



const PlayQuiz = (props) => {
    const{route} = props
    const data = route?.params?.data;
    const summary = route?.params?.summary;
    const navigation = useNavigation();
    const width = Dimensions.get('window').width;
    
    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )

    const [currentIndex, setCurrentIndex] = useState(1);
    const [questions, setQuestions] = useState(QuizData);
    const listRef = useRef();
    const [modalVisible, setModalVisible] = useState(false);
    const OnSelectOption = (index, x) => {
        const tempData = questions;
        tempData.map((item, ind) => {
            if (index == ind) {
                item.marked = x;
            }
        });
        let temp = [];
        tempData.map(item => {
            temp.push(item);
        })
        setQuestions(temp);
    };
    const getTextScore = () => {
        let marks = 0;
        questions.map(item => {
            if (item.marked !== -1) {
                marks = marks + 5;

            }
        });
        return marks;
    };
    const reset=()=>{
        const tempData = questions;
        tempData.map((item, ind) => {
                item.marked = -1;
            
        });
        let temp = [];
        tempData.map(item => {
            temp.push(item);
        })
        setQuestions(temp);

    }

    const submit=()=>{
      
        // showLoader(true)
        
        var myHeaders = new Headers();
        const raw = {
            "scholarship_title":data?.title,
            "funding":data?.funds,
            "file":"https://3968-203-212-25-251.ngrok-free.app/static/output/all_dog_words.png",
            "summary":summary,
            "user_id": "6504e0754312a4f26f9616fa",
            "status":"Pending"
        }
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        fetch("https://nfc-backend-nyjt.onrender.com/api/applications", requestOptions)
        .then(response => response.json())
        .then(result => {
            
            console.log("response:",result._id)
            Helper.setData('appnid', result._id)
            alert("Application submitted")
            navigation.navigate("ClientHomeScreen")
        }
        
        )
        .catch(error => console.log('error', error));
        
    }

  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: colors.white}}>
         <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />

         <View style = {{justifyContent: 'center', alignItems: 'center', height: Utils.ScreenHeight(6) }}>
             <Text style = {{fontWeight: 500, fontSize: 20, color: colors.black}}>Quiz</Text>
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
     <ScrollView>
            
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20,marginRight:20,}}>
            <Text style ={{ color: colors.black, fontWeight: 400, fontSize: 20, marginLeft: Utils.ScreenWidth(4), marginTop: Utils.ScreenHeight(2)}}>
                English Questions:{'  ' + currentIndex + '/' + QuizData.length}
            </Text>
            <Text style={{color: colors.black}} onPress={()=>{
                reset();
                listRef.current.scrollToIndex({animated:true, index:0});
            }}>Reset</Text>
            </View>
            <View>
                <FlatList
                    ref={listRef}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    onScroll={e => {
                        const x = (e.nativeEvent.contentOffset.x / width) + 1;
                        setCurrentIndex(x.toFixed(0));
                    }}
                    data={questions}
                    renderItem={({ item, index }) => {
                        return (
                            <QuestionItem
                                data={item}
                                selectedOption={x => {
                                    OnSelectOption(index, x);
                                }}

                            />
                        );
                    }}
                />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'absolute',
                bottom: 0,
                width: '100%',


            }}>
                <TouchableOpacity
                style={{
                    backgroundColor: colors.primary,
                    height: 50,
                    width: 100,
                    borderRadius: 10,
                    marginLeft: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            onPress={() => {
                if (currentIndex > 1) {
                listRef.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 2,
                });

     
        setCurrentIndex(currentIndex - 1);
        }
        }}>
             <Text style={{ color: '#fff' }}>Previous</Text>
        </TouchableOpacity>

                {currentIndex == 4 ? (
                    <TouchableOpacity style={{
                        backgroundColor: 'green',
                        height: 50,
                        width: 200,
                        borderRadius: 10,
                        marginRight: 10,
                        justifyContent: 'center',
                        alignItems: 'center',


                    }} onPress={() => {
                      // submit()
                      
                    }}>
                        <Text style={{ color: '#fff' }}> Submit </Text>

                    </TouchableOpacity>

                ) : (
                    <TouchableOpacity
        style={{
            backgroundColor: colors.primary,
            height: 50,
            width: 100,
            borderRadius: 10,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}
    onPress={() => {
        console.log(currentIndex);
        if (currentIndex < questions.length) {
        listRef.current.scrollToIndex({
        animated: true,
        index: parseInt(currentIndex),
      });

      
        setCurrentIndex(currentIndex + 1);
     }
    }}>
     <Text style={{ color: '#fff' }}>Next</Text>
    </TouchableOpacity>
                )}



            </View>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {

                    setModalVisible(!modalVisible);
                }}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,.5)',
                    justifyContent: 'center',
                    justifyItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: '#fff',
                        width: '90%',

                        borderRadius: 10,
                        marginLeft: 20,
                    }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: '800',
                            alignSelf: 'center',
                            marginTop: 20,
                        }}>
                            Text Score
                        </Text>

                        <Text style={{
                            fontSize: 40,
                            fontWeight: '800',
                            alignSelf: 'center',
                            marginTop: 20,
                            color: 'green',
                        }}>
                            {getTextScore()}
                        </Text>
                        <TouchableOpacity style={{ alignSelf: 'center', 
                        height: 40,
                        padding: 10 ,
                        borderWidth:1,
                        borderRadius:1,
                        marginBottom:20,
                        marginTop:20
                    }} onPress={()=>{
                         setModalVisible(!modalVisible);
                        }}>
                            <Text>
                                Close
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal> */}
          
     </ScrollView>
    </SafeAreaView>
  )
}

export default PlayQuiz