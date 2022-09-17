import * as React from 'react';
import {Text, View, Animated} from 'react-native';
import { alertStyles } from '../Styles/AlertStyles';
import FadeInAlert from '../Wrappers/FadeInAlert';

function ErrorAlert({message}) {
    return (
        <FadeInAlert>
            <View style={alertStyles.error}>
                <Text style={alertStyles.errorText}>{message}</Text>
            </View>
        </FadeInAlert>
    );
}

export default ErrorAlert