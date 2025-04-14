import React from 'react';
import { View, Text, Button,TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    home: undefined;
    bai1: undefined;
    bai2: undefined;
    bai3: undefined;
    bai4: undefined;
    bai5: undefined;
    bai6: undefined;
    bai7: undefined;
    bai8: undefined;
    bai9: undefined;
    bai10: undefined;
  };
  
type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

export default function home({ navigation }: Props) {
    const bai = [
        'bai1', 'bai2', 'bai3', 'bai4', 'bai5',
        'bai6', 'bai7', 'bai8', 'bai9', 'bai10',
      ] as const;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Danh sách bai tap</Text>
            {bai.map((bai, index) => (
                    <View key={index} style={{ marginVertical: 5 }}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(bai)}>
                            <Text style={styles.buttonText}>bai {index + 1}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});