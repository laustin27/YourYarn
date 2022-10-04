import {
    Pressable, 
    View,
    Text,
    StyleSheet
} from 'react-native';
import React from 'react';
import { pressableStyles } from '../Styles/PressableStyles';
import { AntDesign } from '@expo/vector-icons';

export default function AddModalHeader({navigation}) {
    return (
        <View style={styles.container}>
            <Pressable 
                onPress={() => {navigation.goBack()}} 
                style={({pressed}) => pressableStyles(pressed).icon}
            >
                <AntDesign name="close" style={styles.closeButton} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    marginTop: 10
  },
  closeButton : {
    fontSize: 35
  }
});