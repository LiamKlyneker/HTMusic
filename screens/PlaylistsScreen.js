import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { StyleSheet, SafeAreaView, View, ScrollView, Button } from 'react-native';

import Header from '#components/Header';
import Loader from '#components/Loader';
import PlaylistTile from '#components/PlaylistTile';

import useActions from '#hooks/useActions';
import { getPlaylistsByCountry } from '#modules/Playlists/actions';
import { getPlaylistsData } from '#modules/Playlists/selectors';
import { getUserData } from '#modules/User/selectors';

const PlaylistsScreen = ({ navigation }) => {
  /* Selectors */
  const { userList: userPlaylists, isFetchingList } = useSelector(getPlaylistsData());
  const { token, userData } = useSelector(getUserData());

  /* Actions */
  const actions = useActions({
    getPlaylistsByCountry,
  });

  /* Effects */
  useEffect(() => {
    actions.getPlaylistsByCountry({ token, country: userData.country });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isFetchingList && <Loader />}
      {!isFetchingList && (
        <ScrollView style={styles.scrollView}>
          <Header title="Curated Playlists For You" />
          <View style={styles.playlistLists}>
            {userPlaylists.map((playlist, index) => (
              <View
                key={playlist.id}
                style={{
                  ...styles.playlistLists__item,
                  ...((index % 2 !== 0) && styles.playlistLists__item_even)
                }}
              >
                <PlaylistTile navigation={navigation} data={playlist} />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

PlaylistsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C0406',
  },
  scrollView: {
    paddingTop: 24,
  },
  title: {
    fontSize: 30,
  },
  playlistLists: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    padding: 16,
  },
  playlistLists__item: {
    width: '47.9%',
    marginBottom: 16,
    marginRight: 16,
  },
  playlistLists__item_even: {
    marginRight: 0,
  }
});

export default PlaylistsScreen;
