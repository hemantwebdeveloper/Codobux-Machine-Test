import { StyleSheet } from "react-native";
import { COLORS } from "./colors";
import { fontFamily } from "../utils/constants";

export const themeStyle = StyleSheet.create({
    shadow: {
        elevation: 3,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: -2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})

