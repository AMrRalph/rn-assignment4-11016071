import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style = {styles.container}>
      <View style = {{flexDirection: 'row',borderRadius: 9, backgroundColor: '#f2f2f3', width: '70%', height: 40, alignItems: 'center'}}>
        <Image style = {{marginRight: 10, marginLeft: 20}} source = {require('../../assets/magnify.png')}/>
        <TextInput placeholder='Search a job or position'/>
      </View>
      <TouchableOpacity style = {{backgroundColor: '#f2f2f3', width: 40,   justifyContent: 'center', alignItems: 'center', borderRadius: 9}}>
        <Image style = {{}} source={require('../../assets/filter.png')}/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
  },

})