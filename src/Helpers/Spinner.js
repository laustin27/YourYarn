// Grabbed from https://blog.logrocket.com/react-native-jwt-authentication-using-axios-interceptors/
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#007aff" />
  </View>
);

const SmallSpinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color="#007aff" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Spinner, SmallSpinner};