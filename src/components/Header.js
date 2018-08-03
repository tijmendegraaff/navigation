import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { TouchableOpacity, Modal, View, Text } from 'react-native'

export default class HeaderExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
      console.log(this.props)
    return (
      <Container>
        <Header>
          <Left>
            
          </Left>
          <Body>
            <TouchableOpacity onPress={() => {
            this.setModalVisible(true);
          }}>
            <Title>{this.props.navigation.state.key}</Title>
            </TouchableOpacity>
          </Body>
          <Right>
            
          </Right>
        </Header>
        // modal should be extracted to it's own component
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              
              
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Home"), this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Go to HomeScreen</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Settings"), this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Go to SettingsScreen</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}