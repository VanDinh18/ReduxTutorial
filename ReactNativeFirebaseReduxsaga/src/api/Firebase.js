import auth from '@react-native-firebase/auth';

export const User = {
    loginWithEmail: (userInfo) => {
        return auth()
            .signInWithEmailAndPassword(userInfo.email, userInfo.password)
            .then(() => {
                console.log("login succesful!");
            })
            .catch(error => {
                console.log(error)
            })
    },
    signUpWithEmailPassword: () => {
        return auth()
            .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
}