import { React, useEffect } from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Utils, colors } from '../../contants';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment, { min } from 'moment';
import Navigation from '../../navigation/Navigation';

const Prepare = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const data = route?.params?.data;
  console.log("data||||||||||", data)



  // useEffect(() => {
  //   PushNotification.configure({
  //     onRegister: function (token) {
  //       console.log('TOKEN', token);
  //     },
  //     onNotification: function (notification) {
  //       console.log('NOTIFICATION', notification);
  //     },
  //     popInitialNotification: true,
  //     requestPermissions: false,
  //   });

  //   PushNotification.createChannel(
  //     {
  //       channelId: 'reminders',
  //       channelName: 'Task Reminder Notification',
  //       channelDescription: 'Reminder for any task',
  //     },
  //     () => { }
  //   );

  //   PushNotification.getScheduledLocalNotifications((rn) => {
  //     console.log('SN ---', rn);
  //   });
  // }, []);

  // const schduleNotification = () => {
  //   // const currentDate = new Date();  
  //   // console.log("HOURS>>>", currentDate.getHours());
  //   // const year = currentDate.getFullYear();
  //   // const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
  //   // const day = String(currentDate.getDate()).padStart(2, '0');

  //   // const formattedDate = `${year}-${month}-${day}`;

  //   // console.log("FORMATTED DATE>>>>", formattedDate);
  //   // const hours = currentDate.getHours()
  //   // const minutes = currentDate.getMinutes()
  //   // const seconds = currentDate.getSeconds()

  //   // const reminderDateTime = moment(formattedDate, 'YYYY-MM-DD').set({
  //   //   hour: hours,
  //   //   minute: minutes,
  //   //   second: seconds,
  //   // }).toDate()
  //   // console.log('reminderDateTime>>>>>', reminderDateTime);

  //   // const temp = new Date(reminderDateTime)

  //   PushNotification.localNotification({
  //     channelId: 'reminders',
  //     title: 'Noice',
  //     message: 'Your reminder has been set',
  //     // date: reminderDateTime,
  //   })
  // };

  return (
    <View style={{ flex: 1, }}>
      {
        data &&
        <View style={{ height: Utils.ScreenHeight(20), width: '90%', alignSelf: 'center', borderRadius: 10, borderWidth: 1, marginVertical: 20, padding: 20 }}>
          <Text style={{ color: 'black', fontSize: 16 }}>{data}</Text>
        </View>
      }

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Interview')} style={{ height: Utils.ScreenHeight(7), width: '80%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary, marginVertical: Utils.ScreenHeight(2), borderRadius: 5 }}>
          <Text style={{ color: colors.white, fontSize: 17, fontWeight: '800' }}>Start Interview</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Prepare;