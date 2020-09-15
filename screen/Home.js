import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { PrimaryColor, AccentColor } from "../constant/ColorsConst";
import FooterGroupText from "../components/FooterGroupText";
import { PRODUCTS } from "../data/dummy-data";

const { width, height } = Dimensions.get("window");

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Baju Bayi Luwuk</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => {
            <View>
              <Text> {itemData.item.availability} </Text>;
            </View>;
          }}
        />
      </View>
      <View style={[styles.footer, styles.absoluteBottom]}>
        <View>
          <Image
            style={styles.footerLogo}
            source={require("../assets/Logo.png")}
          />
          <Text style={styles.footerText}>COPYRIGHT 2020</Text>
          <Text style={styles.footerText}>ALL RIGHTS RESERVED</Text>
        </View>
        <FooterGroupText />
      </View>
      {/* <View style={{...styles.absoluteBottom, flex: 0.1, backgroundColor: AccentColor}}></View> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flex: 0.08,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PrimaryColor,
  },
  headerText: {
    color: "white",
    fontFamily: "Helvetica",
    fontSize: 25,
  },
  footer: {
    flexDirection: "row",
    height: height * 0.25,
    backgroundColor: PrimaryColor,
    paddingHorizontal: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  footerLogo: {
    width: 100,
    height: 100,
  },
  footerText: {
    fontFamily: "Helvetica",
    color: "white",
    marginTop: 10,
  },
  absoluteBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
