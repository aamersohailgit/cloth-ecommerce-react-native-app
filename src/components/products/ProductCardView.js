import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Text, Button, Icon, FAB } from 'react-native-paper';

const ProductCardView = ({ product }) => {
    return (
        <TouchableOpacity>
            <Card style={styles.container}>
                <Card.Cover source={{uri: product.image}} />
                <Card.Content>
                    <Title>{product.name}</Title>
                    <Paragraph>{product.currency}{product.price}</Paragraph>
                    <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => console.log('Pressed')}
                    size = "small"
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
        // height: 250,
        marginBottom: 80,
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 0,
        bottom: 0,
      },
});