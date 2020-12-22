import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';



import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();
    const handleSignUp = () => {

    }
    const handleLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.btn_signup}
                onPress={handleSignUp}>
                <Text>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn_login}
                onPress={handleLogin}>
                <Text>Are you have a account?</Text>
            </TouchableOpacity>
        </View>
    )
}