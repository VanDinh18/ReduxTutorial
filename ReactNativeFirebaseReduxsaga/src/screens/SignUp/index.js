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

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '1039637297038-mf24qicip5gm1k3pod79e1oqibj4mkgh.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            hostedDomain: '', // specifies a hosted domain restriction
            loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            accountName: '', // [Android] specifies an account name on the device that should be used
            iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }, [])

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
    const handleLoginGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            console.log("accessToken: ", accessToken);
            console.log("idToken", idToken)
            setloggedIn(true);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
            } else {
                // some other error happened
                console.log(error)
            }
        }
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