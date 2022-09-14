import {StyleSheet, Platform} from 'react-native';

const buttonStyles = (isPressed, disabled) => StyleSheet.create({
    primary: {
        fontSize: 16,
        ...Platform.select({
            web: {
              width: '40%'
            },
            default: {
                width: '80%',
            }
        }),
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 5,
        borderColor: '#42385d',
        borderWidth: 1,
        backgroundColor: '#42385d',
        opacity: disabled ? 0.3 : (isPressed ? .75 : 1)
    }
});

const buttonTextStyles = StyleSheet.create({
    primary: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    }
});

export {buttonStyles, buttonTextStyles}