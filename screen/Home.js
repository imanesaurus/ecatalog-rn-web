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
import {
  PrimaryColor,
  AccentColor,
  AccentColor2,
} from "../constant/ColorsConst";
import FooterGroupText from "../components/FooterGroupText";
import data from "../data/data.json";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import { LinearGradient } from "expo-linear-gradient";
import { isMobile } from "../constant/isMobile";

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
        <View
          style={[
            styles.header,
            { height: height * 0.02, backgroundColor: AccentColor2 },
          ]}
        ></View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Baju Bayi Luwuk</Text>
        </View>
        <View style={{ zIndex: 3 }}>
          <SideBar />
        </View>
        <View style={styles.body}>
          <View style={styles.panel}>
            <Image
              source={{
                uri:
                  "https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/118214863_10220242973257913_3054991116457242156_o.jpg?_nc_cat=106&_nc_sid=e3f864&_nc_eui2=AeF2yXoK0wpvMhsIWItTzIY_QsIfyZM6uFNCwh_Jkzq4U-hHxpYUZe45cAGNbLPEVZI&_nc_ohc=8ApR30iMHRoAX88_276&_nc_ht=scontent.fcgk8-2.fna&tp=7&oh=7e4a9a4264aaf7a2465575a9d3175570&oe=5F8906C0",
              }}
              style={{ flex: 1, width: "100%", height: "100%" }}
            ></Image>
          </View>
          <View style={styles.headerFlatlist}>
            <Text style={styles.headerFlatlistText}>All Products</Text>
          </View>
          <FlatList
            numColumns={isMobile ? 2 : 4}
            data={this.state.products}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
        <LinearGradient
          colors={["white", AccentColor]}
          style={styles.header}
          style={[styles.footer, styles.absoluteBottom]}
        >
          <View style={{ flexWrap: "wrap", alignItems: "center" }}>
            <Image
              style={styles.footerLogo}
              source={require("../assets/Logo.png")}
            />
            <Text style={styles.footerText}>COPYRIGHT 2020</Text>
            <Text style={styles.footerText}>ALL RIGHTS RESERVED</Text>
          </View>
          <FooterGroupText />
        </LinearGradient>
        {/* <View style={{...styles.absoluteBottom, flex: 0.1, backgroundColor: AccentColor}}></View> */}
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  header: {
    zIndex: 1,
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 5px rgb(0,0,0,0.1)",
    backgroundColor: "white",
  },
  headerText: {
    color: "black",
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
    marginBottom: 20,
    flex: 1,
    width: width * 0.9,
    height: height * 0.8,
    boxShadow: "2px 2px 50px rgb(0,0,0,0.1)",
    borderRadius: 20,
    overflow: "hidden",
  },
  headerFlatlist: {
    width: isMobile ? width*.5 : width*.25,
    height: height*.08,

    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 5px rgb(0,0,0,0.5)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  headerFlatlistText: {
    fontSize: isMobile? 20 : 40,
  },
  footer: {
    flexDirection: "row",
    height: height * 0.25,
    backgroundColor: PrimaryColor,
    alignItems: "center",
    justifyContent: "space-evenly",
    // boxShadow: "-2px -2px 10px rgb(0,0,0,0.5)",
    flexWrap: "wrap",
  },
  footerLogo: {
    width: isMobile ? 50 : 100,
    height: isMobile ? 50 : 100,
  },
  footerText: {
    fontFamily: "Helvetica",
    color: "white",
    marginTop: 10,
    fontSize: isMobile ? 10 : 20,
  },
  absoluteBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
