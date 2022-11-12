import {ImageBackground, StyleSheet, Text, View, Platform, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import React, { Component } from 'react';
//import CustomAndroid from '../components/CustomAndroid';

const image = { uri: "https://images.unsplash.com/photo-1492138195150-d71143066b68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"};

class SignupForm extends Component {
  render(){
    return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>App Name</Text>
      </ImageBackground>
    </View>  
    )  
  }
};
export default SignupForm

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
    marginBottom: 22,
    marginHorizontal: 100,
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