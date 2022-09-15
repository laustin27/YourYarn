import {
    StyleSheet,
    Platform
} from 'react-native';

const webLoginAndSignUpStyles = StyleSheet.create({
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
  
const loginAndSignUpFormStyles = StyleSheet.create({
    container: {
        fontFamily: 'San Francisco',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        ...Platform.select({
            web: {
                justifyContent: 'center'
            },
            default: {
                justifyContent: 'flex-start'
            }
        }),
        width: '100%',
    },
    logo: {
        fontSize: 20,
        color: '#42385d',
        margin: '5%',
        fontWeight: 'bold'
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
        marginBottom: '6%'
    },
    signUpText: {
        marginTop: '5%'
    },
    backButton: {
        alignSelf: 'flex-start',
        ...Platform.select({
            web: {
                marginHorizontal: '21%',
            },
            default: {
                marginHorizontal: '10%',
                marginBottom: '5%'
            }
        }),
    }
});

export {webLoginAndSignUpStyles, loginAndSignUpFormStyles}