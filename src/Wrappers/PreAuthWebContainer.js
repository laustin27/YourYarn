import {
    View,
    SafeAreaView
} from 'react-native';
import React from 'react';
import { webLoginAndSignUpStyles } from '../Styles/LoginAndSignUpStyles';

export default function PreAuthWebContainer({children}) {
    return (
        <SafeAreaView style={webLoginAndSignUpStyles.container}>
            <View style={webLoginAndSignUpStyles.leftSection}>
                {children}
            </View>
            <View style={webLoginAndSignUpStyles.rightSection} />
        </SafeAreaView>
    )
}