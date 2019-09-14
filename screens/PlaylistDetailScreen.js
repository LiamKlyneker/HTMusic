import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import Loader from '#components/Loader';
import TrackTile from '#components/TrackTile';

import useActions from '#hooks/useActions';
import { getPlaylistDetail } from '#modules/Playlists/actions';
import { getUserData } from '#modules/User/selectors';
import { getPlaylistsData } from '#modules/Playlists/selectors';

const PlaylistDetailScreen = ({ navigation }) => {
  /* Selectors */
  const { token } = useSelector(getUserData());
  const { playlistDetail, isFetchingDetail } = useSelector(getPlaylistsData());

  /* Actions */
  const actions = useActions({ getPlaylistDetail });

  /* Effects */
  useEffect(() => {
    actions.getPlaylistDetail({
      token,
      playlistId: navigation.getParam('playlistId'),
    });
  }, []);
  
  return (
    <View style={styles.container}>
      {isFetchingDetail && <Loader />}
      {!isFetchingDetail && (
        <ScrollView style={styles.scrollView}>
          <Image
            source={{ uri: playlistDetail.images[0].url }}
            style={{ width: 200, height: 200, marginBottom: 16 }}
          />

          <Text style={styles.textTitle}>Playlist Name: {playlistDetail.name}</Text>
          <Text style={styles.text}>Total Tracks: {playlistDetail.tracks.items.length}</Text>
          <Text style={styles.separator}>S O N G S  L I S T</Text>

          {playlistDetail.tracks.items.map(item => (
            <TrackTile
              key={item.track.id}
              data={item}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C0406',
  },
  scrollView: {
    padding: 16,
    paddingBottom: 120,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  separator: {
    color: 'white',
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 16,
  }
});

export default PlaylistDetailScreen;
