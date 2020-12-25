import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux';

import * as ActionTypes from '../../redux/actionTypes';
import { styles } from './styles';

function Main(props) {
    const handleLogout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    useEffect(() => {
        console.log(props)
    }, [props])
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

const mapStateToProps = state => ({
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)