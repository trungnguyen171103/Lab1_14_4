import {Text, View, ScrollView, StyleSheet} from 'react-native';


export default () => (
    
    <ScrollView>
        {[...Array(20)].map((_, i) => (
            <Text key={i} style={{padding: 15}}> Item {i+1}</Text>
        ))}
    </ScrollView>
);