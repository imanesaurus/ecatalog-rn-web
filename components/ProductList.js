import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "react-router-dom";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import _rem from "../constant/adjustedWindow";
import {
  AccentColor2,
  DarkAccent,
  LittleDarkAccent,
} from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";

const { width, height } = Dimensions.get("window");
const ProductList = ({
  style,
  fontSize,
  title,
  image,
  price,
  onPress,
  id,
  onClick,
  item,
}) => {
  const history = useHistory();
  return (
    <View
      style={{
        ...style,
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 10,
        boxShadow: "0px 0px 5px rgba(0,0,0,.4)",
        marginVertical: 20,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      
        {/* <Link to={"/product/" + item.id} style={{textDecoration:"none", flex: 1,}}> */}
        <Link
          to={"/product/" + item.id}
          style={{
            flex: 1,
            width: "100%",
            height: 250,
            overflow: "hidden",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "cover" }}
            source={{ uri: image }}
          />
        </Link>
      
      {/* </Link> */}
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
          style={[styles.text, styles.title, { fontSize }]}
        >
          {title}
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
                fontSize,
                color: DarkAccent,
              }}
            >
              Rp.{price}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={onPress}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit={true}
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
    paddingHorizontal: isMobile ? 5 : 5,
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
