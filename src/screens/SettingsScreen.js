import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import Header from "../components/Header"

class SettingsScreen extends Component {

    render() {
        console.log(this.props)
        return (
            <Container><Header navigation={this.props.navigation}/><Text>Hello SettingsScreen</Text></Container>
        );
    }
}

export default SettingsScreen;