import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component{ 
  constructor(){
    super();
    this.state = { tareas: [],
    texto:'' };
  }

  establecerTexto = (value) => {
    this.setState({texto:value});
    //console.log(value);
  };

  agregarTarea = (tarea) => {
  this.setState({
    tareas: [...this.state.tareas, tarea],
    texto:'',
  
  })
}

  render() {
  return (
    <View style={styles.container}>
      <Header 
      texto={this.state.texto}
      cambiarTexto = {this.establecerTexto} agregar ={this.agregarTarea} /> 
      <Text>{this.state.texto} </Text>
      <Body />
    </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
});
