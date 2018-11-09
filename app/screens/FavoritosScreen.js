import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Header } from 'react-native-elements'

const list = [
  {
    name: 'Carol Barros',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Eletromecanica'
  },
  {
    name: 'Kevin Azevedo',
    avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
    subtitle: 'Martelinho de Ouro'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://randomuser.me/api/portraits/men/55.jpg',
    subtitle: 'Troca de Óleo'
  },
  {
    name: 'Willian Pinto',
    avatar_url: 'https://randomuser.me/api/portraits/men/42.jpg',
    subtitle: 'Pintura'
  },

]

export default class FavoritosScreen extends Component {

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
          //leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Favoritos', style: { color: '#fff', fontSize: 20, fontWeight: 'bold', } }}
          // rightComponent={{ icon: 'person', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: "#60D4AF" }}
        />
        <List containerStyle={{ marginBottom: 20, marginTop: -5 }}>
          {
            list.map((l) => (
              <ListItem
                roundAvatar
                subtitle={l.subtitle}
                avatar={{ uri: l.avatar_url }}
                key={l.name}
                title={l.name}
              />
            ))
          }
        </List>
      </View>

    );
  }
}

