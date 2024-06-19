import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Signin({navigation}) {
  return (
    <View>
      <TextInput style = {styles.input} placeholder='Name'/>
      <TextInput style = {styles.input} placeholder='Email'/>
      <TouchableOpacity onPress={() => navigation.navigate('Homepage')} style = {styles.submit}>
        <Text style = {{color: '#fff', fontSize: 20}}>Log in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#AFB0B6',
        // color: '#AFB0B6',
        borderWidth: '1',
        height: 55,
        paddingLeft: 10,
        width: '85%',
        margin: 'auto',
        marginTop: 15,
        borderRadius: 10
    },

    submit: {
      borderColor: '#356899',
      backgroundColor: '#356899',
      borderWidth: '1',
      height: 55,
      paddingLeft: 10,
      width: '85%',
      margin: 'auto',
      marginTop: 30,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    }
})
