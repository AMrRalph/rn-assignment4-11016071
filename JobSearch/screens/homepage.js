import { ScrollView, View } from 'react-native'
import React from 'react'
import Info from '../components/homepageComponents/Info'
import Search from '../components/homepageComponents/Search'
import FeaturedJobs from '../components/homepageComponents/FeaturedJobs'
import PopularJobs from '../components/homepageComponents/PopularJobs'

export default function Homepage() {
  return (
    <View>
        <ScrollView showsVerticalScrollIndicator = {false}>
          <Info/>
          <Search/>
          <FeaturedJobs/>
          <PopularJobs/>
        </ScrollView>
    </View>
  )
}