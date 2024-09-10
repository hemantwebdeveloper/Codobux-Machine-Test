import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainStack from './MainStack';

function StackNavigation() {
  return (
    <NavigationContainer>
        <MainStack/>
    </NavigationContainer>
  )
}

export default StackNavigation;