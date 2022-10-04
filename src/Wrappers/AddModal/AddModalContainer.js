import {
    SafeAreaView,
    StyleSheet
} from 'react-native';
import React from 'react';

export default function AddModalContainer({children}) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
});