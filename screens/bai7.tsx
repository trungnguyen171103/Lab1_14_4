import React, { useState } from 'react';
import { View,Text,TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function bai7() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>What's your name?</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style = {{borderBottomWidth: 1, marginBottom: 10, width: '70%', padding: 10}}
        placeholder='Enter name'
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Hello '+ name)}>
        <Text style={styles.buttonText}>submit</Text>
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