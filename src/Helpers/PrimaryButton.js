import * as React from 'react';
import { Text, Pressable} from 'react-native';
import { buttonStyles } from '../Styles/ButtonStyles';

function PrimaryButton({onPress, text}) {
    return (
        <Pressable style={buttonStyles.primary} onPress={onPress}>
            <Text style={buttonStyles.primaryButtonText}>{text}</Text>
        </Pressable>
    );
}

export default PrimaryButton