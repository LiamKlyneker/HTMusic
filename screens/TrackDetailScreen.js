import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { StyleSheet,View, Text, Button, Image } from 'react-native';
import Loader from '#components/Loader';

import useActions from '#hooks/useActions';
import { getUserData } from '#modules/User/selectors';
import { getPlaylistsData } from '#modules/Playlists/selectors';
import { getTrackDetail } from '#modules/Playlists/actions';

const TrackDetailScreen = ({ navigation }) => {
  /* Selectors */
  const { token } = useSelector(getUserData());
  const { trackDetail, isFetchingTrackDetail } = useSelector(getPlaylistsData());

  /* Actions */
  const actions = useActions({ getTrackDetail });

  /* Effects */
  useEffect(() => {
    actions.getTrackDetail({
      token,
      trackId: navigation.getParam('trackId'),
    });
  }, []);

  /* Methods */
  const parseDuration = (ms) => {
    const tempTime = moment.duration(ms);
    return `${tempTime.minutes()}:${tempTime.seconds()}`;
  }

  return (
    <View style={styles.container}>
      <Button style={styles.closeButton} onPress={() => navigation.goBack(null)} title="CLOSE" />
      {isFetchingTrackDetail && <Loader />}
      {!isFetchingTrackDetail && (
        <View>
          <Image
            source={{ uri: trackDetail.album.images[1].url }}
            style={styles.image}
          />
          <Text style={styles.trackName}>{trackDetail.name}</Text>
          <Text style={styles.complementaryText}>{trackDetail.artists[0].name}</Text>
          <Text style={styles.complementaryText}>{trackDetail.album.name}</Text>
          <Text style={styles.complementaryText}>{parseDuration(trackDetail.duration_ms)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 80,
    backgroundColor: '#1C0406',
  },
  closeButton: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    alignSelf: 'flex-end',
  },
  image: {
    marginTop: 120,
    width: 300,
    height: 300,
    marginBottom: 16,
    alignSelf: 'center',
  },
  trackName: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  complementaryText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 8
  }
});

export default TrackDetailScreen;
