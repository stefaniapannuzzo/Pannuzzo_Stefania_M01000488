import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,  FlatList } from "react-native";
import { createStackNavigator, TabNavigator } from "react-navigation";


import EventRow from './EventRow';
import DetailsScreen from './DetailsScreen';
const TINT_COLOR = 'rgb(4, 159, 239)';




export default class HomeScreen extends React.Component {
  state = {
    Events: [], // array che contiene il risultato della richiesta
    
  };


  componentDidMount(){  //appena la componente viene renderizzata a video viene invocata la richiesta con makeRemoteRequest()
    this.makeRemoteRequest();
    
  }

  makeRemoteRequest = () => {
    const MyEvents = 'http://www.dmi.unict.it/~calanducci/LAP2/events.json';
    fetch(MyEvents)
      .then(response => response.json())
        .then(jsonResponse => {
          let array = jsonResponse.data;
          this.setState({ Events : array})
        })
  };

      

  _toDetail = (item) => {
    this.props.navigation.navigate("Details" , {CurrentEvent : item}) //scrivo Details perchè in app.js nello stacknavigator l'ho kiamato così
 }

  renderRow = ({ item }) => (
    <EventRow 
      data={item} 
      onDetails={() => this._toDetail(item)}/>
  );

  keyExtractor = (item, index) => {
    return String(index);
  };


  render() {
    return ( 
      <View style={styles.container}>  
        <ScrollView>
        <FlatList
          data={this.state.Events}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
        />
        </ScrollView>
      </View>
    );
  }
  }


HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Menu',
    headerStyle: {
      backgroundColor: TINT_COLOR,
    },
    headerTintColor: 'white',
    //headerLeft: null,
    //headerRight: ( //
      
    //),
  };
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
  