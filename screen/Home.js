import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartPopUp from "../components/CartPopUp";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import { DarkAccent, LittleDarkAccent } from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";
import useDimens from "../constant/useDimens";

import About from "./About";
import Dashboard from "./Dashboard";
import Product from "./Product";

const { width, height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.09;

const Home = (props) => {
  const match = props;
  const [_width, _height, isWeb] = useDimens();
  const { navigation } = props;

  const [ageFilter, setAgeFilter] = useState("Semua");
  const [color, setColor] = useState("Semua");
  const [inStock, setInstock] = useState("In Stock");

  const _rem = (size) => {
    if (!isWeb) {
      return ((size * _width) / 380) * 2;
    } else {
      return (size * _height) / 380;
    }
  };

  // Todo : optimize logic filter
  const filteredProducts = async (itemValue) => {
    await setAgeFilter(itemValue);
    await console.log(itemValue);
    if (itemValue === "Semua") {
      await setProducts(availableProducts);
    } else {
      await setProducts(
        availableProducts.filter(
          (p) => p.age_group.toLowerCase().indexOf(itemValue.toLowerCase()) < 0
        )
      );
    }
  };
  const filteredColors = async (itemValue) => {
    setColor(itemValue);
    if (itemValue === "Semua") {
      setProducts(availableProducts);
    } else {
      await setProducts(
        availableProducts.filter(
          (p) => p.color.toLowerCase().indexOf(itemValue.toLowerCase()) >= 0
        )
      );
    }
  };
  const filteredReady = (itemValue) => {
    console.log(itemValue);
    setInstock(itemValue);
    if (itemValue === "Semua") {
      setProducts(availableProducts);
    } else {
      setProducts(
        availableProducts.filter(
          (p) =>
            p.availability.toLowerCase().indexOf(itemValue.toLowerCase()) >= 0
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
        <View
          style={[
            styles.header,
            {
              flex: 1,
              height: height * 0.02,
              backgroundColor: DarkAccent,
              position: "fixed",
              zIndex: 4,
            },
          ]}
        ></View>
        <View
          style={[
            styles.header,
            {
              marginTop: height * 0.02,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 10,
            },
          ]}
        >
          <View>
            <Image
              source={require("../assets/Logo.png")}
              style={{
                width: _height * 0.09,
                height: _height * 0.09,
                marginRight: 10,
              }}
            />
          </View>

          <Link to="/" style={{textDecoration: 'none', hover: {backgroundColor: 'red'}}}>
            <Text
              style={[
                styles.headerText,
                { fontSize: isWeb ? _rem(12) : _rem(8) },
              ]}
            >
              Baju Bayi Luwuk
            </Text>
          </Link>
        </View>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={({match}) => <Product rem={(x) => _rem(x)} match={match}/>} />

        <View style={[styles.footer, styles.absoluteBottom]}>
          <View style={{ flexWrap: "wrap", alignItems: "center" }}>
            <Image
              style={{ width: _height * 0.09, height: _height * 0.09 }}
              source={require("../assets/Logo.png")}
            />
            <View style={styles.footerText}>
              <Text
                adjustsFontSizeToFit={true}
                style={{ fontSize: isWeb ? _rem(8) : _rem(5), color: "white" }}
              >
                COPYRIGHT 2020
              </Text>
              <Text
                adjustsFontSizeToFit={true}
                style={{ fontSize: isWeb ? _rem(8) : _rem(5), color: "white" }}
              >
                ALL RIGHTS RESERVED
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={{...styles.absoluteBottom, flex: 0.1, backgroundColor: AccentColor}}></View> */}
      </View>
    </BrowserRouter>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    position: "fixed",
    zIndex: 1,
    width: "100%",
    boxShadow: "2px 2px 5px rgb(0,0,0,0.1)",
    backgroundColor: "white",
  },
  headerText: {
    color: LittleDarkAccent,
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "600",
  },
  
  panel: {
    marginTop: HEADER_HEIGHT + 20,
    marginBottom: 20,
    // flex: 1,
    width: "90%",
    height: isMobile ? "5%" : "10%",
    boxShadow: "2px 2px 5px rgb(0,0,0,0.5)",
    borderRadius: 20,
    overflow: "hidden",
  },
  
  footer: {
    flexDirection: "row",
    height: height * 0.2,
    backgroundColor: DarkAccent,
    alignItems: "center",
    justifyContent: "space-evenly",
    // boxShadow: "-2px -2px 10px rgb(0,0,0,0.5)",
    flexWrap: "wrap",
    marginTop: 20,
  },
  footerText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
