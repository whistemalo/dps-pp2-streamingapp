import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeliculaScreen from './screens/PeliculaScreen';
import SerieScreen from './screens/SerieScreen';
import ProximamenteScreen from './screens/ProximamenteScreen'
import Icon from 'react-native-vector-icons/Ionicons';

  

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Peliculas" component={PeliculaScreen} 
        options={{ tabBarLabel: 'Peliculas', tabBarIcon: ({color, size}) => (
          <Icon name="play-circle" color={color} size={25}/>
        ),}}/>
        <Tab.Screen name="Series" component={SerieScreen}
        options={{ tabBarLabel: 'Series', tabBarIcon: ({color, size}) => (
          <Icon name="film" color={color} size={25}/>
        ),}} />
        <Tab.Screen name="Proximamente" component={ProximamenteScreen} 
        options={{ tabBarLabel: 'Proximamente', tabBarIcon: ({color, size}) => (
          <Icon name="videocam" color={color} size={25}/>
        ),}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

