import React from 'react'
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../theme/colors';

function ContentContainer({ children, style }) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

export default ContentContainer;

const styles = StyleSheet.create({
    container: {
        marginHorizontal:15,
        paddingVertical: 15,
        backgroundColor:COLORS.white,
        borderWidth:2,
        borderColor:COLORS.lightGray
    }
})