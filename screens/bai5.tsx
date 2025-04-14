import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      box: {
        width: 80,
        height: 80,
        backgroundColor: '#66FFFF',
        justifyContent: 'center',
        alignItems: 'center'
      }
});


type MyText = {
    text: string;
  };

const Square = ({text}: MyText) => (
    <View style={styles.box}>
        <Text>{text}</Text>
    </View>
)

export default () => (
    <View style={styles.container}>
        <Square text="1"/>
        <Square text="2"/>
        <Square text="3"/>
    </View>
)