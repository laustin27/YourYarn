// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import React from 'react';
import {AuthContext} from './src/Context/AuthContext';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import TabsScreen from './src/Screens/TabsScreen';
import LoadingScreen from './src/Screens/LoadingScreen';

const Stack = createStackNavigator();

const App = () => {
  const {authState} = React.useContext(AuthContext);

  return (
    <Stack.Navigator>
      {authState.isLoading && <Stack.Screen name="Loading" component={LoadingScreen} />}
      {authState.loggedInUser == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: authState.isSignout ? 'pop' : 'push',
              }}
            />
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