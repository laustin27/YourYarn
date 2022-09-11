import React, {useContext} from "react";
import { apiUrl } from "../Context/AxiosContext";
import axios from 'axios';

export default function usePublicAxios() {
    const publicAxios = axios.create({ baseURL: apiUrl });

    publicAxios.interceptors.request.use(
        config => {
          if (!config.headers['Access-Control-Allow-Origin']) {
            config.headers['Access-Control-Allow-Origin'] = '*';
          }

          if (!config.headers['Access-Control-Allow-Headers']) {
            config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
          }
    
          return config;
        },
        error => {
          return Promise.reject(error);
        },
      );
  
    return publicAxios;
}