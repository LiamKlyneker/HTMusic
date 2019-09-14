import React from 'react';

import { View, Text } from 'react-native';

const Loader = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1C0406', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ color: 'white', fontSize: 16 }}>Patience is a virtue n.n ...</Text>
    </View>
  );
};

export default Loader;
