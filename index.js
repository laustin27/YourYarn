import App from './App';
import {AuthProvider} from './src/Context/AuthContext';
import {AxiosProvider} from './src/Context/AxiosContext';
import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import {NavigationContainer} from '@react-navigation/native';

const Root = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AxiosProvider>
          <App /> 
        </AxiosProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

registerRootComponent(Root);