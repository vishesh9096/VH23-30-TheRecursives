
import { useNavigation } from '@react-navigation/native'
import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'

// import RNRasa from 'react-native-rasa';

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const navigation = useNavigation()
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Vishesh",
  "message": messages[0]?.text
});
console.log("raw ",raw)

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://8124-103-246-224-137.ngrok-free.app/webhooks/rest/webhook/", requestOptions)
  .then(response => response.json())
  .then(result =>{ 
    
    console.log(result[0]?.text)
    const msg ={
      _id: Math.random(10000),
      text: result[0]?.text,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://cdn-icons-png.flaticon.com/512/8943/8943377.png',
      },
    }
    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, msg),
    // )
    // const temp = [...messages]
    // temp.push(msg)
    // setMessages(temp)
    // GiftedChat.append(messages, msg)
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, msg),
    )
  }
   
    )
  .catch(error => console.log('error', error));

  
  }, [])
  return (
    
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      alignTop={true}
      messagesContainerStyle={{backgroundColor:'white'}}
    />


  )
}

export default Chatbot