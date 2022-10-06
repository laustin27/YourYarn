import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import ProjectsScreen from './ProjectsScreen';
import PatternScreen from './PatternsScreen';
import HomeScreen from './HomeScreen';
import YarnScreen from './YarnScreen';
import {Text, StyleSheet} from 'react-native';
import CreateIconAndModal from './Modals/CreateIconAndModal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Tab = createBottomTabNavigator();

const AddScreenComponent = () => {
  return null
}

function Header({children}) {
  return (
    <Text style={styles.header}>
      {children}
    </Text>
  );
}

export default function TabsScreen({navigation}) {
  return (
    <Tab.Navigator
        screenOptions={() => ({
            tabBarInactiveTintColor: 'grey',
            tabBarActiveTintColor: '#42385d',
            tabBarStyle: { paddingTop: 5 },
            headerRight: () => (
              <Pressable onPress={() => {navigation.navigate("Profile")}}>
                <FontAwesome name="user-circle" size={24} color="grey" style={{marginRight: 15}}/>
              </Pressable>
            ),
            headerTitle: (props) => <Header children={props.children} />,
            headerShadowVisible: true
        })}
    >
        <Tab.Screen name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ size, color }) => (
                          <FontAwesome name="home" size={size} color={color} />
                        )
                    }}
        />
        <Tab.Screen name="Yarn"     
                    component={YarnScreen}    
                    options={{
                        tabBarIcon: ({ size, color }) => (
                          <FontAwesome name="circle" size={size} color={color} />
                        )
                    }} 
        />
        <Tab.Screen name="Add" 
                    component={AddScreenComponent} 
                    options={({navigation}) => ({
                        tabBarButton: () => (<CreateIconAndModal navigation={navigation} />)
                    })}
        />
        <Tab.Screen name="Patterns" 
                    component={PatternScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                          <FontAwesome name="list-alt" size={size} color={color} />
                        )
                    }} 
        />
        <Tab.Screen name="Projects" 
                    component={ProjectsScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                          <Ionicons name="construct" size={size} color={color} />
                        )
                    }} 
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute', 
    left: -175,
    fontSize: 20
  }
});