import { View, Text, Touchable, TouchableOpacity, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'


const lst = [
  {
    companyName: 'Facebook',
    role : 'Software Engineer',
    companyLogo: require('../../assets/facebook.png'),
    salary: '$180,000',
    location: 'Kumasi, Ghana',
    color : '#3b86ff',
    background : require('../../assets/fbbackground.png')
  },
  {
    companyName: 'Google',
    role : 'Junior Software Developer',
    companyLogo: require('../../assets/google.png'),
    salary: '$200,000',
    location: 'Virginia, USA',
    color : '#3b86ff',
    background : require('../../assets/fbbackground.png')
  },
  {
    companyName: 'Apple',
    role : 'Project Manager',
    companyLogo: require('../../assets/apple.png'),
    salary: '$165,000',
    location: 'Accra, Ghana',
    color : '#3b86ff',
    background : require('../../assets/fbbackground.png')
  },
]

export default function FeaturedJobs({}) {
  return (
    <View style = {{marginTop: 30, width: '90%', margin: 'auto'}}>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style = {{fontWeight: '700', fontSize: 20}}>Featured Jobs</Text>
        <Text style = {{color: '#f2f2f3'}}>See all</Text>
      </View>
      <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
        {lst.map((featured, index) => (
          <ImageBackground key = {index} style={styles.image} source={require('../../assets/fbbackground.png')}>
            <TouchableOpacity style = {{marginTop: 15, borderRadius: 18, backgroundColor:'#3b86ff', width: 300, marginRight: 10}}>
              <View style = {{flexDirection: 'row', alignItems: 'center', width: '90%', margin: 'auto', marginTop: 15}}>
                <View style = {{backgroundColor: '#fff', padding: 8, marginRight: 12, borderRadius: 12}}>
                  <Image source={featured.companyLogo}/>
                </View>
                <View>
                  <Text style = {{color: '#fff', fontWeight: '700', fontSize: 18}}>{featured.role}</Text>
                  <Text style = {{color: '#fff', fontSize: 16}}>{featured.companyName}</Text>
                </View>
              </View>
              <View style = {{flexDirection: 'row', width: '90%', justifyContent: 'space-between', margin: 'auto', marginTop: 90, marginBottom:20}}>
                <Text style = {{color: '#fff', fontSize: 16}}>{featured.salary}</Text>
                <Text style = {{color: '#fff', fontSize: 16}}>{featured.location}</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
  },
})