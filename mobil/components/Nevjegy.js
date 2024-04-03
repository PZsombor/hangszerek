/*
* File: Nevjegy.js
* Author: Paulusz Zsombor
* Date: 2024-04-03
* Github: https://github.com/PZsombor/
*/

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Compa() {
  return (
      <View style={styles.container}>
        <Text>Névjegy</Text>
        <Text>Author: Paulusz Zsombor</Text>
        <Text>Date: 2024-04-03</Text>
        <Text>Github: https://github.com/PZsombor/</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});