import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native';

const Todo = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.appTitle}>To do list</Text>
          <View style={styles.card}>
            <TodoInsert />
            <TodoList />            
          </View>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  appTitle: {
    fontFamily: "MapoGoldenPier",
    color: 'black',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',  
  },
  card: {
    backgroundColor: 'skyblue',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },  
  
});

export default Todo;


