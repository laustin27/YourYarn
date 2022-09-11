// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
  } from 'react-native';
  import React, {useContext, useState} from 'react';
  import {AuthContext} from '../Context/AuthContext';
  
  function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const {authContext} = useContext(AuthContext);
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Your Yarn</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#fefefe"
            autoCapitalize="none"
            onChangeText={text => setUsername(text)}
            value={username}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fefefe"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <Button title="Login" style={styles.button} onPress={() => authContext.login(username, password)} />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffacaf',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
    },
    logo: {
      fontSize: 20,
      color: '#fff',
      margin: '5%',
    },
    form: {
      width: '80%',
      margin: '5%',
    },
    input: {
      fontSize: 20,
      color: '#fff',
      paddingBottom: 10,
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      marginVertical: 20,
    },
    button: {},
  });
  
  export default LoginScreen;