import { View, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Utils, colors } from '../../contants';
const { height, width } = Dimensions.get('window'); 


const QuestionItem = ({ data , selectedOption }) => {
  return (
    <View style={{ width: Utils.ScreenWidth(100) }}>
      <Text style={{
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
        color: colors.black,
      }}>
        {'Ques:  ' + data.question}
      </Text>
      <View style={{ marginTop: 30 }}>
        <FlatList
          data={data.Options}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 60,
                  elevation: 3,
                  backgroundColor: data.marked == index + 1? colors.primary: '#fff',
                  marginTop: 10,
                  marginBottom: 20,
                  allignSelf: 'center',
                  marginLeft: 10,
                  allignItems: 'center',
                  paddingLeft: 15,
                  flexDirection: 'row',
                }} onPress={()=>{
                  selectedOption(index + 1);
                }}>
                <View
                 style={{
                  width: Utils.ScreenWidth(14),
                  height: 40,
                  borderRadius: 15,

                  justifyContent: 'center',
                  allignItems: 'center',
                  paddingTop:2,
                  justifyContent:'center',
                  


                }}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={{fontWeight:'800',color:'#000',paddingLeft:6,fontSize:18}}>
                  {index == 0 
                  ? 'A:' 
                  : index == 1 
                  ? 'B:' 
                  : index == 2 
                  ? 'C:' 
                  : 'D:'}
                  </Text>

                <Text style={{fontSize:16,marginLeft:Utils.ScreenWidth(4),color:data.marked == index+1? '#fff' : '#000', width: Utils.ScreenWidth(60)}}>
                  {item}
                </Text>
                </View>
                </View>

              </TouchableOpacity>
            );

          }}

        />
      </View>
    </View>
  );
};

export default QuestionItem;