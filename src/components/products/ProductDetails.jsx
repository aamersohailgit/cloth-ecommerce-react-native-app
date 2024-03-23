import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Appbar } from 'react-native-paper';

const ProductDetails = () => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction />
                <Appbar.Content title="Product Details" />
            </Appbar.Header>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ProductDetails;