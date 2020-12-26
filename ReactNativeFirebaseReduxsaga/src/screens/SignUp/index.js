import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin';

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
        setEmail("");
        setPassword("");
        props.dispatch({ type: ActionTypes.SIGNUP, userInfo });
    }
    const handleLoginEmailPassword = () => {
        navigation.navigate('Login')
    }
    const handleLoginGoogle = () => {

    }
    useEffect(() => {

    }, [props])
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
                onPress={handleLoginEmailPassword}>
                <Text>Are you have a account?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn_google}
                onPress={handleLoginGoogle}>
                <Text>Google</Text>
            </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = state => ({
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)