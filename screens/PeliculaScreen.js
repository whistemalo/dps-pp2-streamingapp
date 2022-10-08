import { Text, View, Image, ScrollView} from 'react-native'
import React, { Component } from 'react'

export class PeliculaScreen extends Component {
  render() {
    return (
        <View className="flex-1 bg-white">
          <View className=" items-center">
            <Image className="w-96 h-52" source={require('../assets/streaming.jpg')}/>
          </View>
          <View>
            <Text className="text-lg font-semibold mt-6 mx-4">Comedia</Text>
            <ScrollView horizontal>
              <View>
                <Image source={require('../assets/comedia/pelicula1.jpg')}/>
              </View>
              <View>
                <Image source={require('../assets/comedia/pelicula2.jpg')}/>
              </View>
              <View>
                <Image source={require('../assets/comedia/pelicula3.jpg')}/>
              </View>
              <View>
                <Image source={require('../assets/comedia/pelicula4.jpg')}/>
              </View>
              <View>
                <Image source={require('../assets/comedia/pelicula5.jpg')}/>
              </View>
            </ScrollView>
          </View>
        </View>
    )
  }
}

export default PeliculaScreen