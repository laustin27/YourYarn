import {
    StyleSheet,
    ScrollView
} from 'react-native';
import React from 'react';

export default function AddModalBody({children}) {
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    }
});