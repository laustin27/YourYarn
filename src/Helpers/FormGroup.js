import * as React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

function FormGroup(
    {
        label, value, onChange, isSecure, hasError, maxLength, clearButtonMode, multiline,
        placeholder
     }
) {
    const [isFocused, setFocused] = React.useState(false);
    
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={configurableStyles(isFocused, hasError, multiline).label}>{label}</Text>
            </View>
            <TextInput
                autoCapitalize="none"
                style={configurableStyles(isFocused, hasError, multiline).input}
                secureTextEntry={isSecure}
                onChangeText={text => onChange(text)}
                value={value}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                maxLength={maxLength}
                clearButtonMode={clearButtonMode}
                multiline={multiline}
                placeholder={placeholder}
            />
        </View>
    );
}

function FormGroupSpacer() {
    return (
        <View style={{marginTop: '4%'}} />
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    labelContainer: {
        position: 'absolute',
        backgroundColor: '#FFF',
        top: -2,
        left: 11,
        paddingHorizontal: 3,
        borderRadius: 5,
        zIndex: 50
    }
});

const configurableStyles = (isFocused, hasError, multiline) => StyleSheet.create({
    label : {
        color: hasError ? "#E42026" : (isFocused ? "#5F9EF1" : "#737b8d"),
        fontSize: 15
    },
    input: {
        borderWidth: 1,
        borderColor: hasError ? "#E42026" : (isFocused ? "#5F9EF1" : "#99a1ac"),
        backgroundColor: '#FFF',
        justifyContent: 'flex-end',
        borderRadius: 6,
        paddingVertical: 13,
        height: multiline ? 100 : 50,
        paddingHorizontal: 14,
        fontSize: 17,
        marginVertical: 10,
        zIndex: 0
    }
});

export {FormGroup, FormGroupSpacer}