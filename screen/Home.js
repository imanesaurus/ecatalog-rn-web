import React, { useEffect, useState, Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { PrimaryColor, AccentColor } from "../constant/ColorsConst";
import FooterGroupText from "../components/FooterGroupText";
import data from "../data/data.json";
import ProductList from "../components/ProductList";

const { width, height } = Dimensions.get("window");

const renderItem = ({ item }) => {
  return (
    <ProductList
      title={item.title}
      image={item.image_link}
      price={item.price}
    />
  );
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
    };
  }

  render() {
    // const availableProducts = PRODUCTS;
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Baju Bayi Luwuk</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.panel}>
              <Image
                source={{
                  uri:
                    "https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/118214863_10220242973257913_3054991116457242156_o.jpg?_nc_cat=106&_nc_sid=e3f864&_nc_eui2=AeF2yXoK0wpvMhsIWItTzIY_QsIfyZM6uFNCwh_Jkzq4U-hHxpYUZe45cAGNbLPEVZI&_nc_ohc=8ApR30iMHRoAX88_276&_nc_ht=scontent.fcgk8-2.fna&tp=7&oh=7e4a9a4264aaf7a2465575a9d3175570&oe=5F8906C0",
                }}
                style={{ flex: 1, width: "100%", height: "100%" }}
              />
            </View>
            <FlatList
              numColumns={4}
              data={this.state.products}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
          </View>
          <View style={[styles.footer, styles.absoluteBottom]}>
            <View style={{ flexWrap: "wrap", alignItems: "center" }}>
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
  }
}

export default Home;

const styles = StyleSheet.create({
  header: {
    height: height*0.08,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "2px 2px 5px rgb(0,0,0,0.1)",
  },
  headerText: {
    color: PrimaryColor,
    fontFamily: "Helvetica",
    fontSize: 25,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  panel: {
    marginTop: 20,
    flex: 1,
    width: width * 0.9,
    height: 1000,
    boxShadow: "2px 2px 50px rgb(0,0,0,0.1)",
    borderRadius: 20,
    overflow: "hidden",
  },
  footer: {
    flexDirection: "row",
    height: height * 0.25,
    backgroundColor: PrimaryColor,
    alignItems: "center",
    justifyContent: "space-evenly",
    boxShadow: "-2px -2px 10px rgb(0,0,0,0.1)",
    flexWrap: "wrap",
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
