import React from 'react'
import {Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './Index'
import {Provider as StoreProvider} from 'react-redux'
import store from './store'

export default function Diary(){
  return (
    <StoreProvider store = {store}>
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
    </StoreProvider>
  )
}