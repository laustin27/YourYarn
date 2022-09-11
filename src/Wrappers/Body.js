import * as React from 'react';
import {View } from 'react-native';

export default function Body ({children}) {  
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {children}
        </View>
    );
};