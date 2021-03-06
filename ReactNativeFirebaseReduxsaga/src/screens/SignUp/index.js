import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';



import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {

    }
    const handleLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text_signup}>Sign Up</Text>
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                style={styles.text_input_email}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                placeholder="Password"
                autoCapitalize="none"
                style={styles.text_input_email}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
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