// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import React from 'react';
import {AuthContext} from './src/Context/AuthContext';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import TabsScreen from './src/Screens/TabsScreen';
import LoadingScreen from './src/Screens/LoadingScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import GreetingScreen from './src/Screens/GreetingScreen';

const Stack = createStackNavigator();

const App = () => {
  const {authState} = React.useContext(AuthContext);

  return (
    <Stack.Navigator>
      {authState.isLoading && <Stack.Screen name="Loading" component={LoadingScreen} />}
      {authState.loggedInUser == null ? (
            <React.Fragment>
              <Stack.Screen
                name="Greetings"
                options={{
                  headerShown: false,
                  animationTypeForReplace: 'push',
                }}
              >
                {(props) => <GreetingScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: false,
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: authState.isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen
                name="Sign up"
                component={SignUpScreen}
                options={{
                  headerShown: false,
                  animationTypeForReplace : 'push',
                }}
              />
            </React.Fragment>
          ) : (
            // User is signed in
            <Stack.Screen 
              name="Dashboard" 
              component={TabsScreen}
              options={{headerShown: false}}
               />
          )}
    </Stack.Navigator>
  )
};

export default App;