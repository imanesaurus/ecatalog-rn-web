import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-dom";
import { _adjustSizes } from "../constant/adjustedSizes";
import { LittleDarkAccent } from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";
import useDimens from "../constant/useDimens";

const CategoryList = ({ cid, style, onPress, image, title, fontSize }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Link to={"/category/" + cid} style={{textDecoration: 'none', flex: 1,}}>
        <View
          onMouseEnter={() => {}}
          style={[
            styles.container,
            {
              ...style,
            },
          ]}
        >
          <Image
            source={{ uri: image }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              boxShadow: "2px 2px 5px rgb(0,0,0,0.5)",
            }}
          />
          <Text
            style={[
              styles.text,
              {
                fontSize,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </Link>
    </TouchableOpacity>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: _adjustSizes(20),
    marginVertical: _adjustSizes(20),
    marginBottom: _adjustSizes(40),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 40,
    marginTop: 10,
    fontWeight: "600",
    color: LittleDarkAccent,
  },
});
