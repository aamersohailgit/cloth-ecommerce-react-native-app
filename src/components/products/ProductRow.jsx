import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCardView from './ProductCardView';
import { SIZES } from '../../../constants';
import Headings from '../home/Headings';
import { Text } from 'react-native-paper';

const ProductRow = () => {
    const products = [
        {
            id: 1,
            name: 'Cotton T-Shirt',
            description: 'A comfortable and breathable t-shirt made from 100% cotton.',
            image: "https://source.unsplash.com/1024x768/?muslimgirl",
            supplier: 'Cloth Co.',
            price: '19.99'
        },
        {
            id: 2,
            name: 'Denim Jeans',
            description: 'Classic denim jeans with a relaxed fit and durable construction.',
            image: "https://source.unsplash.com/1024x768/?Islamic-girl",
            supplier: 'Cloth Co.',
            price: '29.99',
            currency: '$'
        },
        {
            id: 3,
            name: 'Wool Sweater',
            description: 'A cozy and warm sweater made from high-quality wool.',
            image: 'https://source.unsplash.com/random/200x200/?sweater',
            supplier: 'Cloth Co.',
            price: '39.99',
            currency: '$'
        },
        {
            id: 4,
            name: 'Leather Jacket',
            description: 'A stylish and timeless leather jacket for a fashionable look.',
            image: 'https://source.unsplash.com/random/200x200/?jacket',
            supplier: 'Cloth Co.',
            price: '79.99',
            currency: '$'
        },
        {
            id: 5,
            name: 'Silk Scarf',
            description: 'An elegant silk scarf to add a touch of luxury to any outfit.',
            image: 'https://source.unsplash.com/random/200x200/?scarf',
            supplier: 'Cloth Co.',
            price: '24.99',
            currency: '$'
        },
    ];

    const renderItem = ({ item }) => (
        <ProductCardView product={item} />
    );

    return (
        <View style={styles.container}>
            <Headings />
            <View style={{ padding: SIZES.xSmall, marginTop: SIZES.medium}}>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    horizontal
                    contentContainerStyle={{columnGap:SIZES.medium}}
                />
            </View>
        </View>
    );
};

export default ProductRow;

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.xxLarge,
    },
});