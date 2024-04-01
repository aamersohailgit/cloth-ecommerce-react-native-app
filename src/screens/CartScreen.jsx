import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Card, Title, Paragraph, useTheme, Button, IconButton, Chip, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const CartScreen = () => {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const navigation = useNavigation();
    const theme = useTheme();
    const [quantity, setQuantity] = useState(1);

    const handleUpdateItem = (item) => {
        // Logic to handle item update
        console.log('Update item:', item);
    };

    const handleRemoveItem = (item) => {
        // Logic to remove item from cart
        removeFromCart(item);
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
            <Appbar.Header theme={theme}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Cart" />
            </Appbar.Header>
            <ScrollView style={styles.scrollView}>
                {cartItems.map((item, index) => (
                    <Card key={index} style={styles.card}>
                        <Card.Content style={{}}>
                            <View style={{flexDirection:"row", justifyContent: "space-between", alignItems: "center" }} >
                                <Text variant='titleMedium' numberOfLines={2}>{item.name}</Text>
                                <Text variant='titleMedium' >${item.price}</Text>
                            </View>
                            <View style={styles.itemDetails}>
                                <Text>Size: {item.size}</Text>
                                <Text>Color: {item.color}</Text>
                            </View>
                            <View style={styles.quantityContainer}>
                                <Text style={{flex:1}} variant='bodyMedium' >Quantity</Text>
                                <View style={styles.quantity}>
                                    <IconButton icon="minus" mode='contained-tonal' size={20} onPress={decrementQuantity} />
                                    <Text>{quantity}</Text>
                                    <IconButton icon="plus" mode='contained-tonal' size={20} onPress={incrementQuantity} />
                                </View>
                            </View>
                        </Card.Content>
                        <Card.Actions style={{flexDirection:"row", justifyContent: "space-between", alignItems: "center" }}>
                            <Button style={{flex:1}} icon="square-edit-outline" mode='contained' onPress={handleUpdateItem(item)}>Edit</Button>
                            <Button style={{flex:1}} icon="delete-outline" mode='outlined' onPress={handleUpdateItem(item)}>Delete</Button>
                        </Card.Actions>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        marginHorizontal: 12,
    },
    card: {
        marginVertical: 8,

    },
    cardActions: {
        justifyContent: 'space-between',
    },
    quantityContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',

    },
    quantity: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
    },
    itemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8, // Adjust the margin as needed
    },
});

export default CartScreen;
