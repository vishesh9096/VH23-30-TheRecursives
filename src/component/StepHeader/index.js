import { Animated, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Utils } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';

const StepHeader = props => {
  const { step, left, icon, navigation } = props;
  return (
    <View style={{ height: Utils.ScreenWidth(39) }}>
      <View style={{ flexDirection: 'row' }}>
        {icon &&
          <TouchableOpacity activeOpacity={0.7}
            style={styles.backViewCss}
            onPress={() => { navigation() }}>
            <Image source={ImagesPath.signUp.backIcon} style={styles.backIconCss} />
          </TouchableOpacity>
        }
        <View style={{ flex: icon ? 0.8 : 1 }}>
          <Image style={[styles.logoIconCss, { right: icon ? 0 : Utils.ScreenWidth(2.5), }]} source={ImagesPath.home.logo_primary} />
        </View>
      </View>
      {/* <Text style={styles.OneHealth}>One Health Assist</Text> */}
      <Text style={styles.Step}>Step {step} of 9</Text>
      <View style={styles.borderW}>
        <View style={[styles.border2, { left: left }]} />
      </View>
    </View>
  );
};
export default StepHeader;

