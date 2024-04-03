/*
* File: Hangszerek.js
* Author: Paulusz Zsombor
* Date: 2024-04-03
* Github: https://github.com/PZsombor/
*/

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const api = 'http://localhost:8000/hangszerek';

const InstrumentsTable = () => {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setInstruments(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.Id}</Text>
      <Text style={styles.text}>{item.Név}</Text>
      <Text style={styles.text}>{item.Típus}</Text>
      <Text style={styles.text}>{item.Márka}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ID</Text>
        <Text style={styles.headerText}>Név</Text>
        <Text style={styles.headerText}>Típus</Text>
        <Text style={styles.headerText}>Márka</Text>
        <Text style={styles.headerText}>Év</Text>
      </View>
      <FlatList
        data={instruments}
        renderItem={renderItem}
        keyExtractor={item => item.Id.toString()}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <InstrumentsTable />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width:1220,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    width:300,
  },
});

export default App;