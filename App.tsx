import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './screens/home'
import bai1 from './screens/bai1';
import bai2 from './screens/bai2';
import bai3 from './screens/bai3';
import bai4 from './screens/bai4';
import bai5 from './screens/bai5';
import bai6 from './screens/bai6';
import bai7 from './screens/bai7';
import bai8 from './screens/bai8';
import bai9 from './screens/bai9';
import bai10 from './screens/bai10';

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

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="bai1" component={bai1} />
        <Stack.Screen name="bai2" component={bai2} />
        <Stack.Screen name="bai3" component={bai3} />
        <Stack.Screen name="bai4" component={bai4} />
        <Stack.Screen name="bai5" component={bai5} />
        <Stack.Screen name="bai6" component={bai6} />
        <Stack.Screen name="bai7" component={bai7} />
        <Stack.Screen name="bai8" component={bai8} />
        <Stack.Screen name="bai9" component={bai9} />
        <Stack.Screen name="bai10" component={bai10} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}