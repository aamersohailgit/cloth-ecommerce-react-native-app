import React, { useState } from 'react';
import { Image, StyleSheet, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { Appbar, Title, Chip, Text, Button, useTheme } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Get the width here

const ProductDetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const { product } = route.params;
  const { colors } = useTheme();
  const [rating] = useState(4.5);
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        {/* Image and AppBar container */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.images }} style={styles.image} />
          <SafeAreaView style={styles.appbar}>
            <Appbar.BackAction onPress={() => navigation.goBack()}/>
            <Appbar.Action icon="heart-outline" onPress={() => {}}/>
          </SafeAreaView>
        </View>
         <Text style={{marginHorizontal: 12, marginTop: 10}} variant="headlineMedium">{product.name}</Text>
         <View style={styles.details}>
            <Text variant='titleMedium' numberOfLines={3} >Description</Text>
            <Chip>{`$ ${product.price}`}</Chip>
         </View>


        <Text style={styles.descriptionText}>{product.description}</Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Text style={styles.reviewsLabel}>Reviews</Text>
          <View style={{flexDirection: "row"}}>
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
      </ScrollView>

      {/* Buttons at the bottom */}
      <View style={styles.buttonContainer}>
         {product.stock > 0 && product.is_available ? (
            <Button
               icon="cart-outline"
               mode="contained"
               style={styles.button}
               onPress={() => console.log('Adding to cart')}
            >
               Add to Cart
            </Button>
         ) : (
            <View style={styles.outOfStockContainer}>
               <Text variant='labelSmall'>Out of Stock</Text>
               <Button
                  icon="heart-outline"
                  mode="elevated"
                  labelStyle={colors.primaryContainer}
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
    backgroundColor: 'white', // Set the background color for the entire screen
  },
  scrollView: {
    marginBottom: 60, // This should be at least equal to the height of the button container
  },
  imageContainer: {
    width: width, // Full width of the screen
    height: width, // Height equal to the screen width
  },
  image: {
    width: '100%', // Full width
    height: '100%', // Full height of the container
    resizeMode: 'cover',
  },
  appbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    position: 'absolute', // Positioned absolutely
    top: 0, // At the top
    left: 0, // Left edge
    right: 0, // Right edge
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
    // No additional styling needed for the star rating
  },
  ratingNumber: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
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
   alignItems: 'center', // Align items in the center for vertical alignment
 },
 outOfStockText: {
   fontSize: 14,
   color: 'red', // Change the color to red to indicate out of stock
   marginBottom: 10, // Add some space between the text and the button
 },
});

export default ProductDetailsScreen;
