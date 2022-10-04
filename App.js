// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import React from 'react';
import {AuthContext} from './src/Context/AuthContext';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import TabsScreen from './src/Screens/TabsScreen';
import LoadingScreen from './src/Screens/LoadingScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import GreetingScreen from './src/Screens/GreetingScreen';
import AddYarnModal from './src/Screens/Modals/AddYarnModal';
import AddPatternModal from './src/Screens/Modals/AddPatternModal';
import StartProjectModal from './src/Screens/Modals/StartProjectModal';
import { addModalOptions, cardAnimationConfig } from './src/Constants';

const Stack = createStackNavigator();

const App = () => {
  const {authState} = React.useContext(AuthContext);

  return (
    <Stack.Navigator>
      {authState.isLoading ? <Stack.Screen name="Loading" component={LoadingScreen} /> : null}
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
            <React.Fragment>
              <Stack.Screen 
                name="Tabs" 
                component={TabsScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen 
                name="Add Yarn" 
                component={AddYarnModal}
                options={addModalOptions}
              />
              <Stack.Screen 
                name="Add Pattern" 
                component={AddPatternModal}
                options={addModalOptions}
              />
              <Stack.Screen 
                name="Start Project" 
                component={StartProjectModal}
                options={addModalOptions}
              />
            </React.Fragment>
          )}
    </Stack.Navigator>
  )
};

export default App;