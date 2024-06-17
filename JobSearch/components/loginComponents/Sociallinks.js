import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Sociallinks() {
  return (
    <View style = {{marginTop: 120, flexDirection: 'row', width: '55%', margin: 'auto', justifyContent: 'space-between'}}>
      <View style = {{backgroundColor : '#fff', padding: 15, borderRadius: 45}}>
        <Image style = {styles.links} source= {require('../../assets/apple.png')}/>
      </View>
      <View style = {{backgroundColor : '#fff', padding: 15, borderRadius: 45}}>
        <Image style = {styles.links} source= {require('../../assets/google.png')}/>
      </View>
      <View style = {{backgroundColor : '#fff', padding: 15, borderRadius: 45}}>
        <Image style = {styles.links} source= {require('../../assets/facebook.png')}/>
      </View>
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