import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';



import { styles } from './styles';

export default function Main() {

    return (
        <View style={styles.container}>
            <Text>Main</Text>

        </View>
    )
}