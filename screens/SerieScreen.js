import { Text, View, Image, ScrollView,SafeAreaView} from 'react-native'
import React, { Component } from 'react'
import ListViewVertical from '../Components/ListViewVertical'
import * as series from '../movies/series.json';

const SerieScreen = () => {

  return (
    <SafeAreaView className="flex  bg-white">
      <ScrollView>
      <View className=" items-center w-96 h-52">
            {/* <Text className="text-red-500">tesadsada</Text> */}
            <Image  className="w-96 h-52"  source={require('../assets/streaming.jpg')}/>
          </View>
          <View>
            <Text className="text-lg mt-4 font-semibold text-center mx-4">Tendencias</Text>
            <ListViewVertical data={series}/>
          </View>         
      </ScrollView>
          
        </SafeAreaView>
  )
}

export default SerieScreen