import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Greetings from '../components/loginComponents/Greetings'
import Signin from '../components/loginComponents/Signin'
import Sociallinks from '../components/loginComponents/Sociallinks'

export default function Login() {
  return (
    <View>
        <Greetings/>
        <Signin/>
        <View style = {styles.container}>
          <View style = {styles.divider}></View>
          <Text style = {{color: '#AFB0B6', fontSize: 15}}>      Or continue with       </Text>
          <View style = {styles.divider}></View>
        </View>
        <Sociallinks/>

        <View style = {{alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
          <Text style = {{fontSize: 17}}>Haven't an account?</Text>
          <TouchableOpacity>
            <Text style = {{color: '#356899', fontSize: 17, fontWeight: '600'}}> Register</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  }, 

  divider: {
    height: 1,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    width: 100,
    
  }
})