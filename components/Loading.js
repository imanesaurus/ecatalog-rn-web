import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import _rem from "../constant/adjustedWindow";
import { DarkAccent } from "../constant/ColorsConst";
import useDimens from "../constant/useDimens";

const Loading = () => {
  const [_height, _width, isWeb] = useDimens();
  return (
    <View style={styles.main}>
      <Image
        style={[styles.image, { height: isWeb ? _height/3 : _height/2, width: isWeb ? _width : _width/2 }]}
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
