import { View, Text, TouchableOpacity, Image, TextInput, Modal, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios'
import DocumentPicker from 'react-native-document-picker'; 
import WebView from 'react-native-webview'

const OCR = (props) => {
    const{route} = props

    const navigation = useNavigation();
    const[summary,setsummary] = useState("");
    const[searchtext,setsearchtext] = useState("");
    const[image,setimage] = useState("");
    const[output,setoutput] = useState(false);
    const[visible,setVisible] = useState(false);
    const[newuri,setnewuri] = useState("")
    const[loader,setloader] = useState(false)
    const[takequiz,settakequiz] = useState(false)
    const uploadImage = async () => {
        
        setoutput(false);
        const result = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
          });
        const formData = new FormData();
        formData.append('image', {
            'uri': result[0].uri,
            'type': result[0].type,
            'name': Date.now() + result[0].name,
        });
        setimage(result[0].name)
        formData.append('search_word', "agrees");
        setloader(true)
        axios
          .post('http://127.0.0.1:5000/api/ocr', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log('API Response:', response.data);
            const uri = "http://127.0.0.1:5000/"+response.data[0]?.annotated_image_path
            setnewuri(uri)
            const txt = response.data[0]?.summary
            const cleanText = txt.replace(/<\/s><s>/g, '');
            setsummary(cleanText);
            setoutput(true);
            console.log("summary is ",summary)
            setloader(false)
            settakequiz(true)
          })
          .catch((error) => {
            console.error('API Error:', error);
            setloader(false)
            settakequiz(true)
          });
          
      };
    
      return (
        <SafeAreaView style={{backgroundColor:colors.white, flex:1}}>
          {loader ? (
            <View style={{ alignItems: 'center', justifyContent:"center", flex:1}}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Please wait till we analyse your document...</Text>
            </View>
          ) : (
            <View>

            <View style={{ flexDirection: "row",
             marginBottom:Utils.ScreenHeight(3),
             marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                        <TouchableOpacity
                            onPress={() => { navigation.goBack() }}>
                            <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                        </TouchableOpacity>
                        <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Generate Summary</Text>
                    
                  
             </View>
            <Text style={{marginHorizontal:Utils.ScreenWidth(2), alignSelf:"center", fontSize:Utils.ScreenHeight(1.8)}}>Upload your Document</Text>
    
                       
                            
                    {
                        output&&
                        <View style={{marginTop:Utils.ScreenHeight(4)}}>
                    <View style={{
                        marginHorizontal:Utils.ScreenWidth(5),
                        paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(1), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1) }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>View Analysed Image</Text>
                                <Text>{image}</Text>
    
                            </View>
                            <TouchableOpacity
                            onPress={()=>{setVisible(true)}}
                            style={{ justifyContent: 'center' }}>
                                <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginHorizontal:Utils.ScreenWidth(5), marginTop:Utils.ScreenHeight(3)}}>
                            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>Here's a summary of the above document</Text>
                            <Text style={{marginTop:Utils.ScreenHeight(1)}} >
                                {summary}
                            </Text>
                        </View>
                            </View>
    
                    }
    
    <Modal
            visible={visible}
            presentationStyle={'pageSheet'}
            animationType={'slide'}
            onRequestClose={() => setVisible(!visible)}>
            <WebView 
            source={{ uri:newuri  }} 
            />
        </Modal>
        
    
        <TouchableOpacity 
                            onPress={()=>{uploadImage()}}
                            style={{
                                marginTop:Utils.ScreenHeight(4),
                                justifyContent:"center",alignSelf:'center',
                                height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.primary, borderRadius:12}}>
                                    <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(1.5), color:colors.white, fontWeight:500}}>Upload Image</Text>
        </TouchableOpacity>
        {/* {takequiz&&
          <TouchableOpacity 
          onPress={()=>{navigation.navigate("PlayQuiz",{summary:summary})}}
          style={{
              marginTop:Utils.ScreenHeight(4),
              justifyContent:"center",alignSelf:'center',
              height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.primary, borderRadius:12}}>
                  <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(1.5), color:colors.white, fontWeight:500}}>Take Quiz</Text>
            </TouchableOpacity>

        } */}
    
    
        </View>
          )}
          </SafeAreaView>

      );
    };
  
export default OCR