import {
    View,
    Text,
    SafeAreaView,
    Platform
} from 'react-native';
import React from 'react';
import PrimaryButton from '../Helpers/PrimaryButton';
import { loginAndSignUpFormStyles } from '../Styles/LoginAndSignUpStyles';
import PreAuthWebContainer from '../Wrappers/PreAuthWebContainer';
import StyledLink from '../Helpers/StyledLink';
  
function Greeting({navigation}) {  
    return (
      <SafeAreaView style={loginAndSignUpFormStyles.container}>
        <Text style={loginAndSignUpFormStyles.logo}>Logo Here</Text>

        <PrimaryButton
            onPress={() => {
                navigation.navigate('Sign up')
            }} 
            text={'Sign Up'}
        />
        <View style={loginAndSignUpFormStyles.signUpText}>
            <Text>
                <Text>Already have an account? </Text>
                <StyledLink to={'Login'} text={'Login'} />
            </Text>
        </View>
     
      </SafeAreaView>
    );
};

function GreetingScreen({navigation}) {
    if (Platform.OS === 'web') {
        return (
            <PreAuthWebContainer>
                <Greeting navigation={navigation}/>
            </PreAuthWebContainer>
        )
    }

    return <Greeting navigation={navigation}/>
}

export default GreetingScreen;