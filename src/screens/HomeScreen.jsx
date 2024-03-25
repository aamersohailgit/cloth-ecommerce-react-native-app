import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Headings, Welcome } from '../components';
import homeStyles from './styles/home.style';
import Carousel from '../components/Carousel';
import ProductRow from '../components/products/ProductRow';
import { IconButton } from 'react-native-paper';

const HomeScreen = () => {
    return (
        <SafeAreaView style={homeStyles.SafeArea}>
            <View style={homeStyles.appBarWrapper}>
                <View style={homeStyles.appBar}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text style={homeStyles.location}>Mumbai</Text>
                    <View style={{alignItems:"flex-end"}}>
                        <View style={homeStyles.cartCount}>
                            <Text style={homeStyles.cartNumber}>3</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name="shopping-bag" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Welcome />
            <Carousel />
            <ProductRow />
        </SafeAreaView>
    );
}

export default HomeScreen;
