/*
* File: App.js
* Author: Paulusz Zsombor
* Date: 2024-04-03
* Github: https://github.com/PZsombor/
*/

import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
 
import Hangszerek from './components/Hangszerek.js';
import Nevjegy from './components/Nevjegy.js';
 
export default function App() {
  const [selectedTab, setSelectedTab] = useState('Névjegy');
 
  let setTab = (tab) => {
    setSelectedTab(tab);
  }
  let selectTab = () => {
     switch(selectedTab) {
      case 'Hangszerek':
        return <Hangszerek />
      case 'Névjegy':
        return <Nevjegy />
      default:
        return
    }
  }  
 
  return (
    <View style={styles.container}>
        <View style={styles.buttonBox}>
          <Button onPress={() => setTab('Hangszerek')} title='Hangszerek' color='grey'/>
          <Button onPress={() => setTab('Névjegy')} title='Névjegy' color='grey'/>
          <View style={styles.component}>
            {selectTab()}
          </View> 
        </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBox: {
    flex: 1,
    width: '100%',
  },
  component: {
    flex: 1,
  }  
});
