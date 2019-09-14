import React from 'react';

import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

const PlaylistTile = ({
  navigation,
  data: {
    id,
    name,
    images,
    tracks,
  },
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PlaylistDetail', { playlistId: id })}>
      <View>
        <Image
          source={{uri: images[0].url}}
          style={styles.playlistsTile__image}
        />
        <Text style={styles.playlistsTile__text}>{name}</Text>
        <Text style={styles.playlistsTile__songs}>{tracks.total} SONGS</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playlistsTile__text: {
    color: 'white',
    fontSize: 16,
  },
  playlistsTile__image: {
    width: '100%',
    height: 200,
    marginBottom: 12,
  },
  playlistsTile__songs: {
    fontSize: 12,
    marginTop: 8,
    color: 'rgba(255, 255, 255, .6)'
  }
});

export default PlaylistTile;
