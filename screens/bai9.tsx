import { View,Text, FlatList, SectionList } from 'react-native';

const data = [
    {title: 'A', data: ['Apple', 'Avocado']},
    {title: 'B', data: ['Banana', 'Blueberry']},
]
export default () => (
    <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text style={{paddingLeft: 20}}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
            <Text style={{ fontWeight: 'bold', backgroundColor: '#33FF99', padding:10, marginLeft:5}}>{title}</Text>
        )}
    />
)