import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FavoritosScreen from '../screens/FavoritosScreen';
import PerfilScreen from '../screens/PerfilScreen/';

import AgendarScreen from "../screens/AgendarScreen";
import InformacaoScreen from "../screens/InformacaoScreen";

const AppStack = createBottomTabNavigator(
  {

    Home: {
      screen: HomeScreen,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarOptions: {
          showLabel: false,
        },
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home'
            }
          />
        ),
      },
    },

    Favoritos: {
      screen: FavoritosScreen,
      path: '/favoritos',
      navigationOptions: {
        tabBarLabel: 'Favoritos',
        tabBarOptions: {
          showLabel: false,
        },
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios'
                ? `ios-heart${focused ? '' : '-outline'}`
                : 'md-heart'}
          />
        ),
      },
    },

    Perfil: {
      screen: PerfilScreen,
      path: '/perfil',
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarOptions: {
          showLabel: false,
        },
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios'
                ? `ios-person${focused ? '' : '-outline'}`
                : 'md-person'}
          />
        ),
      },
    },

  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const PostStack = createStackNavigator({
  Agendar: {
    screen: AgendarScreen,
  },
  Informacao: {
    screen: InformacaoScreen,
  },

},
  {
    navigationOptions: {
      gesturesEnabled: false,
    },
  });


export default createSwitchNavigator(
  {
    App: AppStack,
    Poster: PostStack,
  },
  {
    initialRouteName: 'App',
  }
);