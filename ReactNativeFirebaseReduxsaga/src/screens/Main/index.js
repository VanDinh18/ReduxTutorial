import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';



import { styles } from './styles';

export default function Main() {
    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    return (
        <View style={styles.container}>
            <Text>Main</Text>
            <TouchableOpacity
                onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}