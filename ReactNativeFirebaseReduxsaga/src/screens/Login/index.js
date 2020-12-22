import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import * as ActionTypes from './../../redux/actionTypes';
import { connect } from 'react-redux';

import { styles } from './styles';
import { User } from '../../api/Firebase';

function Login(props) {
    const navigation = useNavigation();

    const handleLogin = () => {
        // User.loginWithEmail();
        let userInfo = {
            email: "nguyendinh180299@gmail.com",
            password: "nguyenvandinh"
        }
        props.dispatch({ type: ActionTypes.LOGIN, userInfo });
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
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