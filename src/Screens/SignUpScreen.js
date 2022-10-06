// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Platform,
    Alert
  } from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import {inputStyles } from '../Styles/InputStyles';
import PrimaryButton from '../Helpers/PrimaryButton';
import { loginAndSignUpFormStyles } from '../Styles/LoginAndSignUpStyles';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import PreAuthWebContainer from '../Wrappers/PreAuthWebContainer';
import { FormGroupSpacer, FormGroup } from '../Helpers/FormGroup';
import ValidationRules from '../ValidationRules';
  
function SignUpForm() {
    const [username, setUsername]                       = React.useState('');
    const [password, setPassword]                       = React.useState('');
    const [confirmPassword, setConfirmPassword]         = React.useState('');
    const [passwordsDoNotMatch, setPasswordsDoNotMatch] = React.useState(false);
    const [isSigningUp, setSigningUp]                   = React.useState(false);
    const [errorMessage, setErrorMessage]               = React.useState('');
  
    const {authContext} = useContext(AuthContext);

    React.useEffect(() => {
        setPasswordsDoNotMatch(
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
        {
            errorMessage ? <ErrorAlert message={errorMessage} /> : null
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
                hasError={passwordsDoNotMatch}
                maxLength={ValidationRules.password.maxLength}
            />
            <FormGroupSpacer />
            <FormGroup
                label={'Confirm Password'}
                value={confirmPassword}
                onChange={setConfirmPassword}
                isSecure={true}
                hasError={passwordsDoNotMatch}
                maxLength={ValidationRules.password.maxLength}
            />
            {passwordsDoNotMatch && <Text style={{color: '#E42026'}}>Please enter the same password twice</Text>}
            
        </View>
        <PrimaryButton 
            onPress={async () => {
                setSigningUp(true);
                let signUpResponse = await authContext.signUp(username, password);
                let errorMessage = signUpResponse.errorMessage;

                if (errorMessage) {
                    if (Platform.OS == 'web') {
                        setErrorMessage(errorMessage);
                    } else {
                        Alert.alert(errorMessage)
                    }
                    
                }
                setSigningUp(false);
            }} 
            text={isSigningUp ? 'Creating account...' : 'Sign up'}
            disabled={isSigningUp || passwordsDoNotMatch || username == '' || password == ''}
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