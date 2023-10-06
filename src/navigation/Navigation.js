import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import LoginLawyer from '../screens/LoginLawyer/LoginLawyer';
import SignupLawyer from '../screens/SignupLawyer/SignupLawyer';
import Verifyotp from '../screens/Verifyotp/Verifyotp';
import TabNavigator from './TabNavigator';
import Notification from '../screens/Notification/Notification';
import Settings from '../screens/Settings/Settings';
import Register from '../screens/Register/Register';
import VideoCall from '../screens/VideoCall/VideoCall';
import SelectRole from '../screens/SelectRole/SelectRole';
import AddSchedule from '../screens/AddSchedule/AddSchedule';
import IntroScreen from '../screens/IntroScreen/IntroScreen';
import ClientProfile from '../screens/Clients/ClientProfile';
import AddClient1 from '../screens/AddClient/AddClient1';
import CheckStatus from '../screens/CheckStatus/CheckStatus';
import Signupclient from '../screens/Signupclient/Signupclient';
import Loginclient from '../screens/Loginclient/Loginclient';
import Verifyotpclient from '../screens/Verifyotpclient/Verifyotpclient';
import ClientTabNavigator from './ClientTabNavigator';
import Cases from '../screens/Cases/Cases';
import AddCases from '../screens/Cases/AddCases';
import Uploadtoipfs from '../screens/Uploadtoipfs/Uploadtoipfs';
import caseresults from '../screens/caseresults/caseresults';
import test from '../screens/test/test';
import LawyerDetails from '../screens/LawyerDetails/LawyerDetails';
import BookAppoinment from '../screens/BookAppoinment/BookAppoinment';
import OCR from '../screens/OCR/OCR';
import SmartContractScreen from '../screens/SmartContractScreen/SmartContractScreen';
import ConnectWalletScreen from '../screens/ConnectWalletScreen/ConnectWalletScreen';
import PersonalDetails from '../screens/PersonalDetails/PersonalDetails';
import PersonalDetails2 from '../screens/PersonalDetails2/PersonalDetails2';
import community from '../screens/community/community';
import PlayQuiz from '../screens/Quizes/PlayQuiz';
import Jobs from '../screens/Jobs/Jobs';
import Courses from '../screens/Courses/Courses';
import StartInterview from '../screens/StartInterview/StartInterview';
import Interview from '../screens/Interview/Interview';
import LindedinJobs from '../screens/LindedinJobs/LindedinJobs';







const Stack = createNativeStackNavigator();

function Navigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}>
                 <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="LoginLawyer" component={LoginLawyer} />
                <Stack.Screen name="SignupLawyer" component={SignupLawyer} />
                <Stack.Screen name="Verifyotp" component={Verifyotp} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="ClientProfile" component={ClientProfile} />

                <Stack.Screen name="AddSchedule" component={AddSchedule} />
                <Stack.Screen name="Register" component = {Register}/>

                <Stack.Screen name="VideoCall" component={VideoCall} />
                <Stack.Screen name="StartInterview" component={StartInterview} />


                <Stack.Screen name="Uploadtoipfs" component={Uploadtoipfs} />
                <Stack.Screen name="caseresults" component={caseresults} />
                <Stack.Screen name="SmartContractScreen" component={SmartContractScreen} />
                <Stack.Screen name="test" component={test} />
                <Stack.Screen
                name="Settings" component={Settings} />

                

                {/* Client screens */}
                <Stack.Screen name="Loginclient" component={Loginclient} />
                <Stack.Screen name="ConnectWalletScreen" component={ConnectWalletScreen} />
                <Stack.Screen name="Signupclient" component={Signupclient} />
                <Stack.Screen name="Verifyotpclient" component={Verifyotpclient} />
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