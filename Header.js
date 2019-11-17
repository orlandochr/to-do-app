//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <TextInput style={styles.texto}
                onChangeText={ this.props.cambiarTexto }
                placeholder="Agregar tarea..."
                onSubmitEditing={this.props.agregar} 
                value={this.props.texto}
                />
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#00FF00',
    },
    texto:{
        paddingHorizontal:16,
    }
});

//make this component available to the app
export default Header;
