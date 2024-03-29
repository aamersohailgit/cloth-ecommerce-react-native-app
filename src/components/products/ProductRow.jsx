import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCardView from './ProductCardView';
import { SIZES } from '../../../constants';
import Headings from '../home/Headings';
import useFetch from '../../hook/useFetch';
import { isLoading } from 'expo-font';
import { ActivityIndicator, Text } from 'react-native-paper';
import { CartProvider } from '../../context/CartContext';

const ProductRow = () => {

    const {data, loading, error, refresh} = useFetch();
    const renderItem = ({ item }) => (
            <ProductCardView product={item} />
    );

    return (
        <View style={styles.container}>
            <Headings data={data} />
            <View style={{ padding: SIZES.xSmall, marginTop: SIZES.medium}}>
                {loading ? (<ActivityIndicator />) : error ? (<Text>Something went wrong</Text>) : (<FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    horizontal
                    contentContainerStyle={{columnGap:SIZES.medium}}
                />)
                }
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