import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Info from '../components/homepageComponents/Info'
import Search from '../components/homepageComponents/Search'
import FeaturedJobs from '../components/homepageComponents/FeaturedJobs'
import PopularJobs from '../components/homepageComponents/PopularJobs'

export default function Homepage() {
  return (
    <View>
        <Info/>
        <Search/>
        <FeaturedJobs/>
        <PopularJobs/>
    </View>
  )
}