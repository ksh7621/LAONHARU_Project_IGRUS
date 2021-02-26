import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import {ThemeProvider} from 'styled-components'
import Theme from "./Theme";

export default function HomeScreen({ navigation }) {
    return (
     
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', backgroundColor: 'palevioletred'}}>       
        {/* <Text style = {styles.title}>라{"\n"}온{"\n"}하{"\n"}루 </Text>              */}
        
        {/* <ThemeProvider theme = {theme.title}>
          <Text>라{"\n"}온{"\n"}하{"\n"}루 </Text> 
        </ThemeProvider> */}
      <Theme size ="50" marginLeft = "20">라{"\n"}온{"\n"}하{"\n"}루 </Theme>

      </View>
     
    );
}

  // const styles = StyleSheet.create({
  //   Theme: {              
  //       //fontFamily: "MapoGoldenPier",  
  //        fontSize: 50,   
  //   }
  // });