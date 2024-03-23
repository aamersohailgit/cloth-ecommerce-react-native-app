import React from 'react';
import { View, Text } from 'react-native';
import { Title, useTheme, Provider } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { SIZES } from '../../../constants';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Title style={{ fontSize: SIZES.xLarge }}>Find The Most</Title>
            <Text style={{ fontSize: SIZES.xxLarge }}>Comfortable Cloths</Text>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});