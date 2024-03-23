import React from 'react';
import { View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <Text>SearchScreen</Text>
        </View>
    );
};

export default SearchScreen;