import React, { useState } from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { Appbar, Card, Title, Avatar, IconButton, Chip, useTheme, Text, Button, Icon } from 'react-native-paper';
import { SIZES } from '../../constants';
import StarRating from 'react-native-star-rating';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

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
          color="white"
        />
        <Appbar.Action icon="heart" color="white" onPress={() => {}} />
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
                    fullStarColor='gold'
                    emptyStarColor={'gray'}
                />
                <Text style={styles.ratingText}>(4.9)</Text>
            </View>
            <View style={styles.rating}>
                <View style={styles.quantity}>
                <IconButton icon="minus" size={20} onPress={decrementQuantity} />
                <Text>{quantity}</Text>
                <IconButton icon="plus" size={20} onPress={incrementQuantity} />
                </View>
            </View>
        </View>
        <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>
                    Description
                </Text>
                <Text style={styles.descriptionText}>
                    Classic denim jeans with a relaxed fit and durable construction.
                    Classic denim jeans with a relaxed fit and durable construction.
                    Classic denim jeans with a relaxed fit and durable construction.
                    Classic denim jeans with a relaxed fit and durable construction.
                    Classic denim jeans with a relaxed fit and durable construction.
                    Classic denim jeans with a relaxed fit and durable construction.
                </Text>
            </View>
        {/* <View style={{marginTop: SIZES.xxLarge}}>
            <View style={styles.location} backgroundColor= {colors.primaryContainer}>
                <View style={{flexDirection:"row", padding:5}}>
                    <Ionicons name="location-outline" size={20} color="black" />
                    <Text>  Dallas</Text>
                </View>
                <View style={{flexDirection:"row", padding:5}}>
                    <MaterialCommunityIcons name="truck-delivery-outline" size={20} color="black" />
                    <Text>  Free Delivery  </Text>
                </View>
            </View>
        </View> */}
        {/* add Buy now button */}
        <View style={{flexDirection:"row", justifyContent: 'space-between', marginHorizontal: 12}}>
            <Button
                icon="cart"
                mode="outlined"
                style={{ flex: 1, marginTop: 80, marginRight: 6 }}
                onPress={() => console.log('Adding to cart')}
            > Add to Cart </Button>
            <Button
                icon="shopping"
                mode="contained"
                buttonColor={colors.primary}
                style={{ flex: 1, marginTop: 80, marginLeft: 6 }}
                onPress={() => console.log('Buy Now')}
            >Buy Now </Button>
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
 },
 details: {
    paddingTop: 10,
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
    paddingHorizontal: 12,
    marginHorizontal: 10,
 },
 ratingText: {
    fontSize: 16,
    marginRight: 10,
 },
 ratingRow: {
    paddingBottom:SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:SIZES.width,
    top: 5,
 },
 rating:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.small
 },
 quantity:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
 },
    descriptionWrapper: {
        marginTop: SIZES.medium -2,
        marginHorizontal: SIZES.large
    },
    description: {
        fontFamily: 'medium',
        fontSize: SIZES.large,
    },
    descriptionText:{
        fontFamily: 'regular',
        fontSize: SIZES.small,
        textAlign: 'justify',
        marginTop: 5,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: SIZES.large,
        // marginTop: SIZES.small,
        // backgroundColor: colors.primary,
        paddingTop: 5,
        borderRadius: SIZES.large,
    },
});

export default ProductDetailsScreen;
