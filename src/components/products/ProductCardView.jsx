import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, FAB, IconButton, Text, Chip} from 'react-native-paper';
import { CartContext } from '../../context/CartContext';

const ProductCardView = ({ product }) => {
    const navigation = useNavigation();
    const { incrementCartCount } = useContext(CartContext);
    return (
            <Card style={styles.container} onPress={() => navigation.navigate('ProductDetails', {product})}>
                <View style={styles.coverContainer}>
                    <Card.Cover source={{uri: product.images}} />
                    <IconButton
                        icon="heart"
                        size={15}
                        iconColor="white"
                        style={styles.heartIcon}
                        mode='contained'
                        onPress={() => console.log('Added to wishlist')}
                    />
                </View>
                <Card.Content>
                    <Text style={{paddingTop:5}} variant='titleMedium' numberOfLines={1}>{product.name}</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:5}}>
                        <Text variant='titleLarge'>${product.price}</Text>
                        <FAB
                            icon="plus"
                            onPress={incrementCartCount}
                            size="small"
                        />
                    </View>
                </Card.Content>
            </Card>
    );
};

export default ProductCardView;

const styles = StyleSheet.create({
    container: {
        width: 250,
        marginBottom: 80,
    },
    coverContainer: {
        position: 'relative',
    },
    heartIcon: {
        position: 'absolute',
        right: 0,
    },
    fab: {
        position: 'absolute',
        // margin: 10,
        right: 0,
        bottom: 0,
    },
});
