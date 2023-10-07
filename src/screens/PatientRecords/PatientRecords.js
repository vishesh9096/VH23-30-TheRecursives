import { View, Text, Image, TouchableOpacity, ActivityIndicator, Clipboard, SafeAreaView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./styles";
import { Utils, colors } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import Uploadtoipfs from '../Uploadtoipfs/Uploadtoipfs';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import WebView from 'react-native-webview';

const PatientRecords = () => {
    const navigation = useNavigation();
    const fetchdata =()=>{
        setloader(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3ODk5NDUzLCJpYXQiOjE2OTYwODUwNTMsImp0aSI6IjNlNzQ0YWU2NDRjZTQ0Mjk5Y2JjMjVlMTgyYzliZjgxIiwidXNlcl9pZCI6MTV9.kUP5DalWACAS7pRalO2fMmnbNMRWaKi73oLmooOeU1c");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://8344-103-134-7-130.ngrok-free.app/api/get-doc/?id=18", requestOptions)
          .then(response => response.json())
          .then(result =>{ console.log(result.data,"result")
            setdata(result?.data)
            setloader(false)
        })
          .catch(error =>{ console.log('error', error)
          setloader(false)
        });
    }
    useEffect(() => {
      fetchdata()
    }, [temp])

    useEffect(() => {
      console.log("data from useEffect")
    }, [data])

    const docs = ({ item }) => {
        const base = "https://ipfs.io/ipfs/"
        console.log(base+item.hash_value)
         console.log(moment(item.updated_at).format('DD MMM, y'))
        return (<View style={{flexDirection:"row", 
        justifyContent:"flex-start",marginTop:Utils.ScreenHeight(1),
        alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
          <View style={{width:"20%", marginLeft:Utils.ScreenWidth(3)}}>
          <Image source={{uri:base+item?.hash_value}} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
          </View>
            <View style={{width:"50%"}}>
            <Text style={{fontWeight:600,fontSize:15}}>{item.file_name}</Text>
            <Text style={{fontWeight:400, color:colors.grey, fontSize:12}}>{moment(item.updated_at).format('DD MMM, y')}</Text>
            </View>
            
            <TouchableOpacity 
            onPress={()=>{
                
                setimgurl(base+item?.hash_value)
                Clipboard.setString(base+item?.hash_value)
            setVisible(!visible)
            }}
            style={{backgroundColor:colors.secondary, borderRadius:12}}>
              <Text style={{paddingVertical:Utils.ScreenHeight(0.8),
                fontWeight:600,
                paddingHorizontal:Utils.ScreenWidth(5), color:colors.primary}}>View</Text>
            </TouchableOpacity>
        </View>
            


        )
    }
    
    
    
    const [doc,setdoc] = useState(false)
    const [temp,settemp] = useState(false)
    const [loader,setloader] = useState(false)
    const [data,setdata] = useState([]) 

    const [uploadedCID, setUploadedCID] = useState(null);
    const [visible, setVisible] = useState(false);
  const[name,setname ] = useState("")
  const[imgurl,setimgurl ] = useState("")
  

  const pinFileToIPFS = async () => {
    setloader(true)
    const formData = new FormData();
    const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log("file hai " ,result[0].uri)
    //   const file = {
    //     uri: result.uri,
    //     name: result.name,
    //     type: result.type,
    //   };

    // const src = "path/to/file.png";
    
    // const file = fs.createReadStream(src)
    // formData.append('file', result)
    
    formData.append('file', {
        'uri': result[0].uri,
        'type': result[0].type,
        'name': Date.now() + result[0].name,
    });
    setname(result[0].name)

    



    try{
        console.log(formData," lkhfs")
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2MjRhN2M0Zi1iMmY3LTRmZDgtYTM5My0yM2M5MzA3ZjQ1MDQiLCJlbWFpbCI6Im1vaGVldHNoZW5kYXJrYXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImZjY2QxOTNkZWU5M2NmMTIyNmQ4Iiwic2NvcGVkS2V5U2VjcmV0IjoiNjAwYjliZTdhNWUxNjU2YWIyMjJmYzMyMWU1YjEwZmVmYWI5NThiMGZjYTkxM2I5YmQ1M2ZiMWEwODllMmY5YiIsImlhdCI6MTY5NDQyNTgxNX0.avTCrsqQLcpLCELt8EsB_yvt76MlqowtjXW8SIhnnYs"}`
        }
      });
      console.log(res.data.IpfsHash);
      var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3ODk5NDUzLCJpYXQiOjE2OTYwODUwNTMsImp0aSI6IjNlNzQ0YWU2NDRjZTQ0Mjk5Y2JjMjVlMTgyYzliZjgxIiwidXNlcl9pZCI6MTV9.kUP5DalWACAS7pRalO2fMmnbNMRWaKi73oLmooOeU1c");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "file_name": result[0]?.name,
          "hash_value": res?.data?.IpfsHash
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://8344-103-134-7-130.ngrok-free.app/api/upload-doc/?id=18", requestOptions)
          .then(response => response.json())
          .then(result =>{ console.log(result)
            settemp(!temp)
        }).then(()=>{fetchdata()
            setloader(false)
        })
          .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
      setloader(false)
    }
    setloader(false)
    fetchdata()
    settemp(!temp)
}
  return (
    <>
     {loader ? (
            <SafeAreaView style={{ alignItems: 'center', justifyContent:"center", flex:1}}>
              <ActivityIndicator size="large" color={colors.primary} />
              <Text>Please wait </Text>
            </SafeAreaView>
          ) : (
    
    <View style={{paddingHorizontal:Utils.ScreenWidth(4),paddingTop:Utils.ScreenHeight(5),  flex:1,backgroundColor:colors.white}}>
       
      
      <Text style={styles.heading}>Recently Uploaded Medical Documents by Vishesh</Text>
      <View>
        <View>
            <FlatList
            data={data}
            renderItem={docs}
            />

        
            
        </View>
      </View>
      <Modal
        visible={visible}
        presentationStyle={'pageSheet'}
        animationType={'slide'}
        onRequestClose={() => setVisible(!visible)}>
        <WebView 
        source={{uri:imgurl}} 
        />
    </Modal>
    </View>
    
          )}
    </>
      
  )
}



export default PatientRecords