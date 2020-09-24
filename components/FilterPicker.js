import React from "react";
import { Dimensions, Picker, Text, View } from "react-native";
import {
  AccentColor2,
  DarkAccent,
  LittleDarkAccent,
} from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";
import { _adjustSizes } from "../constant/adjustedSizes";

const { width, height } = Dimensions.get("window");

var ageGroup = ["Semua", "Baby", "Kids"];
var availableColor = ["Semua", "Hijau", "Kuning", "Biru", "Pink"];
var availableStatus = ["In Stock", "Out of Stock"];

const FilterPicker = (props) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        marginVertical: 15,
      }}
    >
      <Text
        style={{
          fontSize: isMobile ? 10 : 20,
          color: DarkAccent,
          fontWeight: "bold",
        }}
      >
        {props.title}:{"   "}
      </Text>
      <Picker
        mode="dialog"
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
        style={{
          backgroundColor: "white",
          height: isMobile ? height * 0.04 : height * 0.05,
          width: isMobile ? width * 0.15 : width * 0.09,
          borderRadius: 20,
          paddingLeft: isMobile ? null : 10,
          borderColor: AccentColor2,
          color: LittleDarkAccent,
          fontSize: _adjustSizes(20),
        }}
      >
        {props.age &&
          ageGroup.map((item, index) => {
            return <Picker.Item label={item} value={item} key={index} />;
          })}
        {props._color &&
          availableColor.map((item, index) => {
            return <Picker.Item label={item} value={item} key={index} />;
          })}
        {props.ready &&
          availableStatus.map((item, index) => {
            return <Picker.Item label={item} value={item} key={index} />;
          })}
      </Picker>
    </View>
  );
};

export default FilterPicker;
