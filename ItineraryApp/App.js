import React, {Component} from 'react';
import {Button} from 'react-native';
import SignupScreen from './screens/signupscreen';
import SignupForm from './screens/signupform';
import LoginForm from './screens/loginform';
import MoreInformation from './screens/moreInformation';
import MapTest from './screens/mapsTest';
import HomeScreen from './screens/homescreen';
import ProfileScreen from './screens/profilescreen';
import BookmarksScreen from './screens/bookmarksscreen';
import ItineraryListScreen from './screens/itinerarylistscreen';
import ActivityRecommendations from './screens/activityrecommendations';
//Navigation Imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavBar from './components/BottomNavigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignupForm">
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="SignupForm" component={SignupForm} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="MoreInformation" component={MoreInformation} />
          <Stack.Screen name="MapTest" component={MapTest} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="ActivityRecommendations" component={ActivityRecommendations} />
          <Stack.Screen name="BookmarksScreen" component={BookmarksScreen} />
          <Stack.Screen name="ItineraryListScreen" component={ItineraryListScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
