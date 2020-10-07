import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { _adjustSizes } from "../constant/adjustedSizes";
import { AccentColor2 } from "../constant/ColorsConst";

const CustomButton = ({onPress, bgcolor, textColor,style, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles.text,
          styles.touchable,
          {
            backgroundColor: bgcolor,
            color: textColor,
            ...style,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: _adjustSizes(18),
  },
  touchable: {
    alignSelf: "center",
    width: "100%",
    borderRadius: 10,
    color: "white",
    paddingHorizontal: _adjustSizes(10),
    paddingVertical: _adjustSizes(5),
    marginBottom: _adjustSizes(5),
    backgroundColor: AccentColor2,
  },
});
