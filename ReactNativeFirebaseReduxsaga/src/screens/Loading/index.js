import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


import { styles } from './styles';

export default function Loading() {
    const navigation = useNavigation();
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    const onAuthStateChanged = (user) => {
        console.log("user", user);
        if (user) {
            navigation.navigate("Main");
        }
        else {
            navigation.navigate("SignUp");
        }
    }
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" />
        </View>
    )
}