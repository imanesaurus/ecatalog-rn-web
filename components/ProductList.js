import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { PrimaryColor, AccentColor2, AccentColor } from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";

const { width, height } = Dimensions.get("window");
const ProductList = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 10,
        boxShadow: "0px 0px 5px rgba(0,0,0,.4)",
        marginVertical: 20,
        borderRadius: 10,
        maxWidth: isMobile ? 150 : 300,
        maxHeight: isMobile ? 350/2 : 350,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flex: 1,
          width: 300,
          height: 250,
          overflow: "hidden",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Image
          style={{ width: 300, height: 250 }}
          source={{ uri: props.image }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        <Text style={[styles.text, styles.title]}>{props.title}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={{ ...styles.text, fontWeight: "bold", fontSize: isMobile ? 10 : 20, color: AccentColor }}>
              {props.price}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <Text style={[styles.text, styles.touchable]}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  touchable: {
    color: "white",
    paddingHorizontal: isMobile ? 5 : 10,
    paddingVertical: isMobile ? 3 : 5,
    backgroundColor: AccentColor2,
    fontSize: isMobile ? 9 : 18,
  },
  title: {
      fontSize: isMobile ? 9 : 18,
    color: PrimaryColor,
    textShadowRadius: 1,
    textShadowOffset: {
        width: 1,
        height: 1,
    },
    textShadowColor: 'rgba(0,0,0,0.2)'
  }
});

export default ProductList;
