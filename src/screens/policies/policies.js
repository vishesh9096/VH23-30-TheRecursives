import { View, Text , SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
import { colors } from '../../contants'

const policies = () => {
  return (
    <SafeAreaView>
         <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
      <Text>policies</Text>
    </SafeAreaView>
  )
}

export default policies