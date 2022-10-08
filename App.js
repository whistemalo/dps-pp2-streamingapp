import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeliculaScreen from './screens/PeliculaScreen';
import SerieScreen from './screens/SerieScreen';
import ProximamenteScreen from './screens/ProximamenteScreen'

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Peliculas" component={PeliculaScreen} />
        <Tab.Screen name="Series" component={SerieScreen} />
        <Tab.Screen name="Proximamente" component={ProximamenteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

