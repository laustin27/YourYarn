import * as React from 'react';
import { Text, Pressable} from 'react-native';
import { buttonStyles, buttonTextStyles } from '../Styles/ButtonStyles';

function PrimaryButton({onPress, text, disabled, children}) {
    return (
        <Pressable 
            style={({pressed}) => buttonStyles(pressed, disabled).primary} 
            onPress={onPress}
            disabled={disabled}
        >
            {
                children 
                ? children
                : <Text style={buttonTextStyles.primary}>{text}</Text>
            }
        </Pressable>
    );
}

export default PrimaryButton