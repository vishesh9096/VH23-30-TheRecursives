import { useEffect, useState } from "react";
import { ScrollView, View, Text, FlatList, TouchableOpacity, Image, Linking, SafeAreaView } from "react-native";
import { Utils, colors, fonts } from "../../contants";
import styles from "./styles";
import ImagesPath from "../../assests/ImagesPath";
import Helper from "../../Lib/Helper";
import Pdf from "react-native-pdf";
import { useNavigation } from "@react-navigation/native";


const LetterHeadScreen = (props) => {
    const { route} = props;

    const pdf = route.params.url
    console.log("final ", pdf)

  const navigation = useNavigation()
  const pdf_url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  const url = pdf_url
  const source = { uri: pdf, cache: true };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.grey2 }}>
            {/* {upComingListData.length > 0 ? ( */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: Utils.ScreenHeight(2) }}>
                {/* <TouchableOpacity activeOpacity={0.3}
                    style={styles.backViewCss}
                    onPress={() => {
                        navigation.navigate('OnboardingScreen8')
                    }}>
                    <Image source={ImagesPath.signUp.backIcon} style={styles.backIconCss} />
                </TouchableOpacity> */}
                <View style={{ alignSelf: 'center', width: '70%', alignItems: 'center' }}>
                    <Image style={[styles.logoIconCss]} source={ImagesPath.home.logo_primary} />
                </View>
            </View>
               
            <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log("error aya",error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
            <View style={{ margin: Utils.ScreenHeight(3), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {/* <TouchableOpacity activeOpacity={0.3} style={{width:Utils.ScreenWidth(39), height:Utils.ScreenHeight(5), justifyContent:'center', backgroundColor: colors.white, borderRadius: 10, borderWidth: 1, borderColor: colors.newGrey }}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: colors.grey }}>Reject</Text>
                </TouchableOpacity> */}
                <TouchableOpacity activeOpacity={0.3} style={{ width: Utils.ScreenWidth(79), height: Utils.ScreenHeight(6), justifyContent: 'center', backgroundColor: colors.primary, borderRadius: 10, borderColor: colors.newGrey }}
                    onPress={() => {
                        navigation.navigate('HomeScreen')
                    }}
                >
                    <Text style={{ textAlign: 'center', fontSize: 15, color: colors.white }}>Continue</Text>
                </TouchableOpacity>
            </View>
            {/* <CustomLoader loaderVisible={loaderVisible} /> */}
        </SafeAreaView>
    )
}

export default LetterHeadScreen;