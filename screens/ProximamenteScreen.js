import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as upcoming from '../movies/upcoming.json';
import ListViewUpcoming from '../Components/ListViewUpcoming';



const ProximamenteScreen = () => {
 
  return (
    <SafeAreaView>
      <ListViewUpcoming data={upcoming}/>
    </SafeAreaView>
  )
}

export default ProximamenteScreen