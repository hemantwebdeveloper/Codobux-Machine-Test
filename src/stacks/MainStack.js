import React from 'react'
import { Stack } from './config'
import CheckoutForm from '../screens/CheckoutForm'
import DetailedView from '../screens/DetailedView';

function MainStack() {
    return (
        <Stack.Navigator initialRouteName='CheckoutForm' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='CheckoutForm' component={CheckoutForm} />
            <Stack.Screen name='DetailedView' component={DetailedView} />
        </Stack.Navigator>
    )
}

export default MainStack;