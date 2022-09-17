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
import { loginAndSignUpFormStyles } from '../Styles/LoginAndSignUpStyles';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import PreAuthWebContainer from '../Wrappers/PreAuthWebContainer';
  
function SignUpForm() {
    const [username, setUsername]                           = React.useState('');
    const [password, setPassword]                           = React.useState('');
    const [confirmPassword, setConfirmPassword]             = React.useState('');
    const [showPasswordsMatchError, setPasswordsMatchError] = React.useState(false);
    const [isSigningUp, setSigningUp]                       = React.useState(false);
  
    const {authContext} = useContext(AuthContext);

    React.useEffect(() => {
        setPasswordsMatchError(
            password != '' 
            && confirmPassword != ''
            && (password != confirmPassword)
        );
    }, [password, confirmPassword])
  
    return (
      <SafeAreaView style={loginAndSignUpFormStyles.container}>
        <Link to={{ screen: 'Login'}} style={loginAndSignUpFormStyles.backButton}>
            <FontAwesome name="caret-left" size={16}/>
            <Text>  Back to Login</Text>
        </Link>
        <Text style={loginAndSignUpFormStyles.logo}>Create your account!</Text>
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

            <Text style={{marginTop: '4%'}}>Confirm Password</Text>
            <TextInput
                style={inputStyles.login}
                secureTextEntry
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
            />
            {showPasswordsMatchError && <Text style={{color: 'red'}}>Please enter the same password twice</Text>}
            
        </View>
        <PrimaryButton 
            onPress={() => {
                setSigningUp(true);
                authContext.signUp(username, password);
            }} 
            text={isSigningUp ? 'Creating account...' : 'Sign up'}
            disabled={isSigningUp || showPasswordsMatchError || username == '' || password == ''}
        />
      </SafeAreaView>
    );
};

function SignUpScreen() {
    if (Platform.OS === 'web') {
        return (
            <PreAuthWebContainer>
                <SignUpForm/>
            </PreAuthWebContainer>
        )
    }

    return <SignUpForm />
}
  
export default SignUpScreen;