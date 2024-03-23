// src/components/CartIconWithBadge.js
import * as React from 'react';
import { Badge, IconButton } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const CartIconWithBadge = ({ cartItemCount, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      marginRight: 10,
    },
    badgeContainer: {
      position: 'absolute',
      right: cartItemCount > 9 ? 14 : 0,
      top: -4,
      zIndex: 10,
    },
    badge: {
      fontSize: cartItemCount > 9 ? 10 : 12,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconButton icon="cart" />
      {cartItemCount > 0 && (
        <View style={styles.badgeContainer}>
          <Badge size={20} style={styles.badge}>{cartItemCount}</Badge>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartIconWithBadge;

