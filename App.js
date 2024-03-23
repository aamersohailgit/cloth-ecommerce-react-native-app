import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Title } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { theme } from './theme/theme';
import { customTheme } from './constants/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './src/navigation/StackNavigator';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={customTheme}>
      <StatusBar style="auto" />
          <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
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
