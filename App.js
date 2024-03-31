import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { CartScreen, NewArrivalsScreen, ProductDetailsScreen } from './src/screens';
import { LogBox } from 'react-native';
import { CartProvider } from './src/context/CartContext';

LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'."]);


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'light': require('./assets/fonts/Poppins-Light.ttf'),
    'medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'extraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),

  });


  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProductDetails"
          component={ProductDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewArrivals"
          component={NewArrivalsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}

