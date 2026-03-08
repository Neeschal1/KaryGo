import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import { BorderButton } from '../../constants/system/buttons'
import React from 'react'

const Welcome = () => {
  return (
    <View className="flex flex-1 items-center justify-center p-screen">
      <BorderButton text="Get Started" navigatingScreen="SignupSplash" />
    </View>
  )
}

export default Welcome