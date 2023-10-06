import { Animated, TouchableOpacity } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Utils } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';

const AppHeader = props => {
  const { navigation, title } = props;
  return (
    <View style={styles.headerViewCss}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.menuIconViewCss}
        onPress={() => { navigation.goBack() }}>
        <Image source={ImagesPath.signUp.backIcon} style={styles.backIconCss} />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.titleCss}>{title}</Text>
      </View>
    </View>
  );
};
export default AppHeader;

