// import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { auth,db } from './firebase';
// import { signOut } from 'firebase/auth';
// import { GiftedChat } from 'react-native-gifted-chat';
// import { addDoc, collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';

// const ChatFeature = ({ navigation }) => {
//     const [messages, setMessages] = useState([]);
//     const signOutNow = () => {
//         signOut(auth).then(() => {
//             // Sign-out successful.
//             navigation.replace('Login');
//         }).catch((error) => {
//             // An error happened.
//         });
//     }
//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerLeft: () => (
//                 <View style={{ marginLeft: 20 }}>
                    
//                 </View>
//             ),
//             headerRight: () => (
//                 <TouchableOpacity style={{
//                     marginRight: 10
//                 }}
//                     onPress={signOutNow}
//                 >
//                     <Text>logout</Text>
//                 </TouchableOpacity>
//             )
//         })
//         const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
// const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
//     snapshot.docs.map(doc => ({
//         _id: doc.data()._id,
//         createdAt: doc.data().createdAt.toDate(),
//         text: doc.data().text,
//         user: doc.data().user,
//     }))
// ));

// return () => {
//   unsubscribe();
// };
//     }, [navigation]);

//     useEffect(() => {
//         setMessages([
//             {
//                 _id: 1,
//                 text: 'Hello developer',
//                 createdAt: new Date(),
//                 user: {
//                     _id: 2,
//                     name: 'React Native',
//                     avatar: 'https://placeimg.com/140/140/any',
//                 },
//             },
//         ])
//     }, []);
//     const onSend = useCallback((messages = []) => {
//       setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//       const { _id, createdAt, text, user,} = messages[0]
  
//       addDoc(collection(db, 'chats'), { _id, createdAt,  text, user });
//   }, []);
//     return (
//         <GiftedChat
//             messages={messages}
//             showAvatarForEveryMessage={true}
//             onSend={messages => onSend(messages)}
//             user={{
//                 _id: auth?.currentUser?.email,
//                 name: auth?.currentUser?.displayName,
//                 avatar: auth?.currentUser?.photoURL
//             }}
//         />
//     );
// }

// export default ChatFeature;