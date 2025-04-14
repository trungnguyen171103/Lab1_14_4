import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Project1() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
      <Text style={styles.text}>My name's Huỳnh Minh Hoàng</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#00FFFF'
  },
  text: {
    fontSize: 20,
    color:'#FF0000',
    fontWeight: 'bold'
  }
});
