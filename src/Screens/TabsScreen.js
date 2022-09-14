import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import ProjectsScreen from './ProjectsScreen';
import ProfileScreen from './ProfileScreen';
import PatternScreen from './PatternsScreen';
import HomeScreen from './HomeScreen';
import YarnScreen from './YarnScreen';

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
        <Tab.Screen name="Home"     component={HomeScreen}     />
        <Tab.Screen name="Yarn"     component={YarnScreen}     />
        <Tab.Screen name="Patterns" component={PatternScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Profile"  component={ProfileScreen}  />
    </Tab.Navigator>
  );
}