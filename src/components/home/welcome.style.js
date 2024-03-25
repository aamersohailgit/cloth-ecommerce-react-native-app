import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: SIZES.small
    },
    welcomeText: (color, top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge -6,
        marginTop: top,
        color: color,
        marginHorizontal: SIZES.small
    }),
    searchContainer: {
        marginHorizontal: SIZES.small,
    }
});

export default styles;