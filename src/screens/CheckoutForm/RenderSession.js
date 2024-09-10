import React, { useEffect, useState } from 'react';
import { Description, SubHeading } from '../../components/Text';
import { Modal, StyleSheet, View } from 'react-native';
import { COLORS } from '../../theme/colors';
import SessionModal from '../../components/SessionModal';

const RenderTime = ({ value = '00', label = 'Hours' }) => {
    return (
        <View style={styles.timeBox}>
            <SubHeading style={styles.text}>{value}</SubHeading>
            <Description style={styles.text}>{label}</Description>
        </View>
    );
};

function RenderSession() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(1); 
    const [seconds, setSeconds] = useState(0);
    const [timerFinished, setTimerFinished] = useState(false);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds((prev) => prev - 1);
            } else if (minutes > 0) {
                setMinutes((prev) => prev - 1);
                setSeconds(59);
            } else if (hours > 0) {
                setHours((prev) => prev - 1);
                setMinutes(59);
                setSeconds(59);
            } else {
                clearInterval(timerInterval);
                setTimerFinished(true); 
            }
        }, 1000);

        return () => clearInterval(timerInterval); 
    }, [hours, minutes, seconds]); 

    const onClose = () => {
        //if need reset the here we can update state as per requirement which is currently commented. 
        // setMinutes(1);
        setTimerFinished(false);
    }

    return (
        <View style={styles.session}>
            <Description style={styles.labelText}>
                {timerFinished ? 'YOUR SESSION HAS ENDED' : 'YOUR SESSION WILL END IN :'}
            </Description>
            <View style={styles.sessionBox}>
                <RenderTime value={String(hours).padStart(2, '0')} label={'Hours'} />
                <SubHeading style={styles.text}>{':'}</SubHeading>
                <RenderTime value={String(minutes).padStart(2, '0')} label={'Mins'} />
                <SubHeading style={styles.text}>{':'}</SubHeading>
                <RenderTime value={String(seconds).padStart(2, '0')} label={'Secs'} />
            </View>
            <SessionModal
                visible={timerFinished}
                onClose={onClose}
            />
        </View>
    );
}

export default RenderSession;

const styles = StyleSheet.create({
    session: {
        marginVertical: 25,
    },
    labelText: {
        textAlign: 'center',
        marginVertical: 5,
    },
    sessionBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        padding: 15,
        width: '80%',
        alignSelf: 'center', // Center the session box on the screen
    },
    timeBox: {
        alignItems: 'center',
    },
    text: {
        color: COLORS.white,
        fontWeight: '800',
    },
});
