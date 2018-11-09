import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, PricingCard } from 'react-native-elements';

export default class Informacao extends Component {
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
          centerComponent={{ text: 'Informações', style: { color: '#fff', fontSize: 20, fontWeight: 'bold', } }}
          // rightComponent={{ icon: 'person', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: "#60D4AF" }}
        />


        <PricingCard
          color='#4f9deb'
          title='Troca de Óleo'
          price='$150,00'
          info={['1 Troca de Óleo', 'Horário: 08:00h - 17:00h', 'Mecânico: Caio Peres']}
          button={{ title: 'CONTRATAR', icon: 'local-offer' }}
        />
      </View>
    );
  }
}
