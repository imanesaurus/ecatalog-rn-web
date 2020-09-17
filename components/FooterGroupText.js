import React from "react";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import { isMobile } from "../constant/isMobile";

const { width, height } = Dimensions.get("window");

const FooterGroupText = () => {
  return (
    <View style={styles.containter}>
      <View style={styles.subContainter}>
        <Text style={{ color: "white", fontSize: isMobile ? 12 : 25, marginBottom: 10 }}>
          Tentang Baju Bayi Luwuk
        </Text>
        <Text style={styles.subtext}>Tentang Kami</Text>
        <Text style={styles.subtext}>Toko Kami</Text>
        <Text style={styles.subtext}>Yuk Jadi Reseller</Text>
      </View>
      {/* <View>
        <Text style={{ color: "white", fontSize: isMobile ? 12 : 25, marginBottom: 10 }}>
          Tentang Baju Bayi Luwuk
        </Text>
        <Text style={styles.subtext}>Tentang Kami</Text>
        <Text style={styles.subtext}>Toko Kami</Text>
        <Text style={styles.subtext}>Yuk Jadi Reseller</Text>
      </View> */}
    </View>
  );
};

export default FooterGroupText;

const styles = StyleSheet.create({
  containter: {
    flexDirection: "row",
    alignItems: 'center'
    // marginLeft: width * 0.15,
  },
  subContainter: {
    marginRight: width * 0.05,
  },
  subtext: {
    color: "white",
    fontSize: isMobile ? 10 : 20,
    marginBottom: 5,
  },
});
