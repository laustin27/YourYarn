// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/

import React, {createContext, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';

const AxiosContext = createContext(null);

const apiUrl = "https://lake-cherry-troodon.glitch.me"

const AxiosProvider = ({children}) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({ baseURL: apiUrl });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.authState.userToken}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  return (
    <AxiosContext.Provider value={{authAxios}}>
        {children}
    </AxiosContext.Provider>
  );
};

export {AxiosContext, AxiosProvider, apiUrl};