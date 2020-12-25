import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import * as ActionTypes from '../../redux/actionTypes';
import { styles } from './styles';


function SignUp(props) {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        let userInfo = {
            email: email,
            password: password
        }
        props.dispatch({ type: ActionTypes.SIGNUP, userInfo });
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
const mapStateToProps = state => ({
    use: state.user
})
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)