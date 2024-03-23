import * as React from 'react';
import { Appbar, Badge, useTheme } from 'react-native-paper';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Carousel, CartIconWithBadge, Headings, ProductRow, Welcome } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const cartItemCount = 80;

  const styles = StyleSheet.create({
    container: {
      marginRight: 10,
    },
    badgeContainer: {
      position: 'absolute',
      right: 15,
      top: -4,
      zIndex: 10,
    },
    badge: {
      fontSize: cartItemCount > 9 ? 10 : 12,
    },
  });

  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="map-marker" onPress={() => console.log('Pressed location icon')} />
        <Appbar.Content title="Home" />
        <CartIconWithBadge
          cartItemCount={cartItemCount}
          onPress={() => console.log('Pressed cart icon')}
        />
      </Appbar.Header>
      <ScrollView>
      <Welcome />
      <Carousel />
      <ProductRow />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
