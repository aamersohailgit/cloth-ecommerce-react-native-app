import React, { useState } from 'react';
import { Image, StyleSheet, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { Appbar, Title, Chip, Button, useTheme, Menu, SegmentedButtons, Paragraph, Text } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { useRoute } from '@react-navigation/native';
import { useCart } from '../context/CartContext';

const { width } = Dimensions.get('window');

const ProductDetailsScreen = ({ navigation }) => {
 const route = useRoute();
 const { product } = route.params;
 const { colors: themeColors } = useTheme();
 const [rating] = useState(4.5);
 const { addToCart } = useCart();
 const [isAddedToCart, setIsAddedToCart] = useState(false);
 const [cartIcon, setCartIcon] = useState('cart-outline');
 const [size, setSize] = useState('Small');
 const [color, setColor] = useState('Red');

 const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
 const colors = ['Black', 'Blue', 'Red', 'Green', 'Yellow'];

 const handleAddToCart = () => {
    addToCart({ ...product, quantity: product.quantity || 1, size, color });
    setIsAddedToCart(true);
    setCartIcon("cart-check");
 };

 return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.images }} style={styles.image} />
          <SafeAreaView style={styles.appbar}>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Action icon="heart-outline" onPress={() => {}} />
          </SafeAreaView>
        </View>
        <Text style={{ marginHorizontal: 12, marginTop: 10 }} variant="titleLarge" numberOfLines={2}>{product.name}</Text>
        <View style={styles.details}>
          <Text variant='titleMedium' numberOfLines={3}>Description</Text>
          <Chip>{`$ ${product.price}`}</Chip>
        </View>

        <Text style={styles.descriptionText}>{product.description}</Text>
        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Text variant='titleMedium'>Reviews</Text>
          <View style={{ flexDirection: "row" }}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={rating}
              starSize={20}
              fullStarColor='gold'
              emptyStarColor={'gray'}
            />
            <Text style={styles.ratingNumber}>({rating})</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 12, marginTop: 20 }}>
          <Text variant='titleSmall'>Sizes</Text>
          <SegmentedButtons
            value={size}
            onValueChange={setSize}
            buttons={sizes.map((sizeOption) => ({ value: sizeOption.toLowerCase(), label: sizeOption }))}
          />
        </View>
        <View style={{ marginHorizontal: 12, marginTop: 20 }}>
          <Text variant='titleSmall'>Colors</Text>
          <SegmentedButtons
            value={color}
            onValueChange={setColor}
            buttons={colors.map((colorOption) => ({ value: colorOption.toLowerCase(), label: colorOption }))}
          />
        </View>
      </ScrollView>

      {/* Buttons at the bottom */}
      <View style={styles.buttonContainer}>
        {product.stock > 0 && product.is_available ? (
          <Button
            icon={cartIcon}
            mode="contained"
            style={styles.button}
            onPress={() => {
              if (isAddedToCart) {
                navigation.navigate('Cart');
              } else {
                handleAddToCart();
              }
            }}
          >
            {isAddedToCart ? 'Go to Cart' : 'Add to Cart'}
          </Button>
        ) : (
          <View style={styles.outOfStockContainer}>
            <Text variant='labelSmall'>Out of Stock</Text>
            <Button
              icon="heart-outline"
              mode="elevated"
              onPress={() => console.log('Adding to wishlist')}
            >
              Add to Wishlist
            </Button>
          </View>
        )}
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 mainContainer: {
    flex: 1,
    backgroundColor: 'white',
 },
 scrollView: {
    marginBottom: 60,
 },
 imageContainer: {
    width: width,
    height: width,
 },
 image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
 },
 appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
 },
 details: {
    marginHorizontal: 12,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
 },
 description: {
    marginHorizontal: 12,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
 },
 descriptionText: {
    marginHorizontal: 12,
    fontSize: 14,
    marginTop: 10,
 },
 ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginTop: 20,
 },
 reviewsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
 },
 starRating: {
 },
 ratingNumber: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 8,
 },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 50,
    paddingTop: 10,
    position: 'absolute',
    bottom: 20,
 },
 button: {
    flex: 1,
    marginHorizontal: 10,
 },
 outOfStockContainer: {
    flex: 1,
    marginHorizontal: 12,
    marginTop: 20,
    alignItems: 'center',
 },
 outOfStockText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
 },
 variantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 10,
 },
 variantLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
 },
 picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
 },
});

export default ProductDetailsScreen;
