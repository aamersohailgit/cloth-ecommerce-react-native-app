import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { List, Card, Title, Appbar, Paragraph, Text, Chip } from 'react-native-paper';
import StarRating from 'react-native-star-rating';

const NewArrivalsScreen = () => {
    const route = useRoute();
    const {data} = route.params;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Action icon="arrow-left-circle" onPress={() => navigation.goBack()} />
                <Appbar.Content title="New Arrivals" />
            </Appbar.Header>
            <ScrollView>
                {data.map((product) => (
                    <Card key={product.id}  style={styles.card} onPress={()=>navigation.navigate("ProductDetails", {product})}>
                        <View style={styles.cardContent}>
                            <Image
                                style={styles.image}
                                source={{ uri: product.images }}
                            />
                            <View style={styles.textContainer}>
                                    <Text numberOfLines={1}>{product.name}</Text>
                                    <Paragraph numberOfLines={1}>{product.description}</Paragraph>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                                    <Paragraph numberOfLines={1}>${product.price}</Paragraph>
                                    <Chip icon="fire">Fire</Chip>
                                </View>
                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                <StarRating
                                    starSize={20}
                                    disabled={false}
                                    maxStars={5}
                                    rating={4}
                                    fullStarColor='gold'
                                    emptyStarColor='gray'
                                    halfStarEnabled={true}
                                    halfStarColor='gold'
                                    readOnly={true}
                                />
                                </View>
                            </View>
                        </View>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
};

export default NewArrivalsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 12,
        elevation: 1,
        height: 120,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden', // Added overflow here
    },
    image: {
        width: 120, // Set a fixed width for the image
        height: 120, // Set a fixed height for the image, same as the card's height
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
    textContainer: {
        flex: 1, // The text container takes up the remaining space
        padding: 10,
        justifyContent: 'center',
    },
});
