import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Text, Button, Icon, FAB } from 'react-native-paper';

const ProductCardView = ({ product }) => {
    return (
        <TouchableOpacity>
            <Card style={styles.container}>
                <View style={styles.coverContainer}>
                    <Card.Cover source={{uri: product.image}} />
                    <Ionicons name="heart" size={24} color="white" style={styles.heartIcon} />
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
        top: 10, // Adjust as needed
        right: 10, // Adjust as needed
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 0,
        bottom: 0,
    },
});
