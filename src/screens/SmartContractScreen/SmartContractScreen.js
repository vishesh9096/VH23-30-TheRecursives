import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Web3Button, useAddress, useContract, useContractWrite,useMetaMaskWallet,useMetamask } from '@thirdweb-dev/react-native';
import { Utils } from '../../contants';

const SmartContract = () => {
  const { contract } = useContract("0x87e406BEe0a0D30D0FA9D535e0841666FC404652");
  const { mutateAsync: addLegalDocument, isLoading } = useContractWrite(contract, "addLegalDocument")
  const call = async () => {
    try {
      const data = await addLegalDocument({ args: ["839021jkfwhe", "vishesh"] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=>{call()}}>
      <Text>SmartContractt</Text>
      </TouchableOpacity>
      {/* <Web3Button
  contractAddress="0x87e406BEe0a0D30D0FA9D535e0841666FC404652"
  action={(contract) => contract.call("addLegalDocument", "47398","vishesh")}
  className={styles.button}
  >
  StylingButtonn
</Web3Button> */}
    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor:"aqua",
        height:Utils.ScreenHeight(8),
        width:"100%",
        justifyContent:"center"
    },

});



export default SmartContract