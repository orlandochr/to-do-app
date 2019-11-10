//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Boby</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#98FB98',
    },
});

//make this component available to the app
export default Body;
