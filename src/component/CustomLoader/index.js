import { Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Modal, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import { colors } from '../../contants';

const CustomLoader = props => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    startAnimation();
  });
  function startAnimation() {
    Animated.sequence(
      [
        Animated.timing(animation, {
          toValue: 1,
          duration: 1600,
          useNativeDriver: true,
        }),
        Animated.delay(300),
      ],
      { useNativeDriver: true },
    ).start(() => {
      animation.setValue(0);
      startAnimation();
    });
  }

  //interpolate
  const rotateInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ flex: 1, position: 'absolute' }}>
      {/* {rotateInterpolation} */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.loaderVisible}
        onRequestClose={() => {
          console.log('back press');
        }}>
        <View style={styles.container}>
          <View style={styles.lodarbackCss}>
            <ActivityIndicator  color={colors.primary} size={'small'} />
            {/* <Animated.Image
              style={[
                styles.ImgCss,
                {
                  tintColor: Colors.lightblack,
                  transform: [{rotate: rotateInterpolation}],
                },
              ]}
              source={require('../Assets/Images/loading.png')}
            /> */}
            <Text style={styles.textMargin}>Processing...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CustomLoader;

