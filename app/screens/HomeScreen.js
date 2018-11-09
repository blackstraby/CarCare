import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
  Dimensions
} from 'react-native';

import { Avatar, Card, ListItem, Button, Header, Divider } from "react-native-elements";
import axios from 'axios';

const { width, height } = Dimensions.get('screen');
const api = 'http://localhost:3000'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      usuarios: [],
      posts: [],
      loading: true,
    }
  }

  componentWillMount = async () => {
    await this.getUsuarios();
    await this.getPosts();
    this.setState({ loading: false })
  }

  getUsuarios = async () => {
    try {
      const response = await axios.get(api + '/usuarios');
      this.setState({ usuarios: response.data })
    } catch (error) {
      console.log(error)
    }
  }

  getPosts = async () => {
    try {
      const response = await axios.get(api + '/posts');
      this.setState({ posts: response.data })
    } catch (error) {
      console.log(error)
    }
  }

  renderAvatar = () => {
    return this.state.usuarios.map((usuario, i) => {
      return <Avatar
        key={i}
        rounded
        large
        source={{ uri: usuario.foto }}
        containerStyle={{ flex: 2, marginLeft: 10, marginTop: 5, }}
      />
    })
  }

  renderCard = () => {
    return this.state.posts.map((post, i) => {
      return <Card
        key={i}
        title={post.title}
        image={{ uri: post.url }}
        containerStyle={{
          borderRadius: 5, borderWidth: 0,
          backgroundColor: '#f5f5f5'
        }}
      >
        <Text>

        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            icon={{ name: 'local-offer' }}
            backgroundColor={'#60D4AF'}
            buttonStyle={{ borderRadius: 4, margin: 0 }}
            title={'Agendar'}
            onPress={() => this.props.navigation.navigate('Agendar')}

          />
          <Button
            icon={{ name: 'info' }}
            backgroundColor={'#60D4AF'}
            buttonStyle={{ borderRadius: 4, margin: 0 }}
            title={'Informações'}
            onPress={() => this.props.navigation.navigate('Informacao')}
          />
        </View>
      </Card>
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: '#222', marginBottom: 70, }} >
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{ icon: 'directions-car', color: '#fff' }}
          centerComponent={{ text: 'CAR CARE', style: { color: '#fff', fontSize: 20, fontWeight: 'bold', } }}
          rightComponent={{ icon: 'mail-outline', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: "#60D4AF" }}
        />

        {
          this.state.loading
            ? <View style={{ backgroundColor: '#222', height: height, marginTop: 50, }} >
              <ActivityIndicator color='white' size='large' />
            </View>
            :
            <ScrollView>
              <View style={{
                padding: 5,
                borderWidth: 0,
                backgroundColor: '#f5f5f5'
              }} >
                <Text style={{
                  fontSize: 18,
                  color: "#000",
                  fontWeight: 'bold',
                  //textAlign: 'center'
                }} >
                  Mais Procurados
              </Text>

                <ScrollView horizontal>
                  {this.renderAvatar()}
                </ScrollView>
              </View>

              <View style={{ flexDirection: 'row', }} >

                <Divider style={{
                  marginTop: 20,
                  backgroundColor: '#fff',
                  width: 140
                }} />

                <Text style={{
                  marginTop: 10,
                  marginLeft: 5,
                  marginRight: 5,
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: 'bold',
                  textAlign: 'center'
                }} >
                  Ultimas Ofertas
                </Text>

                <Divider style={{
                  marginTop: 20,
                  backgroundColor: '#fff',
                  width: 130
                }} />

              </View>

              {this.renderCard()}

            </ScrollView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
