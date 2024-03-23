import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Title } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { theme } from './theme/theme';
import { customTheme } from './constants/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={customTheme}>
      <StatusBar style="auto" />
          <NavigationContainer>
            <BottomTabNavigator />
          </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
