import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import _rem from "../constant/adjustedWindow";
import {
  AccentColor2,
  DarkAccent,
  LittleDarkAccent,
} from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";

const { width, height } = Dimensions.get("window");
const ProductList = (props) => {
  return (
    <View
      style={{
        ...props.style,
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 10,
        boxShadow: "0px 0px 5px rgba(0,0,0,.4)",
        marginVertical: 20,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flex: 1,
          width: '100%',
          height: 250,
          overflow: "hidden",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Image
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          source={{ uri: props.image }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 5,
          paddingHorizontal: 5,
        }}
      >
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[
            styles.text,
            styles.title,
            { fontSize: isMobile ? _rem(5) : _rem(8) },
          ]}
        >
          {props.title}
        </Text>
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
            <Text
              style={{
                ...styles.text,
                fontWeight: "bold",
                fontSize: isMobile ? _rem(5) : _rem(8),
                color: DarkAccent,
              }}
            >
              Rp.{props.price}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={props.onPress}>
            <Text
              style={[
                styles.text,
                styles.touchable,
                { fontSize: isMobile ? _rem(4) : _rem(6.5) },
              ]}
            >
              Add To Cart
            </Text>
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
  },
  title: {
    fontSize: isMobile ? 9 : 18,
    color: LittleDarkAccent,
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowColor: "rgba(0,0,0,0.2)",
  },
});

export default ProductList;
