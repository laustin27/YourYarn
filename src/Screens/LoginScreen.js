// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform
  } from 'react-native';
  import React, {useContext, useState} from 'react';
  import {AuthContext} from '../Context/AuthContext';
import {inputStyles } from '../Styles/InputStyles';
import PrimaryButton from '../Helpers/PrimaryButton';

function WebLogin() {
    return (
        <SafeAreaView style={webStyles.container}>
            <View style={webStyles.leftSection}>
                <LoginForm />
            </View>
            <View style={webStyles.rightSection} />
        </SafeAreaView>
    )
}
  
function LoginForm() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoggingIn, setLoggingIn] = React.useState(false);
  
    const {authContext} = useContext(AuthContext);
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.logo}>Logo Here</Text>
        <View style={styles.form}>
            <Text>Username</Text>
            <TextInput
                style={inputStyles.login}
                autoCapitalize="none"
                onChangeText={text => setUsername(text)}
                value={username}
            />
  
            <Text style={{marginTop: '4%'}}>Password</Text>
            <TextInput
                style={inputStyles.login}
                secureTextEntry
                onChangeText={text => setPassword(text)}
                value={password}
            />
        </View>
        <PrimaryButton 
            onPress={() => {
                setLoggingIn(true);
                authContext.login(username, password);
            }} 
            text={isLoggingIn ? 'Signing in...' : 'Sign in'}
            disabled={isLoggingIn || username == '' || password == ''}
        />
      </SafeAreaView>
    );
};

function LoginScreen() {
    if (Platform.OS === 'web') {
        console.log('on web');
        return <WebLogin />
    }

    return <LoginForm />
}


const webStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    leftSection : {
        height: '100vh',
        width: '50%',
        boxShadow: '1px 0 5px #888',
        zIndex: 99
    },
    rightSection : {
        height: '100vh',
        width: '50%',
        backgroundColor: '#ffcfda',
    }
});
  
const styles = StyleSheet.create({
    container: {
        fontFamily: 'San Francisco',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
         ...Platform.select({
            web: {
                justifyContent: 'center',
            },
            default: {
                justifyContent: 'flex-start',
            }
        }),
        width: '100%',
    },
    logo: {
        fontSize: 20,
        color: '#42385d',
        margin: '5%'
    },
    form: {
        ...Platform.select({
            web: {
                width: '60%',
            },
            default: {
                width: '80%',
            }
        }),
        marginTop: '3%',
        marginBottom: '6%',
    }
});
  
export default LoginScreen;