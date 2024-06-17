import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Greetings() {
  return (
    <View style = {styles.container}>
      <Text style = {{color: '#356899', fontWeight: 600, fontSize: 30, paddingBottom: 10}}>Jobizz</Text>
      <Text style = {{color: '#000', fontWeight: 700, fontSize: 30, paddingBottom: 10}}>Welcome Back 👋</Text>
      <Text style = {{ color: '#AFB0B6', fontSize: 15}}>Let's log in. Apply to jobs!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    marginVertical: 50,
    marginLeft: 32
  }
})


