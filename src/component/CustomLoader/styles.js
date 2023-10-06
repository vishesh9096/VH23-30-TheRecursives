import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../contants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090',
  },
  textCss: {
    marginTop: 20,
    fontSize: 18,
    color: colors.black,
  },
  ImgCss: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  Img: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textMargin: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    color: colors.primary,
  },
  lodarbackCss: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;