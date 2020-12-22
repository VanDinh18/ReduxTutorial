import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ActionTypes from './../../redux/actionTypes';
import { connect } from 'react-redux';

import { styles } from './styles';

function Login(props) {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        // User.loginWithEmail();
        let userInfo = {
            email: email,
            password: password
        }
        props.dispatch({ type: ActionTypes.LOGIN, userInfo });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text_login}>Login</Text>
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
                style={styles.btn_login}
                onPress={handleLogin}>
                <Text>Login</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)