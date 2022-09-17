import {StyleSheet} from 'react-native';

const alertStyles = StyleSheet.create({
    error: {
        backgroundColor: '#f8d7da',
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        borderRadius: 5,
        borderColor: '#f8d7da',
        borderWidth: 1,
        width: '40%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    errorText: {
        color: '#842029',
    }
});

export {alertStyles}