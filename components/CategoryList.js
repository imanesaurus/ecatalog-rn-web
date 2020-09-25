import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { _adjustSizes } from "../constant/adjustedSizes";
import { LittleDarkAccent } from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";

const { width } = Dimensions.get("window");

const CategoryList = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View onMouseEnter={() => {}} style={styles.container}>
        <Image
          source={{ uri: props.image }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            boxShadow: "2px 2px 5px rgb(0,0,0,0.5)",
          }}
        />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    width: !isMobile ? width / 6 - 20 : width / 4 - 20,
    height: !isMobile ? width / 6 - 20 : width / 4 - 20,
    marginHorizontal: _adjustSizes(20),
    marginVertical: _adjustSizes(20),
    marginBottom: _adjustSizes(40),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 40,
    marginTop: 10,
    fontSize: _adjustSizes(20),
    fontWeight: "600",
    color: LittleDarkAccent,
  },
  resize: {
    scaleX: 20,
    scaleY: 20,
  },
});
