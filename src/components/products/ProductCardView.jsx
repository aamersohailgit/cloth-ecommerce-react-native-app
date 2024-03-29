import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, FAB, IconButton, Text, Chip} from 'react-native-paper';

const ProductCardView = ({ product }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {product})}>
            <Card style={styles.container}>
                <View style={styles.coverContainer}>
                    <Card.Cover source={{uri: product.images}} />
                    <IconButton
                        icon="heart"
                        size={26}
                        iconColor="white"
                        style={styles.heartIcon}
                        onPress={() => console.log('Added to wishlist')}
                    />
                </View>
                <Card.Content>
                    <Text variant='titleSmall'>{product.name}</Text>
                    <Paragraph>${product.price}</Paragraph>
                    <FAB
                        icon="plus"
                        style={styles.fab}
                        onPress={() => console.log('Pressed')}
                        size="small"
                    />
                </Card.Content>
            </Card>
        </TouchableOpacity>
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
        margin: 10,
        right: 0,
        bottom: 0,
    },
});
