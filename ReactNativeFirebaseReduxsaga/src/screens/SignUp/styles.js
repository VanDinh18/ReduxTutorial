import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_signup: {
        fontSize: 24
    },
    btn_signup: {
        height: 50,
        width: 150,
        backgroundColor: 'red',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_login: {
        height: 50,
        width: 150,
        backgroundColor: 'green',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_google: {
        height: 50,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue'
    },
    text_input_email: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
    text_input_password: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
});

export { styles }