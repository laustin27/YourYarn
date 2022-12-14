import React from 'react';
import {Alert} from 'react-native';
import { USER_KEY } from '../Constants';
import usePublicAxios from '../Hooks/UsePublicAxios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext(null);

function AuthProvider({children}) {
  const publicAxios = usePublicAxios();

  const [authState, authDispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_LOGGED_IN_USER':
          return {
            ...prevState,
            isLoading: false,
            loggedInUser : action?.loggedInUser
          };
        case 'LOGIN':
          return {
            ...prevState,
            isSignout: false,
            loggedInUser : action?.loggedInUser
          };
        case 'LOGOUT':
          return {
            ...prevState,
            isSignout: true,
            loggedInUser : null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      loggedInUser : null
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userJson;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userJson = await AsyncStorage.getItem(USER_KEY);
      } catch (e) {
        // Restoring token failed
      }

      let user;
      if (userJson) { user = JSON.parse(userJson); }

      // After restoring token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      authDispatch({ type: 'RESTORE_LOGGED_IN_USER', loggedInUser: user });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      login: async (username, password) => {
        try {
          const response = await publicAxios.post('/login', {
            username,
            password
          });

          const user = response.data;

          AsyncStorage.setItem(USER_KEY, JSON.stringify(user));

          authDispatch({ type: 'LOGIN', loggedInUser: user });
          return { success: true };
        } catch (error) {
          return {
            success: false,
            errorMessage: error.response.status == 400
              ? 'Invalid username or password'
              : 'Error occurred while logging in'
          };
        }
      },
      logout: () => {
        AsyncStorage.removeItem(USER_KEY);
        authDispatch({ type: 'LOGOUT' });
      },
      signUp: async (username, password) => {
        try {
          const requestBody = {
            account: {
              username: username,
              password: password
            }
          }

          const response = await publicAxios.post('/createAccount', requestBody);
      
          const user = response.data;

          await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
          authDispatch({ type: 'LOGIN', loggedInUser: user});
        } catch (error) {
          return {
            success: false,
            errorMessage: 'Error occurred while creating account'
          };
        }
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