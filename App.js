import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeliculaScreen from './Components/PeliculaScreen';
import SerieScreen from './Components/SerieScreen';
import ProximamenteScreen from './Components/ProximamenteScreen'

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pelicula" component={PeliculaScreen} />
        <Tab.Screen name="Series" component={SerieScreen} />
        <Tab.Screen name="Proximamente" component={ProximamenteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

