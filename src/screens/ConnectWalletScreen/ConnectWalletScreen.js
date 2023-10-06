import { View, Text } from 'react-native'
import React from 'react'
import { ConnectWallet, darkTheme } from '@thirdweb-dev/react-native'
import { Utils } from '../../contants'

const ConnectWalletScreen = () => {
  return (
    <View style={{flex:1, justifyContent:"center"}}>
        <ConnectWallet theme={darkTheme}  />
    </View>
  )
}

export default ConnectWalletScreen