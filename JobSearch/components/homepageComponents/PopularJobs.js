import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'



const popular = [
  {
    companyName : 'Burger King',
    role: 'Jr Executive',
    compnayLogo: require('../../assets/burgerKing.png'),
    salary: '$96,000',
    location: 'Los Angeles, US'
  },
  {
    companyName : 'Beats',
    role: 'Product Manager',
    compnayLogo: require('../../assets/beatsByDre.png'),
    salary: '$84,000',
    location: 'Florida, US'
  },
  {
    companyName : 'Facebook',
    role: 'UI/UX Designer',
    compnayLogo: require('../../assets/facebook.png'),
    salary: '$76,000',
    location: 'West Ham, UK',
  },
  {
    companyName : 'Uber',
    role: 'UI/UX Designer',
    compnayLogo: require('../../assets/uber.png'),
    salary: '$82,300',
    location: 'Florida, US',
  },
  {
    companyName : 'Intel',
    role: 'Frontend Developer',
    compnayLogo: require('../../assets/intel.png'),
    salary: '$92,600',
    location: 'Iowa, USA',
  },
]

export default function PopularJobs({}) {
  return (
    <View style = {{marginTop: 30}}>
      {/* Header part */}
      <View style = {styles.header}>
        <Text style = {{fontWeight: '700', fontSize: 23}}>Popular Jobs</Text>
        <Text style = {{fontSize: 17, color: '#7c7c7d', fontWeight: '700'}}>See all</Text>
      </View>
      {/* List of jobs */}
      <View>
        {/* Individual Jobs */}
        {popular.map((popular, index) => (
        <View key = {index} style = {styles.indiJobs}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image style = {styles.image} source={popular.compnayLogo}/>
            <View>
                <Text style = {styles.mainText}>{popular.role}</Text>
                <Text style = {styles.smallText}>{popular.companyName}</Text>
            </View>
          </View>
          <View style = {{marginRight: 15, alignItems:'flex-end'}}>
            <Text style = {styles.mainText}>{popular.salary}</Text>
            <Text style = {styles.smallText}>{popular.location}</Text>
          </View>
        </View>
        ))}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainText : {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 3
  },

  smallText: {
    fontSize: 17,
    color: '#7c7c7d'
  },

  header : {
    flexDirection: 'row',
    width: '90%',
    margin: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  indiJobs: {
    width: '90%',
    marginTop: 20,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 80,
    alignItems: 'center',
    borderRadius: 20,
  },
  image : {
    marginRight: 10,
    height: 40,
    width: 40,
    marginLeft: 10
  }
})