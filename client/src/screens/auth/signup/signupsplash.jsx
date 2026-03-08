import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AuthTextCustomInput } from '../../../components/system/textInput'
import { BorderButton } from '@/src/components/system/buttons';

const SignupSplash = () => {
  const [email, setEmail] = useState("");
  return (
    <View className="flex-1 items-center justify-center p-4 bg-white">
      <AuthTextCustomInput
        placeholderText="Enter your Email"
        valueText={email}
        setValueText={setEmail}
      />
      <BorderButton text="Next" navigatingScreen="#" />
    </View>
  )
}

export default SignupSplash