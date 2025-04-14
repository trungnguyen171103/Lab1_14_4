import React, { useState } from 'react';
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function bai4() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style = {styles.text}> You click {count} times</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count +1)}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 15,
    fontSize: 20,
    color:'#FF0000',
    fontWeight: 'bold'
  }
});