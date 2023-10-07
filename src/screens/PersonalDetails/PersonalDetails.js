import { View, Text, TouchableOpacity, Image, TextInput, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/core'
import axios from 'axios'
import DocumentPicker from 'react-native-document-picker'; 
import WebView from 'react-native-webview'
import styles from './styles'
import Helper from '../../Lib/Helper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const PersonalDetails = (props) => {
    const{route} = props

    useEffect(() => {
      console.log("from useEffect")
    
      
    }, [work,name,degree,skills])
    

    const navigation = useNavigation();
    const[summary,setsummary] = useState("");
    const[searchtext,setsearchtext] = useState("");
    const[image,setimage] = useState("");
    const[output,setoutput] = useState(false);
    const[visible,setVisible] = useState(false);
    const[newuri,setnewuri] = useState("")
    const[work,setwork] = useState([])
    const[name,setname] = useState("")
    const[degree,setdegree] = useState("")
    const[skills,setskills] = useState([])
    const[loader,setloader] = useState(false)
    const[takequiz,settakequiz] = useState(false)
    const[button,setbutton] = useState(true)
   
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
            
            var newdata = new FormData();
            newdata.append('resume_image', {
                'uri': result[0].uri,
                'type': result[0].type,
                'name': Date.now() + result[0].name,
            });
            console.log("formdata here " , newdata)
            var requestOptions = {
              method: 'POST',
              body: newdata,
              redirect: 'follow'
            };
            
            fetch("http://127.0.0.1:5000/api/resumeocr", requestOptions)
              .then(response => response.json())
              .then(result => {
                console.log(result)

                // Helper.setData('userdata',result)
                // Helper.setData('summary',summary)
                // const temp1= {
                //     'userdata':result
                // }
                // const temp2= {
                //     'summary':summary
                // }
                // AsyncStorage.setItem(
                //     '@MySuperStore:key',
                //     'I like to save it.',
                //   );
                //   AsyncStorage.setItem(
                //     'summary',
                //     JSON.stringify(summary),
                //   );
            setname(result.Name)
            setdegree(result.Degree)
            setskills(result.Skills)
            setwork(result.Company_Names)
            setbutton(false)
            settakequiz(true)
            // console.log(result)
            // console.log(result.Name)
            // console.log(result.Company_Names)
            // console.log(result.Skills)
            // console.log(result.Degree)
            })
              .catch(error => console.log('error', error));
            
          })
          .catch((error) => {
            console.error('API Error:', error);
            setloader(false)
            settakequiz(true)
          });
          
      };
    
      return (
        <SafeAreaView style={{backgroundColor:colors.white, flex:1, paddingHorizontal:Utils.ScreenWidth(4)}}>
             <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <TouchableOpacity activeOpacity={0.3}
                        style={styles.backViewCss}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image source={ImagesPath.signUp.backIcon} style={styles.backIconCss} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', width: '70%', alignItems: 'center' }}>
                        <Image style={[styles.logoIconCss]} source={ImagesPath.home.logo_primary} />
                    </View>
                </View>
                <Text style={styles.Enter_OTP}>One Tap Signup</Text>
                    <Text style={styles.verification}>Upload your Resume to complete one tap signup </Text>

          {loader ? (
            <View style={{ alignItems: 'center', justifyContent:"center", flex:1}}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Please wait till we analyse your resume...</Text>
            </View>
          ) : (
            <View>

            

    
                       
                            
                    {
                        output&&
                        <View style={{marginTop:Utils.ScreenHeight(4)}}>
                    <View style={{
                        marginHorizontal:Utils.ScreenWidth(5),
                        paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(1), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1) }}>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>View Your Resume</Text>
                                <Text>{image}</Text>
    
                            </View>
                            <TouchableOpacity
                            onPress={()=>{setVisible(true)}}
                            style={{ justifyContent: 'center' }}>
                                <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{marginHorizontal:Utils.ScreenWidth(5), marginTop:Utils.ScreenHeight(3)}}>
                            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>Here's a personalised intro of your profile based on your resume</Text>
                            <Text style={{marginTop:Utils.ScreenHeight(1)}} >
                                {summary}
                            </Text>
                        </View>
                        <View style={{marginTop:Utils.ScreenHeight(2), marginHorizontal:Utils.ScreenWidth(5)}}>
                            <View style={{flexDirection:"row", justifyContent:'flex-start'}}>
                            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>Name: </Text>
                            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:300}}>{name}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:'flex-start'}}>
                            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>Skills: </Text>
                            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:300, paddingRight:Utils.ScreenWidth(26)}}>{skills}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:'flex-start'}}>
                            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:500}}>Experinece: </Text>
                            <Text style={{fontSize:Utils.ScreenHeight(2), fontWeight:300,paddingRight:Utils.ScreenWidth(26)}}>{work}</Text>
                            </View>
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
        
    
        {button&&
        <>
        <TouchableOpacity 
                            onPress={()=>{uploadImage()}}
                            style={{
                                marginTop:Utils.ScreenHeight(4),
                                justifyContent:"center",alignSelf:'center',
                                height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.primary, borderRadius:12}}>
                                    <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(2), color:colors.white, fontWeight:500}}>Upload Resume</Text>
        </TouchableOpacity>
        <TouchableOpacity 
                            onPress={()=>{navigation.navigate("Register")}}
                            style={{
                                marginTop:Utils.ScreenHeight(4),
                                justifyContent:"center",alignSelf:'center',
                                height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.white, borderRadius:12, borderColor:colors.primary, borderWidth:1}}>
                                    <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(2), color:colors.primary, fontWeight:500}}>Skip</Text>
        </TouchableOpacity>
        </>
        }
        {takequiz&&
          <TouchableOpacity 
          onPress={()=>{navigation.navigate("ClientTabNavigator",{summary:summary,
        skills:skills,name:name, degree:degree, work:work
        })}}
          style={{
              marginTop:Utils.ScreenHeight(4),
              justifyContent:"center",alignSelf:'center',
              height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.primary, borderRadius:12}}>
                  <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(1.5), color:colors.white, fontWeight:500}}>Get Started</Text>
            </TouchableOpacity>

        }
    
    
        </View>
          )}
          </SafeAreaView>

      );
    };
  
export default PersonalDetails