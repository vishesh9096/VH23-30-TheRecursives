import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Dimensions, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

import { Utils, colors, fonts } from '../../contants';
import ImagesPath from '../../assests/ImagesPath';

const Courses = () => {
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    const url = 'https://www.udemy.com/api-2.0/discovery-units/newest/?apply_campaign_filter=False&context=topic&discovery_configuration_id=552&fft=skills_hub_top_new_beginner&fl=lbl&gl_tracking_id=nHYzOGD9S7y1dKEwojd_rA&is_content_rankable=False&label_id=7380&member_of=skills_hub_top_new_beginner&sos=pl&timestamp=1696403700.0&u=562231561&ranking_index=1&skip_price=true&source_page=topic_page&locale=en_US&currency=inr&navigation_locale=en_US'

    useEffect(() => {
        fetch(url, { method: 'GET' }).then(res => res.json()).then(data => { console.log("DATA>>>>>>", JSON.stringify(data.unit.items)); setEntries(data?.unit?.items) })
    }, [])

    useEffect(() => {
        console.log("ENtries>>>>>", entries);
    }, [entries])

    const sliderWidth = Dimensions.get('window').width;
    const itemWidth = Dimensions.get('window').width - 20;

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={{ uri: item?.image_480x270 }} style={{ width: '100%', height: 200 }} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };
    const [numCols, setColumnNo] = useState(2);
    const renderData = ({ item }) => {
        return (
            <TouchableOpacity style={{marginHorizontal:Utils.ScreenWidth(2)}} >
      <View style={{height:Utils.ScreenHeight(15),borderRadius:10, width:Utils.ScreenWidth(40), borderWidth:1, marginTop:Utils.ScreenHeight(2), borderColor:colors.grey2}}>
        <Image
        source={{uri:item.image_750x422}}
        style={{height:Utils.ScreenHeight(15), width:Utils.ScreenWidth(40), resizeMode:"contain"}}/>
      </View>
      <Text style={{marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(1.8), color: colors.black,width:Utils.ScreenWidth(40)}}>{item.title}</Text>
      </TouchableOpacity>

        );
    }

    return (
        <SafeAreaView style={{backgroundColor:colors.white}}>
            <View style={{marginHorizontal:Utils.ScreenWidth(4)}}>
    
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" , marginTop:Utils.ScreenHeight(4)}}>
                        <Text style={{  fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Suggested Courses For You</Text>

                    </View>
            <FlatList
            numColumns={2}
            data={entries} renderItem={renderData} />
            
            </View>
        </SafeAreaView>

    );
}

const styles = {
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        borderRadius: 20,
        marginVertical: 30
    },
    title: {
        fontSize: 14,
        color: colors.primary,
        marginVertical: 30,
        fontFamily: fonts.extraBold
    },
    cardContainer: {
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: 'grey'
    },
    card: {
        width: '95%',
        margin: '2.5%',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: 'white',
        marginTop: 20,
        minHeight: 200, // Set a minimum height
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
};

export default Courses;