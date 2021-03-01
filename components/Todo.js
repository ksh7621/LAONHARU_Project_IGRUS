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
import React, {useState} from 'react';


const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
        setTodos([
          ...todos,
          {id: Math.random().toString(), textValue: text, checked: false},
        ]);
      };

      const onRemove = id => e => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const onToggle = id => e => {
        setTodos(
          todos.map(todo =>
            todo.id === id ? {...todo, checked: !todo.checked} : todo,
          ),
        );
      };
    

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.appTitle}>오늘 일정</Text>
          <View style={styles.card}>
             
            <TodoInsert onAddTodo={addTodo} /> 
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />  

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
    marginBottom: 20,
    fontWeight: '300',
    textAlign: 'center',
    
  },
  card: {
    backgroundColor: 'lightgray',
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


