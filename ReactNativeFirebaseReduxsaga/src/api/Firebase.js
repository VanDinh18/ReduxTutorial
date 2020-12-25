import auth from '@react-native-firebase/auth';

export const User = {
    loginWithEmail: async (userParam) => {
        const response = await auth().signInWithEmailAndPassword(userParam.userInfo.email, userParam.userInfo.password);
        return response;
    },
    signUpWithEmailPassword: async (userParam) => {
        const response = await auth().createUserWithEmailAndPassword(userParam.userInfo.email, userParam.userInfo.password);
        return response;
        // try {
        //     await auth()
        //         .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!');
        //     console.log('User account created & signed in!');
        // } catch (error) {
        //     if (error.code === 'auth/email-already-in-use') {
        //         console.log('That email address is already in use!');
        //     }

        //     if (error.code === 'auth/invalid-email') {
        //         console.log('That email address is invalid!');
        //     }

        //     console.error(error);
        // }
    }
}