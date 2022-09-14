import App from './App';
import {AuthProvider} from './src/Context/AuthContext';
import {AxiosProvider} from './src/Context/AxiosContext';
import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const Root = () => {
  return (
      <AuthProvider>
        <AxiosProvider>
          <NavigationContainer theme={MyTheme}>
            <App /> 
          </NavigationContainer>
        </AxiosProvider>
      </AuthProvider>
  );
};

registerRootComponent(Root);