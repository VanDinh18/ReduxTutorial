import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading, Main, SignUp } from './screens';

const Root = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Root.Navigator>
                <Root.Screen name="Loading" component={Loading} />
                <Root.Screen name="SignUp" component={SignUp} />
                <Root.Screen name="Main" component={Main} />
            </Root.Navigator>
        </NavigationContainer>
    )
}