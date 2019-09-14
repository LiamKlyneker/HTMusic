import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PlaylistsScreen from '../screens/PlaylistsScreen';
import PlaylistDetailScreen from '../screens/PlaylistDetailScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const PlaylistsMainStack = createStackNavigator(
  {
    Playlists: PlaylistsScreen,
    PlaylistDetail: {
      screen: PlaylistDetailScreen,
      navigationOptions: () => ({
        title: 'Playlist Detail',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1C0406',
          borderBottomColor: '#1C0406',
        },
      }),
    },
  }
);


const PlaylistsStack = createStackNavigator(
  {
    MainApp: PlaylistsMainStack,
    SongDetail: TrackDetailScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
  config,
);

PlaylistsStack.navigationOptions = {
  tabBarLabel: 'Playlists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-options'} />
  ),
};

PlaylistsStack.path = '';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  PlaylistsStack,
  HomeStack,
  SettingsStack,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#1C0406',
      borderTopColor: 'black',
      borderTopWidth: 2,
    },
  }
});

export default tabNavigator;
