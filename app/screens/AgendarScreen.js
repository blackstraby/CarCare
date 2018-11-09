import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

export default class Agendar extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.props.navigation.navigate('Home') }}
          centerComponent={{ text: 'Agendar', style: { color: '#fff', fontSize: 20, fontWeight: 'bold', } }}
          // rightComponent={{ icon: 'person', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: "#60D4AF" }}
        />
        <Text> Agendar </Text>
      </View>
    );
  }
}
