import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import useDimens from "../constant/useDimens";

const CarouselItem = ({ item, data, index }) => {
  const [_width, _height, isWeb] = useDimens();

  return (
    <View
      style={{
        // backgroundColor: "white",
        // margin: 10,
        borderRadius: 10,
        elevation: 5,
        marginRight: 10,
        flex: 1,
        height: isWeb ? _height / 2 : _height / 3,
        width: isWeb ? _width / 2 -120 : _width * 0.9 -10,
        // overflow: 'hidden'
      }}
    >
      <Image
        // resizeMode="cover"
        style={styles.image}
        source={{ uri: item.image_link }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}> {item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    // position: "absolute",
    // overflow: 'hidden'
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    elevation: 5,
  },
});

export default CarouselItem;
