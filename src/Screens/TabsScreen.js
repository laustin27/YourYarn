import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Home from '../Home/Home';
import Yarn from '../Yarn/Yarn';
import Patterns from '../Patterns/Patterns';
import Projects from '../Projects/Projects';
import Profile from '../Profile/Profile';

const Tab = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                switch(route.name) {
                    case 'Home'     : return <FontAwesome name="home"      size={size} color={color} />;
                    case 'Yarn'     : return <FontAwesome name="circle"    size={size} color={color} />;
                    case 'Patterns' : return <FontAwesome name="list-alt"  size={size} color={color} />;
                    case 'Projects' : return <Ionicons    name="construct" size={size} color={color} />;
                    case 'Profile'  : return <FontAwesome name="user"      size={size} color={color} />;
                }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'tomato',
        })}
    >
        <Tab.Screen name="Home"     component={Home}     />
        <Tab.Screen name="Yarn"     component={Yarn}     />
        <Tab.Screen name="Patterns" component={Patterns} />
        <Tab.Screen name="Projects" component={Projects} />
        <Tab.Screen name="Profile"  component={Profile}  />
    </Tab.Navigator>
  );
}