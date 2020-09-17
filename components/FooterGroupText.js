import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const FooterGroupText = () => {
  return (
    <View style={styles.containter}>
      <View style={styles.subContainter}>
        <Text style={{ color: "white", fontSize: 25, marginBottom: 10 }}>
          Tentang Baju Bayi Luwuk
        </Text>
        <Text style={styles.subtext}>Tentang Kami</Text>
        <Text style={styles.subtext}>Toko Kami</Text>
        <Text style={styles.subtext}>Yuk Jadi Reseller</Text>
      </View>
      <View>
        <Text style={{ color: "white", fontSize: 25, marginBottom: 10 }}>
          Tentang Baju Bayi Luwuk
        </Text>
        <Text style={styles.subtext}>Tentang Kami</Text>
        <Text style={styles.subtext}>Toko Kami</Text>
        <Text style={styles.subtext}>Yuk Jadi Reseller</Text>
      </View>
    </View>
  );
};

export default FooterGroupText;

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    // marginLeft: width * 0.15,
  },
  subContainter: {
    marginRight: width * 0.05,
  },
  subtext: {
    color: "powderblue",
    fontSize: Platform.OS === "web" ? 20 : 10,
    marginBottom: 5,
  },
});
