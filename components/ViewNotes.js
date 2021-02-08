import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
import { addnote, deletenote } from './notesApp'

function ViewNotes({ navigation }) {
    // const [notes, setNotes] = useState([])
    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    const addNote = note => {
        console.log(note)
        dispatch(addnote(note))
    }

    const deleteNote = id =>dispatch(deletenote(id))

    // const addNotes = note => {
    //     note.id = notes.length + 1
    //     setNotes([...notes, note])
    // }

    return (
        <>
            <Header titleText='Diary' />
            <View style={styles.container}>
                {notes.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>저장된 일기가 없습니다.</Text>
                    </View>
                ) : (
                        <FlatList
                            data={notes}
                            renderItem={({ item }) => (
                                <List.Item
                                    title={item.note.noteTitle}
                                    description={item.note.noteDescription}
                                    descriptionNumberOfLines={1}
                                    titleStyle={styles.listTitle}
                                    onPress = {()=> deleteNote(item.id)}
                                />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    )}

                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='일기 추가하기'
                    onPress={() => navigation.navigate('AddNotes', {
                        addNote
                    })
                    }
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: "MapoGoldenPier", 
    },
    fab: {
        backgroundColor: '#219653',
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10,
        fontFamily: "MapoGoldenPier", 
    },
    listTitle: {
        fontSize: 20
    }

})

export default ViewNotes