import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import _rem from "../constant/adjustedWindow";
import { DarkAccent } from "../constant/ColorsConst";
import useDimens from "../constant/useDimens";

const Loading = () => {
  const [_height, _width] = useDimens();
  return (
    <View style={styles.main}>
      <Image
        style={[styles.image, { height: _height/3, width: _width }]}
        source={require("../assets/donut.png")}
      />
      <Text style={[styles.text, { fontSize: _rem(20) }]}>Please wait...</Text>
      <ActivityIndicator color={DarkAccent} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { marginTop: 100,},
  text: { fontWeight: "400", marginBottom: 10 },
});
