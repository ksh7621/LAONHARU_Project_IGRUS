import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Agenda from './components/Agenda';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Calendar'){
              iconName = focused ? 'calendar-outline' : 'calendar-outline';
            } else if (route.name === 'Agenda'){
              iconName = focused ? 'apps-outline' : 'apps-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size}  color={color}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
        >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Agenda" component={Agenda} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

