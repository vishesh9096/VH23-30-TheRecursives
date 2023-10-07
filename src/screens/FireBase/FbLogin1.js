// import React, { useState } from 'react';
// import { View, StyleSheet,Button,TextInput } from 'react-native'

// import { auth } from '../ChatFeature/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';


// const FbLogin1 = ({navigation}) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const openRegisterScreen = () => {
//       navigation.navigate('RegisterL');
//     };

//     const signin = () => {
//       signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           navigation.navigate('ChatFeature');
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           alert(errorMessage);
//         });
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 placeholder='Enter your email'
//                 label='Email'
//                 leftIcon={{ type: 'material', name: 'email' }}
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//             />
//             <TextInput
//                 placeholder='Enter your password'
//                 label='Password'
//                 leftIcon={{ type: 'material', name: 'lock' }}
//                 value={password}
//                 onChangeText={text => setPassword(text)}
//                 secureTextEntry
//             />
//             <Button title="sign in" style={styles.button} onPress={signin} />
//             <Button title="register" style={styles.button} onPress={openRegisterScreen} />
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 10,
//         marginTop: 100,
//     },
//     button: {
//         width: 370,
//         marginTop: 10
//     }
// });

// export default FbLogin1;