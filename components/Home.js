import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';



export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginLeft: 20 }}>       
        <Text style = {styles.title}>라{"\n"}온{"\n"}하{"\n"}루 </Text>        
      </View>
    );
}

  const styles = StyleSheet.create({
    title: {              
        fontFamily: "MapoGoldenPier",  
         fontSize: 50,   
    }
  });