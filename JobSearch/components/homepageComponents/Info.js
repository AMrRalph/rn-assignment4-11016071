import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { reloadAppAsync } from 'expo'

export default function Info() {
  return (
    <View style = {styles.info}>
      <View>
        <Text style = {styles.username}>Eric Atsu</Text>
        <Text style = {styles.email}>eric@gmail.com</Text>
      </View>
      <View>
        <View style = {styles.active}></View>
        <Image style = {styles.image} source={require('../../assets/profilePic.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    marginTop: 20,
    width: '90%',
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  active: {
    borderWidth: 3,
    width : 14,
    height: 14,
    backgroundColor: '#FC1010',
    borderColor: '#ededed',
    borderRadius: '50',
    position: 'relative',
    left: 34,
    bottom: -16,
    zIndex: 99
  },
  username : {
    fontWeight: '900',
    fontSize: 25,
    
  },
  email : {
    fontSize: 25,
    color: '#AFB0B6'
  }
})