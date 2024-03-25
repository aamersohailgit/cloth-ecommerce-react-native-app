import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, FAB, IconButton} from 'react-native-paper';

const ProductCardView = ({ product }) => {
    return (
        <TouchableOpacity>
            <Card style={styles.container}>
                <View style={styles.coverContainer}>
                    <Card.Cover source={{uri: product.image}} />
                    <IconButton
                        icon="heart"
                        size={26}
                        iconColor="white"
                        style={styles.heartIcon}
                        onPress={() => console.log('Added to wishlist')}
                    />
                </View>
                <Card.Content>
                    <Title>{product.name}</Title>
                    <Paragraph>{product.currency}{product.price}</Paragraph>
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
