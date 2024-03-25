import React from 'react';
import { View} from 'react-native';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../../constants';
import { Searchbar, FAB, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View>
            <View style={styles.container}>
                <Text variant="displayMedium">Find The Most</Text>
                <Text variant="displaySmall" style={{ color: colors.primary }}>Comfortable Cloths</Text>
            </View>
        </View>
    );
};

export default Welcome;