import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker'; // For selecting documents (PDFs, images, etc.)
import axios from "axios"
import { Utils, colors } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';

// import IPFS from 'ipfs-http-client';

// const ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const Uploadtoipfs = () => {
  const [uploadedCID, setUploadedCID] = useState(null);
  const[name,setname ] = useState("")
  

  const pinFileToIPFS = async () => {
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

        fetch("https://legalbridge-backend.vercel.app/api/advocate/upload-legal-doc/", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    } catch (error) {
      console.log(error);
    }
}

  return (

        <TouchableOpacity 
        onPress={()=>{pinFileToIPFS()}}
        style={{
            justifyContent:"center",
            width:Utils.ScreenWidth(90),alignSelf:"center", borderWidth:1,borderColor:colors.grey, height:Utils.ScreenHeight(16), marginTop:Utils.ScreenHeight(3), borderColor:colors.primary, borderRadius:16, borderStyle:"dashed"}}>
                <Image source={ImagesPath.onafterprint.upload}
                style={{resizeMode:"contain", height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(10), tintColor:colors.primary, alignSelf:"center"}}
                />
                <Text style={{marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(2), color:colors.primary, textAlign:"center"}}>Upload Your Documents Here</Text>
        </TouchableOpacity>

      

      
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  uploadedContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  uploadedText: {
    fontSize: 18,
  },
  uploadedCID: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Uploadtoipfs;