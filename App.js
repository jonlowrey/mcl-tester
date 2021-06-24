import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonStyle } from '@mcl-boron-components/button'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tester for MCL</Text>
      <Button displayText="Primary Button" onPress={() => {}} type={ButtonStyle.PRIMARY} /> 
      <Button displayText="Secondary Button" onPress={() => {}} type={ButtonStyle.SECONDARY} /> 
      <Button displayText="Tertiary Button" onPress={() => {}} type={ButtonStyle.TERTIARY} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
