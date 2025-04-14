import React from 'react';
import { View,Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import MyButton from './MyButton';

export default function Bai3() {
  return (
    <View style={styles.container}>
      <MyButton
        text = "Click Here"
        onPress={() => alert('Hello! Việt Nam')}
        style={styles.button}
        styleText={styles.buttonText}
      />
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
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});