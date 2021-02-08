import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title, IconButton, } from 'react-native-paper'



function Header({ titleText, iconButton }) {
    return (
        <Appbar.Header style={styles.headerContainer}>           
            <View style={styles.container}>                           
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'black',
        fontFamily: "MapoGoldenPier", 

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff'
    },
    
})

export default Header