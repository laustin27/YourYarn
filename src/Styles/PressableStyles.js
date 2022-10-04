import {StyleSheet} from 'react-native';

const pressableStyles = (isPressed) => StyleSheet.create({
    icon: {
        opacity: isPressed ? .5 : 1
    },
    addButton: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: isPressed ? '#F0F0F0' : 'white'
    }
});

export {pressableStyles}