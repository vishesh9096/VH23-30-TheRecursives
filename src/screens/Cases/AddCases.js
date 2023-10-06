import { View, Text, StatusBar, Image, Picker } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Utils, colors } from '../../contants'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'
import { useContract, useContractWrite } from "@thirdweb-dev/react-native";

const AddCases = () => {
  const navigation = useNavigation();
  const[Select, setSelect] = useState('');
  const[caseDesc, setCaseDesc] = useState('');
  const[filingDate, setFilingDate] = useState('');
  const[hearingDate, setHearingDate] = useState('');
  const[deadline, setDeadline] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const options = ['Criminal', 'Property & Family', 'Divorce'];

  const handleSubmit = () => {
    
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3ODk5NDUzLCJpYXQiOjE2OTYwODUwNTMsImp0aSI6IjNlNzQ0YWU2NDRjZTQ0Mjk5Y2JjMjVlMTgyYzliZjgxIiwidXNlcl9pZCI6MTV9.kUP5DalWACAS7pRalO2fMmnbNMRWaKi73oLmooOeU1c");

var formdata = new FormData();
formdata.append("case_type_id", "1");
formdata.append("case_description","Divorce Case");
formdata.append("hearing_date", "2023-10-23");
formdata.append("filling_date", "2023-10-29");
formdata.append("deadline_date", "2023-11-20");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://legalbridge-backend.vercel.app/api/advocate/case-operation/", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result)
  navigation.navigate("TabNavigator")
  })
  .catch(error => console.log('error', error));
  };


  const { contract } = useContract("0xc229671C9aD9451b6412eF0858A3F32D61E7E2C6");
const { mutateAsync: createCase, isLoading } = useContractWrite(contract, "createCase");

// Sample data for the parameters
const _advocate = "0x87e406BEe0a0D30D0FA9D535e0841666FC404652";
const _client = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
const _caseType = 1; // Replace with the appropriate case type ID
const _caseDescription = "Sample case description";
const _fillingDate = 23; // Current timestamp
const _hearingDate = 23; // Tomorrow's timestamp
const _deadlineDate = 23; // Two days from now timestamp
const _status = 1; // Should match one of the valid case statuses in your contract

const call = async () => {
try {
const data = await createCase({
args: [_advocate, _client, _caseType, _caseDescription, _fillingDate, _hearingDate, _deadlineDate, _status],
});
console.info("Contract call success", data);
} catch (err) {
console.error("Contract call failure", err);
}
handleSubmit()
}

  return (
    <SafeAreaView style = {{backgroundColor: colors.white, height: '100%'}}>
         <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />


    <View>
      <TouchableOpacity activeOpacity={0.3}
                        style={{
                            marginLeft: Utils.ScreenWidth(3),
                            alignItems: 'center',
                            elevation: 7,
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            justifyContent: 'center',
                            top: Utils.ScreenHeight(3),
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
                    <View style = {{marginTop: Utils.ScreenHeight(4), marginHorizontal: Utils.ScreenWidth(4)}}>
                    <Text style = {{fontWeight: 800, fontSize: 24, color: colors.black, alignItems: 'center', justifyContent: 'center'}}>Add Cases</Text>
             </View>
        </View>

     <ScrollView
        style={{ flex: 1, backgroundColor: colors.white, marginHorizontal: Utils.ScreenWidth(4) }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>

    

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(3), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Case Type</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={Select}
                        onChange={(text) => setSelect(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Case Description</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={caseDesc}
                        onChange={(text) => setCaseDesc(text)}
                        style={{ height: Utils.ScreenHeight(12), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Filing Date</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={filingDate}
                        onChange={(text) => setFilingDate(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Hearing Date</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={hearingDate}
                        onChange={(text) => setHearingDate(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Deadline</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={deadline}
                        onChange={(text) => setDeadline(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(1), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Relevant Documents</Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={Select}
                        onChange={(text) => setSelect(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Select" />
            </View>
 
            <View style = {{ alignItems: 'center', marginTop: Utils.ScreenHeight(3), marginBottom: Utils.ScreenHeight(2)}}>
            <TouchableOpacity style = {{ backgroundColor: colors.primary,  
                                         borderRadius: 8,
                                         alignItems: 'center',
                                         marginHorizontal: Utils.ScreenHeight(8), 
                                         justifyContent: 'center',
                                         height: Utils.ScreenHeight(7), 
                                         width: '100%'}}
                                         onPress  = {() => {call()}}>
               <Text style = {{ color: colors.white, fontWeight: 400, fontSize: 16,  marginHorizontal: Utils.ScreenHeight(6),}}>
                Continue
               </Text>
            </TouchableOpacity>
          </View>

     </ScrollView>
    </SafeAreaView>
  )
}

export default AddCases