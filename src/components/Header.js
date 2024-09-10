import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Heading } from './Text';

function Header() {
  return (
    <View style={styles.header}>
        <Heading>Test</Heading>
    </View>
  )
}

export default Header;

const styles=StyleSheet.create({
    header:{
        padding:10,
        alignItems:'center'
    }
})