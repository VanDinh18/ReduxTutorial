import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import rootSaga from './redux/sagas';
import allReducers from './redux/reducers';
import { Loading, Login, Main, SignUp } from './screens';

const Root = createStackNavigator();

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Root.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Root.Screen name="Loading" component={Loading} />
                    <Root.Screen name="SignUp" component={SignUp} />
                    <Root.Screen name="Main" component={Main} />
                    <Root.Screen name="Login" component={Login} />
                </Root.Navigator>
            </NavigationContainer>
        </Provider>
    )
}