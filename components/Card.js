import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <Text style={{...styles.title, color: props.color}}>{props.title}</Text>
      <View style={styles.dataContainer}>
        <Image
          source={props.icon}
          style={styles.dataImage}
        />
        <Text style={{...styles.dataText, color: props.color}}>{props.data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#202020',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10
  },
  title: {
    marginBottom: 15,
    fontSize: 15
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dataImage: {
    width: 40,
    height: 40
  },
  dataText: {
    fontSize: 20
  }
});

export default Card;