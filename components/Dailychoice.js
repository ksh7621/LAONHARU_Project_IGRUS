import * as React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './Todo';
import Diary from './Diary';


function Home({ navigation }) {;
    return (
      <View style ={styles.container}>
        <View style = {styles.text}><Text>선택화면</Text></View>
        <View style = {styles.footer}>
        <View style = {styles.button1}>
        <Button          
          title="줄글"
          onPress={() => navigation.navigate('줄글')}
          color = 'gray'      
        />  
        </View>

        <View style = {styles.button2}>      
        <Button 
          title="오늘 일정"
          onPress={() => navigation.navigate('오늘 일정')}
          color = 'navy'         
        /> 
        </View>
        </View>
      </View>
    );
  }

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="선택" component={Home} />
      <Stack.Screen name="줄글" component={Diary} />
      <Stack.Screen name="오늘 일정" component={Todo} />
      
    </Stack.Navigator>
  );
}

export default function Dailychoice() {
    return (
      <MyStack />
    );
  }


  const styles = StyleSheet.create({
    container:{
      flex:1, 
      padding: 10,
      backgroundColor: 'white',
      alignItems: 'center', 
      
    //justifyContent: 'space-around', 
    },

    text:{
    flex:1,  
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'MapoGoldenPier',
   },

  footer: {     
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 5,
      width:'100%',
      height:'15%',
      backgroundColor: 'white',
    },
    button1:{
      width: '100%',
      height: '50%'
    },
    button2:{
      width: '100%',
      height: '50%'
    },
    title: {
      fontSize: 15,
    },
    

  });
