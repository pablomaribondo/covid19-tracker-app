import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './components/Card';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Coronavirus Tracker'/>
      <View style={styles.updateContainer}>
        <Text style={styles.updateText}>Last updated: 14:30:10</Text>
      </View>
      <View style={styles.list}>
        <Card
          title='Cases'
          color='#F8F399'
          icon={require('./assets/cases.png')}
          data='79532'
        />
        <Card
          title='Suspected cases'
          color='#DACA1A'
          icon={require('./assets/suspectedCases.png')}
          data='5248'
        />
        <Card
          title='Confirmed cases'
          color='#D88A20'
          icon={require('./assets/confirmedCases.png')}
          data='74284'
        />
        <Card
          title='Deaths'
          color='#B3090D'
          icon={require('./assets/deaths.png')}
          data='2009'
        />
        <Card
          title='Recovered'
          color='#658D26'
          icon={require('./assets/recovereds.png')}
          data='14938'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000'
  },
  updateContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  updateText: {
    color: '#fff'
  },
  list: {
    alignItems: 'center'
  }
});
