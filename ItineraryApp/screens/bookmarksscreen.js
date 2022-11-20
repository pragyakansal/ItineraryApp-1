import {Icon, SafeAreaView, TextInput, ImageBackground, StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, Pressable, Image, VirtualizedList, ScrollView} from 'react-native';
import React, { Component, useState, useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import ItineraryContainer from 'ItineraryApp/components/ItineraryContainer';
import ActivityContainer from '../components/ActivityContainer';


const BookmarksScreen = ({route}) => {
    const navigation = useNavigation();

    const[mainData, setMainData] = useState([])

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
       })
    }, []);

    const data = route?.params?.param

    return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>My Bookmarks</Text>
      </View> 
      <View>
          <Image 
            source={
              {uri:
                data?.photo?.images?.medium?.url 
                ? data?.photo?.images?.medium?.url 
                : 'ItineraryApp/assets/icons/restaurant(1).png'}
            }
          />
       </View>    
   </View>  
    )  
  }
export default BookmarksScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: 'ABeeZee',
    fontSize: 38,
    color: "#744578",
    textAlign: "center",
    marginTop: 25,
  },
});