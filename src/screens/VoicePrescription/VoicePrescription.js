import React, { useState, useEffect, useContext, useRef } from 'react'
import { SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions, Text, ScrollView, TextInput } from 'react-native'

import ImagesPath from '../../assests/ImagesPath';
import { AppButton } from '../../component';
import Voice from '@react-native-voice/voice';
import { Utils, colors } from '../../contants';
import ApiUrl from '../../Lib/ApiUrl';
import Helper from '../../Lib/Helper';
import CustomLoader from '../../component/CustomLoader';




const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff'
    },
    pdf: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
export default function VoicePrescription(props) {
        const { navigation, route } = props;

    const booking_id = route?.params?.booking_id
    const [result, setResult] = useState("");
    const [iconChange, setIconChange] = useState(false);
    const [prescriptions, setPrescriptions] = useState([]);
    const [initialText, setInitialText] = useState(true);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('')
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    console.log(prescriptions);

    const flatListRef = useRef(null); 
    console.log(route);

    const speechStartHandler = () => {
        console.log("Speech started");
    };

    const speechEndHandler = () => {
        setIconChange(false);
        
        console.log("Speech stopped");
    };

    const speechResultsHandler = e => {
        const text = e.value[0];
        console.log("Recognized Text:", text);
        setResult(text);
    };

    const startRecording = async () => {
        setIconChange(true);
        try {
            await Voice.start("en-US"); // Correct the language code format
        } catch (error) {
            console.log("Error starting recording:", error);
        }
    };

    const stopRecording = async () => {
        try {
            console.log("stopped")
            await Voice.stop();
            setIconChange(false);
        } catch (error) {
            console.log("Error stopping recording:", error);
        }
    };
    const addPrescription = () => {
        if (result.trim() !== "") {
            console.log("Adding Prescription:", result);
            setPrescriptions([...prescriptions, result]);
            setResult(""); // Clear the result after adding
            console.log("Updated Prescriptions:", prescriptions);
        }
    };
    const deletePrescription = index => {
        const updatedPrescriptions = prescriptions.filter((_, i) => i !== index);
        setPrescriptions(updatedPrescriptions);
    };

    const clear = () => {
        setResult("");
    };

    useEffect(() => {
        Voice.onSpeechStart = speechStartHandler;
        Voice.onSpeechEnd = speechEndHandler;
        Voice.onSpeechResults = speechResultsHandler;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const startEditing = (index) => {
        // Optionally, you could set a flag to indicate that the item is being edited.
        // This can help you focus the input and style it differently.
        // For simplicity, I'm just focusing the input directly here.
        if (textInputRefs[index]) {
            textInputRefs[index].focus();
        }
    };
    const textInputRefs = []; 

    const scrollToBottom = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    };
       const sendVoicePrescriptionApi = () => {

        // const valuesArray = prescriptions.map(item => `'${item}'`).join(', ');

        // const body = {
        //     'booking_id': booking_id,
        //     'voice_prescription': valuesArray
        // }
       

        showLoader(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "prescription_array": prescriptions
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://8344-103-134-7-130.ngrok-free.app/api/upload-prescription/", requestOptions)
          .then(response => response.json())
          .then(result =>{ console.log(result)
          setLoaderVisible(false)
          var formdata = new FormData();
          formdata.append("phoneNumber", "9324009992");
          formdata.append("uri", result.file_path);
          formdata.append("title", "Here is Your Prescription");

          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };

fetch("http://127.0.0.1:3000/upload", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
          navigation.navigate("LetterHeadScreen", {url:result.file_path})
          })
          .catch(error => {console.log('error', error)
          setLoaderVisible(false)
        });
        
    };

    return (
        <SafeAreaView style={styles.container1}>
            <View style={{ width: '100%', height: Utils.ScreenHeight(7), backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: colors.white, textAlign: 'center', fontSize: Utils.ScreenWidth(4.5), fontWeight: '600' }}>Voice Prescription</Text>
            </View>
            <ScrollView>
            <View style={{ flexDirection: 'column' }}>

                <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'center', position: 'relative', }}>

                    <TouchableOpacity style={{ marginTop: Utils.ScreenHeight(15), }}
                    >
                        {iconChange ?
                            <TouchableOpacity
                                onPress={() => {
                                    // stopRecognizing()
                                    setIconChange(false)
                                    stopRecording()
                                    //setEditable(false)
                                }}
                            >
                                <Image source={ImagesPath.home.micred} style={{ width: 110, height: 110, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => {
                                    setIconChange(true)
                                    setInitialText(false);
                                    startRecording()
                                    // setEditable(true)
                                }}
                            >
                                <Image source={ImagesPath.home.micPres} style={{ width: 110, height: 110, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        }

                    </TouchableOpacity>
                    {initialText ?
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ textAlign: 'center', color: colors.primary, fontSize: 13, fontWeight: '700' }}>Click here to Generate prescription using voice</Text>
                        </View>
                        :
                        <View style={{ marginVertical: Utils.ScreenHeight(3), height: Utils.ScreenHeight(10), flexDirection: 'row', alignItems: 'center', width: Utils.ScreenWidth(70) }}>
                            <TouchableOpacity
                                onPress={startRecording}
                                style={{ width: '35%' }}><Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '500', color: '#535353' }}>Add More</Text></TouchableOpacity>
                            <TouchableOpacity style={{ width: '30%', alignItems: 'center' }}><Image source={ImagesPath.home.pause} style={{ width: 35, height: 35, resizeMode: 'contain' }} /></TouchableOpacity>
                            <TouchableOpacity style={{ width: '30%', alignItems: 'center' }}><Text style={{ textAlign: 'center', fontSize: 15, fontWeight: '500', color: '#535353' }} onPress={addPrescription} >Save</Text></TouchableOpacity>
                        </View>
                    }
                    {/* {!initialText &&
                        <View>
                            <View style={{ height: Utils.ScreenHeight(3), borderBottomWidth: 1, borderColor: 'grey', alignItems: 'flex-start', width: Utils.ScreenWidth(100) }}>
                                <Text style={{ textAlign: 'center', color: 'grey', fontSize: 13, marginLeft: Utils.ScreenWidth(2) }}>Prescription</Text>
                            </View>
                            <View style={{ marginVertical: Utils.ScreenHeight(1) }}><Text style={{ textAlign: 'center', color: 'grey', fontSize: 13 }}>{results[0]}</Text></View>
                        </View>
                        // :
                        // <View><Text style={{ textAlign: 'center', color: colors.newGrey, fontSize: 13 }}>Did not hear that one...</Text></View>
                    } */}

                    {!initialText && (
                        <View>
                            <View style={{ height: Utils.ScreenHeight(3), borderBottomWidth: 1, borderColor: 'grey', alignItems: 'flex-start'}}>
                                <Text style={{ textAlign: 'center', color: 'grey', fontSize: 13, marginLeft: Utils.ScreenWidth(2) }}>Prescription</Text>
                            </View>

                            <View style={{ height: Utils.ScreenHeight(15) }}>
                                <ScrollView 
                                style={{marginTop:Utils.ScreenHeight(1)}}
                                onContentSizeChange={scrollToBottom} // Scroll to bottom when content size changes
                                ref={flatListRef} // Attach ref to ScrollView
                                >


                                    {prescriptions?.map((prescription, index) => (
                                        <View key={index} style={{ paddingHorizontal: Utils.ScreenWidth(2), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            {/* <View>
                                        <Text style={{ textAlign: 'left', color: 'grey', fontSize: 13 }}>{result}</Text>
                                    </View> */}
                                    <View style={{width:'80%'}}>

                                            <TextInput
                                                ref={(ref) => (textInputRefs[index] = ref)}
                                                value={prescription}
                                                multiline={true}
                                                onChangeText={text => {
                                                    const updatedPrescriptions = [...prescriptions];
                                                    updatedPrescriptions[index] = text;
                                                    setPrescriptions(updatedPrescriptions);
                                                }}
                                                style={{ textAlign: 'left', color: 'grey', fontSize: 13 }}
                                                // style={{
                                                    //     flex: 1,
                                                    //     height: "100%",
                                                    //     color: "#000",
                                                    // }}
                                                    
                                                    />
                                                    </View>
                                            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>

                                            {/* <TouchableOpacity onPress={() => startEditing(index)}>
                                                <Image source={ImagesPath.home.delete_icon} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                                            </TouchableOpacity> */}
                                            <TouchableOpacity
                                                onPress={() => deletePrescription(index)}>
                                                <Image source={ImagesPath.home.delete} style={{ width: 20, height: 20, resizeMode: 'contain',marginLeft:4 }} />
                                            </TouchableOpacity>
                                                    </View>
                                        </View>
                                    ))}
                                </ScrollView>

                            </View>

                        </View>
                    )}
                    <View style={{ flexDirection: 'column', alignSelf: 'center', marginVertical: 1 }}></View>
                    {
                        !initialText && (

                            <View style={{ width: '90%', height: Utils.ScreenHeight(5), justifyContent: 'flex-start', alignItems: 'flex-start', borderWidth: 1, borderColor: colors.primary, borderRadius: 10, padding: Utils.ScreenWidth(0.5) }}>
                                <TextInput
                                    value={result}
                                    placeholder='Press on the mic and say something'
                                    placeholderTextColor='grey'
                                    textAlignVertical='top'
                                    editable={true}
                                    style={{ color: colors.primary, fontSize: 13 }} 
                                    onChangeText={text=>setResult(text)}
                                    />
                                    
                            </View>
                        )
                    }



                    <View style={{ flexDirection: 'column', alignSelf: 'center', marginVertical: 30 }}>

                        {/* {editable &&
                            <View style={{ width: '60%', alignSelf: 'center' }}>
                                <AppButton
                                    title={'Add More'}
                                    buttonWidth={150}
                                    onPress={startRecognizing}
                                    bgColor={'#0079FF'}
                                />
                            </View>
                        } */}

                        {prescriptions.length > 0 &&
                            <View style={{ flexDirection: 'row', marginVertical: 30 }}>
                                {/* <AppButton
                            title={'Stop'}
                            buttonWidth={150}
                            onPress={stopRecognizing}
                            bgColor={'#B31312'}

                        /> */}

                                <AppButton
                                    title={'Send'}
                                    buttonWidth={300}
                                    onPress={
                                        sendVoicePrescriptionApi

                                        // console.log('VoicePrescription',pdfUrl);
                                        // navigation.navigate('ViewPdf',{pdf_url:pdfUrl})
                                    }
                                        
                                    
                                />

                            </View>
                        }

                        {/* {showPreview &&
                            <AppButton
                                title={'Preview'}
                                buttonWidth={300}
                                onPress={goToViewPrescription}
                            />
                        } */}

                        {/* {editable &&
                            <AppButton
                                title={'Send Prescription'}
                                buttonWidth={300}
                                onPress={sendVoicePrescriptionApi}
                            />
                        } */}

                    </View>
                </View>
            </View>
            <CustomLoader loaderVisible={loaderVisible} />
            <View style={{height:Utils.ScreenHeight(30)}}></View>
            </ScrollView>
        </SafeAreaView>

    )
}