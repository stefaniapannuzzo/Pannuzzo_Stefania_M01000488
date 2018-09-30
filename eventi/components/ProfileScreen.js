import React from "react";
import { StyleSheet, Text,TextInput, View, ScrollView, TouchableOpacity } from "react-native";

//const TINT_COLOR = "rgb(4, 159, 239)";


export default class App extends React.Component {
  state = {
    Nome: "", 
    Cognome: "",
    Sesso: "",
    Telefono: "",
    dueDate: new Date(),
    

    
  };
  render() {
    return (
      <ScrollView>
        <View>
            <TextInput
              value={this.state.Nome}
              //style={[styles.textInputStyleOnAndroid, styles.label]}
              placeholder="Il tuo nome"
              //autoFocus
              //underlineColorAndroid={TINT_COLOR}
              onChangeText={value => this.setState({ Nome: value })}
              //onSubmitEditing={this._save}
            />
        </View>
        <View style= {styles.container}>
            <TextInput 
              value={this.state.Cognome}
              //style={[styles.textInputStyleOnAndroid, styles.label]}
              placeholder="Il tuo Cognome"
              //autoFocus
              //underlineColorAndroid={TINT_COLOR}
              onChangeText={value => this.setState({Cognome: value })}
              //onSubmitEditing={this._save}
            />
        </View>
        <View>
            <TextInput
              value={this.state.Sesso}
              //style={[styles.textInputStyleOnAndroid, styles.label]}
              placeholder="Uomo/Donna"
              //autoFocus
              //underlineColorAndroid={TINT_COLOR}
              onChangeText={value => this.setState({Cognome: value })}
              //onSubmitEditing={this._save}
            />
        </View>
         <View>
            <TextInput
              value={this.state.Telefono}
              //style={[styles.textInputStyleOnAndroid, styles.label]}
              placeholder="Il tuo numero di telefono"
              //autoFocus
              //underlineColorAndroid={TINT_COLOR}
              onChangeText={value => this.setState({Telefono: value })}
              //onSubmitEditing={this._save}
            />
        </View>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

