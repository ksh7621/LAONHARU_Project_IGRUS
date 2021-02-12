import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './Todo';
import Diary from './Diary';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button

          title="Go to Diary"
          onPress={() => navigation.navigate('Diary')}
        />
         <Button

          title="Go to Todo"
          onPress={() => navigation.navigate('Todo')}
        />
      </View>
    );
  }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Diary" component={Diary} />
      <Stack.Screen name="Todo" component={Todo} />
      
    </Stack.Navigator>
  );
}

export default function Dailychoice() {
    return (
      <MyStack />
    );
  }

