import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import Theme from "./Theme";

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginLeft: 20,}}>       
        {/* <Text style = {styles.title}>라{"\n"}온{"\n"}하{"\n"}루 </Text>              */}
        <Theme size = '50'>라{"\n"}온{"\n"}하{"\n"}루</Theme>
      </View>
    );
}

  // const styles = StyleSheet.create({
  //   Theme: {              
  //       //fontFamily: "MapoGoldenPier",  
  //        fontSize: 50,   
  //   }
  // });