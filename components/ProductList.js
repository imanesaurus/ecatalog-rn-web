import React from "react";
import { StyleSheet, Image, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const ProductList = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        boxShadow: "0px 0px 5px rgba(0,0,0,.4)",
        marginVertical: 20,
        borderRadius: 10,
        maxWidth: 300,
        maxHeight: 280,
        overflow: 'hidden'
      }}
    >
      <View style={{flex: 1, width: 300, height: 250, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
        <Image
          style={{width: 300, height: 250,}}
          source={{ uri: props.image }}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 10, paddingHorizontal: 5, }}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text}>{props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default ProductList;
