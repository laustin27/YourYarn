import {StyleSheet, Platform} from 'react-native';

const buttonStyles = (isPressed, disabled, width) => StyleSheet.create({
    primary: {
        fontSize: 16,
        ...Platform.select({
            web: {
              width: width ? width : '40%'
            },
            default: {
                width: width ? width : '80%',
            }
        }),
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        borderColor: '#42385d',
        borderWidth: 1,
        backgroundColor: '#42385d',
        opacity: disabled ? 0.3 : (isPressed ? .75 : 1),
        boxShadow: '2px 2px 5px #888',
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