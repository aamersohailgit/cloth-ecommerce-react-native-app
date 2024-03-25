import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../../constants';
import { IconButton, Title } from 'react-native-paper';

const Headings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title>New Arrivals</Title>
                <IconButton
                        icon="view-grid"
                        size={25}
                        style={styles.heartIcon}
                        onPress={() => console.log('Added to wishlist')}
                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // title: {
    //     flex: 1,
    //     fontSize: SIZES.xLarge -2,
    //     fontWeight: 'bold',
    // },
});

export default Headings;