import {ImageBackground, StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, Pressable, Button } from 'react-native';
import React, { Component } from 'react';
import CustomAndroid from '../components/CustomAndroid';

const image = { uri: "https://unsplash.com/photos/lu8-EpYHkho" };



class SignupScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.custom}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.custom}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.custom}>Guest</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

export default SignupScreen


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    image: {
      flex: 1,
      justifyContent: "center",
      height: 300,
      width: 100
    },
    custom: {
      fontFamily: 'ABeeZee',
      fontSize: 28,
      color: "white",
      textAlign: "center",
    },
    button1: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 13,
      backgroundColor: "#1D54A6",
      width: 205,
      height: 56,
      marginBottom: 22,
      marginHorizontal: 100
    },
    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 13,
      backgroundColor: "#DA5263",
      width: 205,
      height: 56,
      marginBottom: 22,
      marginHorizontal: 100
    },
    button3: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 13,
      backgroundColor: "#744578",
      width: 205,
      height: 56,
      marginHorizontal: 100,
      marginBottom: 125
    },

  });