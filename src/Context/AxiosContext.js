import React from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import { API_URL } from '../Constants';

const AxiosContext = React.createContext(null);

const AxiosProvider = ({children}) => {
  const authContext = React.useContext(AuthContext);

  const authAxios = axios.create({ baseURL: API_URL });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.authState.loggedInUser.token}`;
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

export {AxiosContext, AxiosProvider};