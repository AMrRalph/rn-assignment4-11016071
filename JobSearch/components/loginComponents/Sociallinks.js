import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Sociallinks() {
  return (
    <View style = {{marginTop: 80, flexDirection: 'row', width: '55%', margin: 'auto', justifyContent: 'space-between'}}>
      <TouchableOpacity style = {{backgroundColor : '#fff', padding: 15, borderRadius: 45}}>
        <Image style = {styles.links} source= {require('../../assets/apple.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style = {{backgroundColor : '#fff', padding: 15, borderRadius: 45}}>
        <Image style = {styles.links} source= {require('../../assets/google.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style = {{backgroundColor : '#fff', padding: 15, borderRadius: 45}}>
        <Image style = {styles.links} source= {require('../../assets/facebook.png')}/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  links : {
    height: 30,
    width: 30,
    // marginRight: 40,
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // padding: 20
  }
})