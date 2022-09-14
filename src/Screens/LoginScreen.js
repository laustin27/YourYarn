// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput
  } from 'react-native';
  import React, {useContext, useState} from 'react';
  import {AuthContext} from '../Context/AuthContext';
import {inputStyles } from '../Styles/InputStyles';
import PrimaryButton from '../Helpers/PrimaryButton';
  
  function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const {authContext} = useContext(AuthContext);
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Your Yarn</Text>
        <View style={styles.form}>
          <TextInput
            style={inputStyles.login}
            placeholder="Username"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={text => setUsername(text)}
            value={username}
          />
  
          <TextInput
            style={inputStyles.login}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <PrimaryButton onPress={() => authContext.login(username, password)} text={'Sign In'} />
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
    }
  });
  
  export default LoginScreen;