import React from 'react';

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const TrackTile = ({
  navigation,
  data: { track },
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SongDetail', { trackId: track.id })}>
      <View style={styles.trackTile}>
        <Text style={styles.trackTile__songText}>{track.name}</Text>
        <Text style={styles.trackTile__text}>{track.album.name}</Text>
        <Text style={styles.trackTile__text}>BY {track.artists[0].name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  trackTile: {
    backgroundColor: '#1C0406',
    paddingTop: 16,
    paddingBottom: 16,
  },
  trackTile__songText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
  },
  trackTile__text: {
    color: 'rgba(255, 255, 255, .6)',
    fontSize: 14,
  },
});

export default TrackTile;
