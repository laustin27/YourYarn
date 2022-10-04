import {
    Pressable
} from 'react-native';
import React from 'react';
import { pressableStyles } from '../Styles/PressableStyles';
import { AntDesign } from '@expo/vector-icons';

export default function AddModalCloseButton({navigation}) {
    return (
        <Pressable 
            onPress={() => {navigation.goBack()}} 
            style={({pressed}) => pressableStyles(pressed).icon}
        >
            <AntDesign name="close" style={{alignSelf: 'flex-end',fontSize: 35}} />
        </Pressable>
    )
}