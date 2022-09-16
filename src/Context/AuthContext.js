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
            password,
          });

          if (response.data.success == false) {
            Alert.alert("Invalid username or password");
          } else {
            const user = response.data;

            await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));

            authDispatch({ type: 'LOGIN', loggedInUser: user});
          }
        } catch (error) {
          Alert.alert('Error occurred while logging in');
        }
      },
      logout: () => {
        AsyncStorage.removeItem(USER_KEY);
        authDispatch({ type: 'LOGOUT' });
      },
      signUp: async (username, password) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token
        const response = await publicAxios.post('/createAccount', {
          username,
          password,
        });
    
        const user = response.data;

        await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
        authDispatch({ type: 'LOGIN', loggedInUser: user});
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