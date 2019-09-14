import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingLeft: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
  }
});

export default Header;
