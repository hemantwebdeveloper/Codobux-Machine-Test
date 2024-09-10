import { Dimensions } from "react-native";

const width =Dimensions.get('screen').width
const baseWidth=375;
export const responsiveFont = size => ( width/ baseWidth) * size;