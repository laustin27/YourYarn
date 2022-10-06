// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Platform,
    Alert
} from 'react-native';
import React from 'react';
import {AuthContext} from '../Context/AuthContext';
import PrimaryButton from '../Helpers/PrimaryButton';
import { loginAndSignUpFormStyles } from '../Styles/LoginAndSignUpStyles';
import ErrorAlert from '../Helpers/ErrorAlert';
import PreAuthWebContainer from '../Wrappers/PreAuthWebContainer';
import StyledLink from '../Helpers/StyledLink';
import {FormGroup, FormGroupSpacer } from '../Helpers/FormGroup';
import ValidationRules from '../ValidationRules';
  
function LoginForm() {
    const [username, setUsername]         = React.useState('');
    const [password, setPassword]         = React.useState('');
    const [isLoggingIn, setLoggingIn]     = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
  
    const {authContext} = React.useContext(AuthContext);
  
    return (
      <SafeAreaView style={loginAndSignUpFormStyles.container}>
        <Text style={loginAndSignUpFormStyles.logo}>Logo Here</Text>
        {
            errorMessage && 
            <ErrorAlert message={errorMessage} />
        }
        <View style={loginAndSignUpFormStyles.form}>
            <FormGroup
                label={'Username'}
                value={username}
                onChange={setUsername}
                maxLength={ValidationRules.username.maxLength}
            />
            <FormGroupSpacer />
            <FormGroup
                label={'Password'}
                value={password}
                onChange={setPassword}
                isSecure={true}
                maxLength={ValidationRules.password.maxLength}
            />
        </View>
        <PrimaryButton 
            onPress={async () => {
                setLoggingIn(true);
                let loginResponse = await authContext.login(username, password);
                let errorMessage = loginResponse.errorMessage;

                if (errorMessage) {
                    if (Platform.OS == 'web') {
                        setErrorMessage(errorMessage);
                    } else {
                        Alert.alert(errorMessage)
                    }
                    
                }
                setLoggingIn(false);
            }} 
            text={isLoggingIn ? 'Signing in...' : 'Sign in'}
            disabled={isLoggingIn || username == '' || password == ''}
        />
        <View style={loginAndSignUpFormStyles.signUpText}>
            <Text>
                <Text>Don't have an account? </Text>
                <StyledLink to={'Sign up'} text={'Create one now'} />
            </Text>
        </View>
     
      </SafeAreaView>
    );
};

function LoginScreen() {
    if (Platform.OS === 'web') {
        return (
            <PreAuthWebContainer>
                <LoginForm />
            </PreAuthWebContainer>
        )
    }

    return <LoginForm />
}

export default LoginScreen;