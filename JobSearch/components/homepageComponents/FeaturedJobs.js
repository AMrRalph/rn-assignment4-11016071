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
  },
  {
    companyName: 'Google',
    role : 'Junior Software Developer',
    companyLogo: require('../../assets/google.png'),
    salary: '$200,000',
    location: 'Virginia, USA',
    color : '#0D47A1',
  },
  {
    companyName: 'Apple',
    role : 'Project Manager',
    companyLogo: require('../../assets/apple.png'),
    salary: '$165,000',
    location: 'Accra, Ghana',
    color : '#A2AAAD',
  },
  {
    companyName: 'Huawei',
    role : 'Backend Developer',
    companyLogo: require('../../assets/huawei.png'),
    salary: '$90,000',
    location: 'Mancheester, UK',
    color : '#FF0000',
  },
  {
    companyName: 'Nike',
    role : 'Human Resourcce Manager',
    companyLogo: require('../../assets/nike.png'),
    salary: '87,000',
    location: 'New York, USA',
    color : '#111111',
  },
  {
    companyName: 'Microsoft',
    role : 'UI/UX Designer',
    companyLogo: require('../../assets/microsoft.png'),
    salary: '$125,000',
    location: 'Accra, Ghana',
    color : '#F25022',
  },
  {
    companyName: 'X',
    role : 'Marketing Director',
    companyLogo: require('../../assets/twitter.png'),
    salary: '$79,000',
    location: 'Ottowa, Canada',
    color : '#1DA1F2',
  },
]

export default function FeaturedJobs({}) {
  return (
    <View style = {{marginTop: 30, width: '90%', margin: 'auto'}}>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style = {{fontWeight: '700', fontSize: 23}}>Featured Jobs</Text>
        <Text style = {{color: '#7c7c7d', fontSize: 17, fontWeight: '700'}}>See all</Text>
      </View>
      <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
        {lst.map((featured, index) => (
          <View key = {index} style = {{alignItems: 'center'}}>
          <ImageBackground  style={styles.image} source={require('../../assets/fbbackground.png')}>
            <TouchableOpacity style = {{marginTop: 15, borderRadius: 18, backgroundColor:featured.color, width: 300, marginRight: 10}}>
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
          <View style = {{width: 8, marginTop: 5, height: 8, backgroundColor: '#7c7c7d', }}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
})