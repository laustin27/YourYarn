// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import {Alert} from 'react-native';
import usePublicAxios from '../Hooks/UsePublicAxios';

const AuthContext = React.createContext(null);

function AuthProvider({children}) {
  const publicAxios = usePublicAxios();

  const [authState, authDispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'LOGIN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'LOGOUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await SecureStore.getItemAsync('token');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      authDispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      login: async (username, password) => {
        try {
          const response = await publicAxios.post('/login', {
            username,
            password,
          });
    
          const {token} = response.data;

          SecureStore.setItemAsync('token', token);
          authDispatch({ type: 'LOGIN', token: token });
        } catch (error) {
          Alert.alert('Incorrect username or password');
        }
      },
      logout: () => authDispatch({ type: 'LOGOUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        authDispatch({ type: 'LOGIN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{authContext, authState}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};