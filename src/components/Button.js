import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native"
import { Label } from "./Text";
import { COLORS } from "../theme/colors";

export const PrimaryButton = (props) => {
    const { style, label = "Primary button", labelStyle, disabled=false, loading = false } = props;

    const opacity = disabled ? 0.3 : 1;

    return <TouchableOpacity
        {...props}
        style={[styles.primary, { opacity }, style]}
        disabled={disabled || loading}
    >
        {!loading ? <Label
            style={[styles.labelStyle, labelStyle]}>
            {label}
        </Label> :
            <ActivityIndicator size={'small'} color={COLORS.white} />}
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    primary: {
        padding: 12,
        marginVertical: 10,
        minHeight: 60,
        justifyContent: 'center',
        backgroundColor:COLORS.primary
    },
    labelStyle: {
        textAlign: 'center',
        fontWeight: '700',
        color:COLORS.white,
    },
    outline:{
        padding: 12,
        marginVertical: 10,
        borderRadius: 5,
        minHeight: 60,
        justifyContent: 'center',
        borderWidth:2,
        borderColor:COLORS.white
    }
})

