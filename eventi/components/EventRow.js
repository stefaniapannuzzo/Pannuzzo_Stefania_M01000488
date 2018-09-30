import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class EventRow extends React.Component {
  render() {
    return ( //dentro l'onPress prendo la prop passata dal padre HomeScreen
      <TouchableHighlight onPress={this.props.onDetails}>
        <View style={styles.container}>
          <Image
            style={{ height: 50, width: 50 }}
            source={{ uri: this.props.data.img }}
          />

          <View style={styles.viewText}>
            <Text style={styles.title}>{this.props.data.name}</Text>
            <Text style={styles.location}>{this.props.data.location}</Text>
            <Text style={styles.tag}>{this.props.data.tags}</Text>
            <Text> Data inizio: {this.props.data.startDate}></Text>
            <Text> Data fine: {this.props.data.endDate}</Text>
            <Text style={styles.price}>Ingresso: {this.props.data.prize}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  viewText: {
    //borderWidth:1,
    //borderColor:"black",
    height: 140,
    marginLeft: 10,
    marginRight : 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  location: {
    color: 'gray',
  },
  price : {
    color: 'orange'
  },
  tag: {
    color: 'orange'
  }

});
