import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Button, TouchableHighlight, Image } from "react-native";
import { createStackNavigator, TabNavigator } from "react-navigation";

const TINT_COLOR = 'rgb(4, 159, 239)';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import ProfileScreen from './components/ProfileScreen';




const Home = createStackNavigator({
  Home: {
    screen: HomeScreen, //menùscreen
    navigationOptions: {
      title: "Home" //Home-Menù
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: "Detail"
    }
  },
})

const MainNav = TabNavigator({
  
  Home: { //menù
    screen: HomeScreen //menùscreen
  },
  Profilo: { 
    screen: ProfileScreen 
  },
  
});

export default class App extends React.Component {
  render() {
    return <MainNav />;
      
    
  }
} 



 