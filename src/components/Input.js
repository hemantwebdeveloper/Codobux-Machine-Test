import { Platform, StyleSheet, TextInput, View } from "react-native"
import { responsiveFont } from "../utils/font";
import { COLORS } from "../theme/colors";
import { Description } from "./Text";

export const PrimaryInput = (props) => {
    const {
        style,
        isError = false,
        message = 'This field is required!',
        errorStyle
    } = props;

    return <>
        <TextInput
            {...props}
            style={[styles.textInput, style, (isError && styles.error)]}
            placeholderTextColor={`${COLORS.black}90`}
        />
        {isError && <Description style={{ color: COLORS.error, marginBottom:15,...errorStyle }} >{message}</Description>}
    </>
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth:1,
        borderColor:COLORS.lightGray,
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === "ios" ? 20 : 15,
        marginBottom: 10,
        fontSize: responsiveFont(16),
        backgroundColor: COLORS.background,
        color: COLORS.black
    },
    error: {
        borderColor: COLORS.error,
        backgroundColor: `${COLORS.error}10`,
        borderWidth: 1,
    },
})