import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { HEADER_MARGIN, isMobile } from "../constant/isMobile";
import { Link, useRouteMatch } from "react-router-dom";
import useDimens from "../constant/useDimens";
import data from "../data/data.json";
import {
  AccentColor,
  AccentColor2,
  DarkAccent,
  LittleDarkAccent,
  shadow,
} from "../constant/ColorsConst";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import Fade from 'react-reveal/Fade'

const Product = ({ match, rem }) => {
  const [_width, _height, isWeb] = useDimens();
  console.log(rem);
  const id = match.params.id;
  const item = data.products.find((x) => x.id === id);

  return (
    <Fade bottom>
      <View style={[styles.container]}>
        <Link
          to="/"
          style={{
            marginLeft: HEADER_MARGIN,
            textDecoration: "none",
            marginTop: HEADER_MARGIN / 4,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              backgroundColor: AccentColor,
              width: isWeb ? _width * 0.06 : _width * 0.18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: shadow(2, 0.2),
              borderRadius: 10,
              paddingVertical: 5,
            }}
          >
            <Ionicons
              name="ios-arrow-round-back"
              size={15}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>Kembali</Text>
          </View>
        </Link>
        <View style={[styles.box]}>
          <View
            style={[
              styles.imageContainer,
              {
                width: _height / 2,
                height: _height / 2,
              },
            ]}
          >
            <Image source={{ uri: item.image_link }} style={styles.image} />
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: HEADER_MARGIN,
              alignItems: isWeb ? "flex-start" : "center",
              justifyContent: "center",
              width: "50%",
            }}
          >
            <Text
              style={[
                styles.title,
                {
                  marginTop: isWeb ? null : 10,
                  textAlign: isWeb ? "left" : "center",
                  fontSize: isWeb ? rem(12) : rem(10),
                },
              ]}
            >
              {item.title}
            </Text>
            <View style={{ height: "50%" }}>
              <Text style={{ color: "gray" }}>Description:</Text>
              <Text
                style={{
                  flex: 1,
                  marginVertical: 5,
                  boxShadow: shadow(5, 0.2),
                  borderRadius: 10,
                  fontSize: isWeb ? 14 : rem(4),
                  textAlign: "justify",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}
              >
                {item.description}
              </Text>
            </View>
            {/* <CustomButton
              title="Add to Cart"
              bgcolor={AccentColor2}
              textColor="white"
              style={{
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            /> */}
          </View>
        </View>
      </View>
    </Fade>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: HEADER_MARGIN + 40 },
  box: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  imageContainer: {
    backgroundColor: "white",
    marginHorizontal: HEADER_MARGIN,
    boxShadow: shadow(6, 0.2),
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    color: LittleDarkAccent,
  },
});
