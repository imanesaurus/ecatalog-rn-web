import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const FooterGroupText = () => {
  return (
    <View style={styles.containter}>
      <View style={styles.subContainter}>
        <Text style={{ color: "white", fontSize: 25, marginBottom: 10 }}>
          Tentang Baju Bayi Luwuk
        </Text>
        <Text style={{ color: "powderblue", fontSize: 20, marginBottom: 5 }}>
          Tentang Kami
        </Text>
        <Text style={{ color: "powderblue", fontSize: 20, marginBottom: 5 }}>
          Toko Kami
        </Text>
        <Text style={{ color: "powderblue", fontSize: 20, marginBottom: 5 }}>
          Yuk Jadi Reseller
        </Text>
      </View>
      <View>
        <Text style={{ color: "white", fontSize: 25, marginBottom: 10 }}>
          Tentang Baju Bayi Luwuk
        </Text>
        <Text style={{ color: "powderblue", fontSize: 20, marginBottom: 5 }}>
          Tentang Kami
        </Text>
        <Text style={{ color: "powderblue", fontSize: 20, marginBottom: 5 }}>
          Toko Kami
        </Text>
        <Text style={{ color: "powderblue", fontSize: 20, marginBottom: 5 }}>
          Yuk Jadi Reseller
        </Text>
      </View>
    </View>
  );
};

export default FooterGroupText;

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    marginLeft: width * 0.15,
  },
  subContainter: {
      marginRight: width* 0.05
  }
});
