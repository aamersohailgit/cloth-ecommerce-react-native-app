import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Avatar.Image size={150} source={require('../assets/avatar.png')} /> */}
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>
                User Profile
            </Text>
            <Text style={{ fontSize: 16, marginTop: 8 }}>
                Welcome to your profile screen!
            </Text>
            <Button mode="contained" style={{ marginTop: 24 }}>
                Edit Profile
            </Button>
        </View>
    );
};

export default ProfileScreen;