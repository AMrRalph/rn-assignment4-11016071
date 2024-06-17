import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Greetings from '../components/loginComponents/Greetings'
import Signin from '../components/loginComponents/Signin'
import Sociallinks from '../components/loginComponents/Sociallinks'

export default function Login() {
  return (
    <View>
        <Greetings/>
        <Signin/>
        <Sociallinks/>
    </View>
  )
}