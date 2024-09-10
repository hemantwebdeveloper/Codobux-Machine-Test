import { StyleSheet, Text } from "react-native";
import { responsiveFont } from "../utils/font";
import { COLORS } from "../theme/colors";

export const Heading = (props) => {
  const { children, style } = props;
  return (
    <Text {...props} style={[styles.heading, style]}>
      {children}
    </Text>
  );
};

export const SubHeading = (props) => {
  const { children, style } = props;
  return (
    <Text {...props} style={[styles.subHeading, style]}>
      {children}
    </Text>
  );
};

export const Label = (props) => {
  const { children, style } = props;
  return (
    <Text {...props} style={[styles.label, style]}>
      {children}
    </Text>
  );
};

export const Description = (props) => {
  const { children, style } = props;
  return (
    <Text {...props} style={[styles.description, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: COLORS.black,
    fontSize: responsiveFont(28),
    fontWeight: "600",
  },
  subHeading: {
    color: COLORS.black,
    fontSize: responsiveFont(22),
    fontWeight: "600",
  },
  label: {
    color: COLORS.black,
    fontSize: responsiveFont(16),
  },
  description: {
    color: COLORS.black,
    fontSize: responsiveFont(14),
  },
});
