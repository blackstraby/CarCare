import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View, StatusBar, Share, Alert } from 'react-native'
import { Avatar, ListItem, Header } from 'react-native-elements'
import PropTypes from 'prop-types'

import BaseIcon from './Icon'
import Chevron from './Chevron'
import InfoText from './InfoText'

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
})

class SettingsScreen extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  state = {
    pushNotifications: true,
  }

  onPressOptions = () => {
    this.props.navigation.navigate('options')
  }

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
  }

  share = () => {
    Share.share({
      message: `Compartilhe com seus amigos o novo app da CAR CARE!`,
      url: '\nhttp://carcare.com.br', //iOS only
      title: 'Venha conheçer nossa StartUp!'
    }, {
        // Android only:
        dialogTitle: 'Convidar Alunos',
        // iOS only:
        excludedActivityTypes: [
          "com.apple.UIKit.activity.AssignToContact",
          "com.apple.UIKit.activity.PostToTencentWeibo",
          "com.apple.UIKit.activity.AirDrop",
          "com.apple.UIKit.activity.OpenInIBooks",
          "com.apple.UIKit.activity.MarkupAsPDF",
          "com.apple.mobileslideshow.StreamShareService",
        ]
      })
  }

  about = () => {
    Alert.alert("Sobre", "Atuando no mercado desde 2018, a Car Care cuida do seu carro no conforto de sua casa. Temos os melhores mecânicos da cidade e região. Levamos em consideração o melhor atentimento para a cidade de Juiz de Fora.");
  }
  render() {
    const { avatar, name, emails: [firstEmail] } = this.props
    return (
      <ScrollView style={styles.scroll}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          //leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Perfil', style: { color: '#fff', fontSize: 20, fontWeight: 'bold', } }}
          // rightComponent={{ icon: 'person', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: "#60D4AF" }}
        />

        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{
                uri: avatar,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{name}</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              {firstEmail.email}
            </Text>
          </View>
        </View>
        <InfoText text="Account" />
        <View>
          <ListItem
            hideChevron
            title="Push Notifications"
            containerStyle={styles.listItemContainer}
            rightElement={
              <Switch
                onValueChange={this.onChangePushNotifications}
                value={this.state.pushNotifications}
              />
            }
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FFADF2',
                }}
                icon={{
                  type: 'material',
                  name: 'notifications',
                }}
              />
            }
          />
          <ListItem
            // chevron
            title="Currency"
            rightTitle="BRL"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Location"
            rightTitle="Brazil"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Language"
            rightTitle="English"
            rightTitleStyle={{ fontSize: 15 }}
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
        <InfoText text="More" />
        <View>
          <ListItem
            title="About US"
            onPress={() => this.about()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#A4C8F0' }}
                icon={{
                  type: 'ionicon',
                  name: 'md-information-circle',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Terms and Policies"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{ backgroundColor: '#C6C7C6' }}
                icon={{
                  type: 'entypo',
                  name: 'light-bulb',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Share our App"
            onPress={() => this.share()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#C47EFF',
                }}
                icon={{
                  type: 'entypo',
                  name: 'share',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Rate Us"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            badge={{
              value: 4.7,
              textStyle: { color: 'white' },
              containerStyle: { backgroundColor: 'gray', marginTop: 0 },
            }}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#FECE44',
                }}
                icon={{
                  type: 'entypo',
                  name: 'star',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
          <ListItem
            title="Send FeedBack"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <BaseIcon
                containerStyle={{
                  backgroundColor: '#00C001',
                }}
                icon={{
                  type: 'materialicon',
                  name: 'feedback',
                }}
              />
            }
            rightIcon={<Chevron />}
          />
        </View>
      </ScrollView>
    )
  }
}

export default SettingsScreen
