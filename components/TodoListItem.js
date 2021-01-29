import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const TodoListItem = () => {
  return (
    <View style={styles.container}>

      {/* 전 */}
      {/* <TouchableOpacity>
        <View style={styles.circle} />
      </TouchableOpacity>
      <Text style={styles.text}>TodoList items will be shown here</Text> */}

       {/* 후 */}
      <TouchableOpacity>
        <View style={styles.completeCircle}>
          <Icon name='checkbox-outline' size={30} color="#3143e8" />
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, styles.strikeText]}>
        Items will be shown here
      </Text>


      {/* 삭제 아이콘 */}
    <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.buttonText}>
      <Icon name="trash-outline" size={30} color="#e33057" />
    </Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;