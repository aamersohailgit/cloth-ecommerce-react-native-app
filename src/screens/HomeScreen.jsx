import React, { useContext } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Welcome } from '../components';
import homeStyles from './styles/home.style';
import Carousel from '../components/Carousel';
import ProductRow from '../components/products/ProductRow';
import { Appbar, Badge, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext'; // Adjust the import path as necessary

const { width } = Dimensions.get('window');

const CustomCartIcon = ({ size, count }) => {
 return (
    <View style={{ position: 'relative' }}>
      <MaterialCommunityIcons name="cart" size={size} />
      <Badge
        visible={true}
        size={size * 0.65}
        style={{ position: 'absolute', top: -size * 0.25, right: -size * 0.05 }}
      >
        {count}
      </Badge>
    </View>
 );
};

const HomeScreen = () => {
 const { cartCount } = useContext(CartContext);

 return (
    <ScrollView>

      <Appbar.Header>
        <Appbar.Action icon="map-marker-outline" />
        <Appbar.Content title="Mumbai" />
        <Appbar.Action
          icon={() => <CustomCartIcon size={25} count={cartCount} />}
          onPress={() => console.log('Pressed')}
        />
      </Appbar.Header>

        <Welcome />
        <Carousel />
        <ProductRow />
      </ScrollView>
 );
}

export default HomeScreen;
