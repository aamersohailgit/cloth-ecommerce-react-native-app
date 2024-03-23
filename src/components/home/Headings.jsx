import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../../../constants';

const Headings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Arrivals</Text>
                <TouchableOpacity>
                    <Ionicons name="grid" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 12,
        marginTop: SIZES.medium,
        marginBottom: -SIZES.xSmall,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: SIZES.xLarge -2,
        fontWeight: 'semibold',
    },
});

export default Headings;