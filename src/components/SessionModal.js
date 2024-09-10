import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import { themeStyle } from '../theme/themeStyle';
import { COLORS } from '../theme/colors';
import { SubHeading } from './Text';
import { PrimaryButton } from './Button';

function SessionModal({ visible, onClose }) {
    return (
        <Modal
            visible={visible}
            animationType={'fade'}
            transparent={true}
        >
            <View style={styles.modalBox}>
                <View style={styles.innerBox}>
                    <SubHeading style={{ color: COLORS.primary }}>Your session has expired.</SubHeading>
                    <PrimaryButton
                        onPress={onClose}
                        label={'OK'}
                        style={{ width: '60%', marginTop: 30, }}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default SessionModal;

const styles = StyleSheet.create({
    modalBox: {
        flex: 1,
        backgroundColor: `${COLORS.black}90`,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerBox: {
        minHeight: 250,
        alignItems: 'center',
        width: '90%',
        paddingVertical: 50,
        backgroundColor: COLORS.white,
        padding: 15,
        ...themeStyle.shadow,
    }
})