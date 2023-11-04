import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import SignupLawyer from '../screens/SignupLawyer/SignupLawyer';

import Notification from '../screens/Notification/Notification';
import Settings from '../screens/Settings/Settings';
import VideoCall from '../screens/VideoCall/VideoCall';
import IntroScreen from '../screens/IntroScreen/IntroScreen';
import ClientProfile from '../screens/Clients/ClientProfile';
import Signupclient from '../screens/Signupclient/Signupclient';
import Loginclient from '../screens/Loginclient/Loginclient';
import Verifyotpclient from '../screens/Verifyotpclient/Verifyotpclient';
import ClientTabNavigator from './ClientTabNavigator';
import Uploadtoipfs from '../screens/Uploadtoipfs/Uploadtoipfs';

import OCR from '../screens/OCR/OCR';
import ConnectWalletScreen from '../screens/ConnectWalletScreen/ConnectWalletScreen';
import PersonalDetails from '../screens/PersonalDetails/PersonalDetails';
import PersonalDetails2 from '../screens/PersonalDetails2/PersonalDetails2';
import PlayQuiz from '../screens/Quizes/PlayQuiz';
import Jobs from '../screens/Jobs/Jobs';
import Courses from '../screens/Courses/Courses';
import Interview from '../screens/Interview/Interview';
import LindedinJobs from '../screens/LindedinJobs/LindedinJobs';
import ChatFeature from '../screens/ChatFeature/ChatFeature';
import FbLogin1 from '../screens/FireBase/FbLogin1';
import RegisterL from '../screens/FireBase/RegisterL';
import policies from '../screens/policies/policies';

import VerifyotpDoctor from '../screens/VerifyotpDoctor/VerifyotpDoctor';
import DoctorPersonalDetails from '../screens/DoctorPersonalDetails/DoctorPersonalDetails';
import DoctorProfessionalDetails from '../screens/DoctorProfessionalDetails/DoctorProfessionalDetails';
import LetterHeadScreen from '../screens/LetterHeadScreen/LetterHeadScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

import VoicePrescription from '../screens/VoicePrescription/VoicePrescription';
import PatientsList from '../screens/PatientsList/PatientsList';
import LoginDoctor from '../screens/LoginLawyer/LoginDoctor';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import SearchMedicines from '../screens/SearchMedicines/SearchMedicines';
import MedicineDetails from '../screens/MedicineDetails/MedicineDetails';
import ClientSearchScreen from '../screens/ClientSearchScreen/ClientSearchScreen';
import LawyerDetails from '../screens/LawyerDetails/LawyerDetails';
import UploadDocuments from '../screens/UploadDocuments/UploadDocuments';
import ConnectDevice from '../screens/ConnectDevice/ConnectDevice';
import Steps from '../screens/Steps/Steps';
import Calories from '../screens/Calories/Calories';
import HeartRate from '../screens/HeartRate/HeartRate';
import Actvity from '../screens/Actvity/Actvity';
import PatientRecords from '../screens/PatientRecords/PatientRecords';
import ReportsOCR from '../screens/ReportsOCR/ReportsOCR';
import HealthRecords from '../screens/HealthRecords/HealthRecords';







const Stack = createNativeStackNavigator();

function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Splash" component={Splash} />
                 <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="LoginDoctor" component={LoginDoctor} />
                <Stack.Screen name="SignupLawyer" component={SignupLawyer} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="ClientProfile" component={ClientProfile} />
                <Stack.Screen name="policies" component={policies} />
                <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
                <Stack.Screen name="SearchMedicines" component={SearchMedicines} />
                <Stack.Screen name="MedicineDetails" component={MedicineDetails} />
                <Stack.Screen name="ClientSearchScreen" component={ClientSearchScreen} />
                <Stack.Screen name="LawyerDetails" component={LawyerDetails} />
                <Stack.Screen name="PatientRecords" component={PatientRecords} />
               

                <Stack.Screen name="VideoCall" component={VideoCall} />
                <Stack.Screen name="Uploadtoipfs" component={Uploadtoipfs} />
                <Stack.Screen name="DoctorPersonalDetails" component={DoctorPersonalDetails} />
                <Stack.Screen name="DoctorProfessionalDetails" component={DoctorProfessionalDetails} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="LetterHeadScreen" component={LetterHeadScreen} />
                <Stack.Screen name="VerifyotpDoctor" component={VerifyotpDoctor} />
                <Stack.Screen name="VoicePrescription" component={VoicePrescription} />
                <Stack.Screen name="PatientsList" component={PatientsList} />
                <Stack.Screen name="ReportsOCR" component={ReportsOCR} />
                {/* <Stack.Screen name="UploadDocuments" component={UploadDocuments} /> */}






                

                

                {/* Client screens */}
                <Stack.Screen name="Loginclient" component={Loginclient} />
                <Stack.Screen name="ConnectDevice" component={ConnectDevice} />
                <Stack.Screen name="ConnectWalletScreen" component={ConnectWalletScreen} />
                <Stack.Screen name="Signupclient" component={Signupclient} />
                <Stack.Screen name="Verifyotpclient" component={Verifyotpclient} />
                <Stack.Screen name="OCR" component={OCR} />
                <Stack.Screen name="PersonalDetails" component={PersonalDetails} />

                <Stack.Screen name="PersonalDetails2" component={PersonalDetails2} />
                <Stack.Screen name="PlayQuiz" component={PlayQuiz} />
                <Stack.Screen name="Jobs" component={Jobs} />
                <Stack.Screen name="LindedinJobs" component={LindedinJobs} />
                <Stack.Screen name="Courses" component={Courses} />
                <Stack.Screen name="Interview" component={Interview} />

                <Stack.Screen name="Steps" component={Steps} />
                <Stack.Screen name="Calories" component={Calories} />
                <Stack.Screen name="HeartRate" component={HeartRate} />
                <Stack.Screen name="Actvity" component={Actvity} />
                {/* <Stack.Screen name="ChatFeature" component={ChatFeature} />
                <Stack.Screen name="FbLogin1" component={FbLogin1} />
                <Stack.Screen name="RegisterL" component={RegisterL} /> */}
                <Stack.Screen 
                options={{ gestureEnabled: false }}
                name="ClientTabNavigator" component={ClientTabNavigator} />
                <Stack.Screen name="HealthRecords" component={HealthRecords} />

              
                










                
                

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;