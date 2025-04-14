import {TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';


type MyButtonProps = {
    text: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle | TextStyle>;
    styleText?: StyleProp<ViewStyle | TextStyle>;
  };

const MyButton = ({text, onPress, style, styleText}: MyButtonProps)=>(
    <TouchableOpacity style={style} onPress={onPress}>
        <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
)


export default MyButton