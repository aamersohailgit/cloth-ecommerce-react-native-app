import React, { useState } from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { Appbar, Card, Title, Avatar, IconButton, Chip, useTheme, Text, Button } from 'react-native-paper';
import { SIZES } from '../../constants';
import StarRating from 'react-native-star-rating';

const ProductDetailsScreen = ({ navigation }) => {
 const { colors } = useTheme();
 const { width } = Dimensions.get('window');
 const [rating, setRating] = useState(4.5);
 const [quantity, setQuantity] = useState(1);

 const onStarRatingPress = (rating) => {
    setRating(rating);
 };
 const incrementQuantity = () => {
    setQuantity(quantity + 1);
 };

 const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
 };

 return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <Appbar.Action
          icon="arrow-left"
          onPress={() => navigation.goBack()}
          color={colors.primary}
        />
        <Appbar.Action icon="heart" color={colors.primary} onPress={() => {}} />
      </View>
      <Image source={{ uri: "https://source.unsplash.com/1024x768/?Islamic-girl" }}
        style={[styles.image, { width: width }]}
      />
      <View style={styles.cardStyle}>
        <View style={styles.details}>
          <Title style={styles.title}>Denim Jeans</Title>
          <Chip style={styles.chip}>$ 29.99</Chip>
        </View>
        <View style={styles.ratingRow}>
            <View style={styles.rating}>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={4.9}
                    starSize={20}
                    emptyStar={'star-o'}
                    fullStar={'star'}
                    halfStar={'star-half-o'}
                    starColor={colors.primary}
                    emptyStarColor={'gray'}
                />
                <Text style={styles.ratingText}>(4.9)</Text>
            </View>
            <View style={styles.rating}>
                <IconButton icon="minus" size={20} onPress={decrementQuantity} />
                <Text>{quantity}</Text>
                <IconButton icon="plus" size={20} onPress={incrementQuantity} />
            </View>
        </View>
      </View>
    </View>
 );
};


const styles = StyleSheet.create({
 container: {
    flex:1,
    backgroundColor: 'white',
 },
 upperRow: {
    marginHorizontal:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width -44,
    zIndex: 999,
 },
 image: {
    aspectRatio: 1,
    resizeMode: 'cover',
 },
 cardStyle: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
 },
 details: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
 },
 chip: {
    marginHorizontal: 12,
 },
 ratingContainer: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space items evenly across the container
    alignItems: 'center', // Align items vertically in the center
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 10,

 },
 ratingText: {
    fontSize: 16,
    marginRight: 8,
 },
 ratingRow: {
    paddingBottom:SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:SIZES.width - 10,
    top: 5,
 },
 rating:{
    top:SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large
 }
});

export default ProductDetailsScreen;
