// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Platform
} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import {inputStyles } from '../Styles/InputStyles';
import PrimaryButton from '../Helpers/PrimaryButton';
import { Link } from '@react-navigation/native';
import { loginAndSignUpFormStyles, webLoginAndSignUpStyles } from '../Styles/LoginAndSignUpStyles';

function WebLogin() {
    return (
        <SafeAreaView style={webLoginAndSignUpStyles.container}>
            <View style={webLoginAndSignUpStyles.leftSection}>
                <LoginForm />
            </View>
            <View style={webLoginAndSignUpStyles.rightSection} />
        </SafeAreaView>
    )
}
  
function LoginForm({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoggingIn, setLoggingIn] = React.useState(false);
  
    const {authContext} = useContext(AuthContext);
  
    return (
      <SafeAreaView style={loginAndSignUpFormStyles.container}>
        <Text style={loginAndSignUpFormStyles.logo}>Logo Here</Text>
        <View style={loginAndSignUpFormStyles.form}>
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
            onPress={async () => {
                setLoggingIn(true);
                await authContext.login(username, password);
                setLoggingIn(false);
            }} 
            text={isLoggingIn ? 'Signing in...' : 'Sign in'}
            disabled={isLoggingIn || username == '' || password == ''}
        />
        <View style={loginAndSignUpFormStyles.signUpText}>
            <Text>
                <Text>Don't have an account? </Text>
                <Link to={{ screen: 'Sign up'}} style={{fontWeight: 'bold'}}>
                    Create one now
                </Link>
            </Text>
        </View>
     
      </SafeAreaView>
    );
};

function LoginScreen({navigation}) {
    if (Platform.OS === 'web') {
        return <WebLogin navigation={navigation} />
    }

    return <LoginForm navigation={navigation} />
}

export default LoginScreen;