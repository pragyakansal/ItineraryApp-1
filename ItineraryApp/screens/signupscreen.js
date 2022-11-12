import {Button, ImageBackground, StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, Pressable, Container} from 'react-native';
import React, { Component } from 'react';
import CustomAndroid from '../components/CustomAndroid';
import SignupForm from './signupform'


const image = { uri: "https://images.unsplash.com/photo-1526482312921-58d5666a52c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2130&q=80" };

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
      height: 650,
      width: 500,
      justifyContent: "center"
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
      bottom: 20,
      marginHorizontal: 100,
    },
    button2: {
      justifyContent: 'center',
      borderRadius: 13,
      backgroundColor: "#E8358B",
      width: 205,
      height: 56,
      marginBottom: 70,
      marginHorizontal: 100
    }
  });