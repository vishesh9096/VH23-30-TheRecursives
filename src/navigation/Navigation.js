import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import SignupLawyer from '../screens/SignupLawyer/SignupLawyer';
import Verifyotp from '../screens/Verifyotp/Verifyotp';
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
import LawyerDetails from '../screens/LawyerDetails/LawyerDetails';
import BookAppoinment from '../screens/BookAppoinment/BookAppoinment';
import OCR from '../screens/OCR/OCR';
import ConnectWalletScreen from '../screens/ConnectWalletScreen/ConnectWalletScreen';
import PersonalDetails from '../screens/PersonalDetails/PersonalDetails';
import PersonalDetails2 from '../screens/PersonalDetails2/PersonalDetails2';
import PlayQuiz from '../screens/Quizes/PlayQuiz';
import Jobs from '../screens/Jobs/Jobs';
import Courses from '../screens/Courses/Courses';
import Interview from '../screens/Interview/Interview';
import LindedinJobs from '../screens/LindedinJobs/LindedinJobs';
import VerifyotpDoctor from '../screens/VerifyotpDoctor/VerifyotpDoctor';
import DoctorPersonalDetails from '../screens/DoctorPersonalDetails/DoctorPersonalDetails';
import DoctorProfessionalDetails from '../screens/DoctorProfessionalDetails/DoctorProfessionalDetails';
import LetterHeadScreen from '../screens/LetterHeadScreen/LetterHeadScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginDoctor from '../screens/LoginLawyer/LoginLawyer';







const Stack = createNativeStackNavigator();

function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="DoctorPersonalDetails"
                screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Splash" component={Splash} />
                 <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="LoginDoctor" component={LoginDoctor} />
                <Stack.Screen name="SignupLawyer" component={SignupLawyer} />
                <Stack.Screen name="Verifyotp" component={Verifyotp} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="ClientProfile" component={ClientProfile} />
                <Stack.Screen name="VideoCall" component={VideoCall} />
                <Stack.Screen name="Uploadtoipfs" component={Uploadtoipfs} />
                <Stack.Screen name="DoctorPersonalDetails" component={DoctorPersonalDetails} />
                <Stack.Screen name="DoctorProfessionalDetails" component={DoctorProfessionalDetails} />








                
                <Stack.Screen
                name="Settings" component={Settings} />

                

                {/* Client screens */}
                <Stack.Screen name="Loginclient" component={Loginclient} />
                <Stack.Screen name="LetterHeadScreen" component={LetterHeadScreen} />
                <Stack.Screen name="ConnectWalletScreen" component={ConnectWalletScreen} />
                <Stack.Screen name="Signupclient" component={Signupclient} />
                <Stack.Screen name="Verifyotpclient" component={Verifyotpclient} />
                <Stack.Screen name="VerifyotpDoctor" component={VerifyotpDoctor} />
                <Stack.Screen name="LawyerDetails" component={LawyerDetails} />
                <Stack.Screen name="BookAppoinment" component={BookAppoinment} />
                <Stack.Screen name="OCR" component={OCR} />
                <Stack.Screen name="PersonalDetails" component={PersonalDetails} />

                <Stack.Screen name="PersonalDetails2" component={PersonalDetails2} />
                <Stack.Screen name="PlayQuiz" component={PlayQuiz} />
                <Stack.Screen name="Jobs" component={Jobs} />
                <Stack.Screen name="LindedinJobs" component={LindedinJobs} />
                <Stack.Screen name="Courses" component={Courses} />
                <Stack.Screen name="Interview" component={Interview} />
                
                <Stack.Screen 
                options={{ gestureEnabled: false }}
                name="ClientTabNavigator" component={ClientTabNavigator} />
                

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;