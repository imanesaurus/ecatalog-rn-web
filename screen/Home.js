import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CartPopUp from "../components/CartPopUp";
import FilterPicker from "../components/FilterPicker";
import FooterGroupText from "../components/FooterGroupText";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import { _adjustSizes } from "../constant/adjustedSizes";
import {
  AccentColor,
  AccentColor2,
  DarkAccent,
  LittleDarkAccent,
  PrimaryColor,
} from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";
import data from "../data/data.json";
import CategoryList from "../components/CategoryList";
import { window, screen } from "../constant/adjustedWindow";

const { width, height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.09;

const Home = (props) => {
  const { navigation } = props;
  const availableProducts = data.products;
  const availableCategory = data.categories;
  const [products, setProducts] = useState(availableProducts);
  const [category, setCategory] = useState(availableCategory);
  const [visible, setVisible] = useState(false);
  const [filteredProd, setFilteredProducts] = useState(products);
  const [cartItems, setCartItems] = useState([]);
  const [ageFilter, setAgeFilter] = useState("Semua");
  const [color, setColor] = useState("Semua");
  const [inStock, setInstock] = useState("In Stock");
  const [_dimensions, setDimensions] = useState({ window, screen });
  const _width = _dimensions.window.width;
  const _height = _dimensions.window.height;

  const isWeb = _width > 500;

  const onChangeDimens = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChangeDimens);
    return () => {
      Dimensions.removeEventListener("change", onChangeDimens);
    };
  });

  const _rem = (size) => {
    if (_height > _width) {
      return (size * _width) / 380 * 2;
    } else {
      return (size * _height) / 380;
    }
  };

  const addTocart = (item) => {
    let currentCart = cartItems;
    let upCart;
    const selectedItem = cartItems.find((i) => i.id === item.id);

    if (selectedItem) {
      selectedItem.count += 1;
    } else {
      upCart = currentCart.push({ ...item, count: 1 });
      setCartItems(currentCart);
    }
  };

  const removeFromCart = (item) => {
    // let currentCart = [...cartItems];
    // currentCart = currentCart.filter((cartItem) => cartItem.id !== item.id);
    // setCartItems(currentCart);
    let currentCart = cartItems;
    const selectedItem = cartItems.find((i) => i.id === item.id);

    if (selectedItem.count < 2) {
      let removedItem;
      removedItem = currentCart.filter((i) => i !== item);
      setCartItems(removedItem);
    } else {
      selectedItem.count -= 1;
    }
  };

  const total = cartItems.reduce(
    (prevValue, { price = 0, count = 0 }) => prevValue + price * count,
    0
  );

  const cartTotal = (total) => {
    var angka = total.toString().split("").reverse().join("");
    var tiga = angka.match(/\d{1,3}/g);
    var join = tiga.join(".").split("").reverse().join("");
    return join;
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

        <Text
          style={[styles.headerText, { fontSize: isWeb ? _rem(12) : _rem(10) }]}
        >
          Baju Bayi Luwuk
        </Text>
      </View>
      <View
        style={{
          zIndex: 3,
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SideBar
          style={Bar(isWeb).bar}
          size={isWeb ? _width * 0.03 : _width * 0.06}
          cartHandler={() => setVisible(!visible)}
          badgeData={cartItems.length}
        />
      </View>
      <View style={styles.body}>
        {/* <View style={styles.panel}>
          <Image
            source={{
              uri:
                "https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/118214863_10220242973257913_3054991116457242156_o.jpg?_nc_cat=106&_nc_sid=e3f864&_nc_eui2=AeF2yXoK0wpvMhsIWItTzIY_QsIfyZM6uFNCwh_Jkzq4U-hHxpYUZe45cAGNbLPEVZI&_nc_ohc=8ApR30iMHRoAX88_276&_nc_ht=scontent.fcgk8-2.fna&tp=7&oh=7e4a9a4264aaf7a2465575a9d3175570&oe=5F8906C0",
            }}
            style={{ resizeMode: "cover", width: "100%", height: "100%" }}
          ></Image>
        </View> */}
        {visible ? (
          <CartPopUp
            isTotal={total > 0}
            data={cartItems}
            close={() => setVisible(false)}
            removeCart={removeFromCart}
            cartTotal={cartTotal(total)}
          />
        ) : null}
        <View style={styles.headerFlatlist}>
          <Text
            style={[
              styles.headerFlatlistText,
              {
                fontSize: isWeb ? _rem(8) : _rem(8),
                paddingVertical: 10,
              },
            ]}
          >
            Kategori
          </Text>
        </View>
        <FlatList
          numColumns={4}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            marginTop: 20,
          }}
          data={category}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <CategoryList
            fontSize={_rem(8)}
              title={item.title}
              image={item.image_link}
              width={!isMobile ? _width / 8 - 20 : _width / 4 - 20}
              height={!isMobile ? _width / 8 - 20 : _width / 4 - 20}
            />
          )}
        />
        <Text
          style={{
            fontSize: _rem(10),
            color: LittleDarkAccent,
            alignSelf: "center",
          }}
        >
          Produk Terbaru
        </Text>
        {/* <View
          style={{
            width: isMobile ? width * 0.9 : width * 0.5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "space-evenly",
          }}
        >
          <FilterPicker
            selectedValue={ageFilter}
            onValueChange={filteredProducts}
            title={"Usia"}
            age={true}
          />
          <FilterPicker
            _color={true}
            selectedValue={color}
            onValueChange={filteredColors}
            title={"Warna"}
          />
          <FilterPicker
            ready={true}
            selectedValue={inStock}
            onValueChange={filteredReady}
            title={"In Stock"}
          />
        </View> */}
        <FlatList
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            marginHorizontal: !isWeb ? null : 100,
            // paddingBottom: "25%",
          }}
          sscrollEnabled
          showsVerticalScrollIndicator={false}
          // numColumns={isMobile ? 2 : 4}
          horizontal
          data={products.reverse().slice(0, 8)}
          keyExtractor={(item, index) => item}
          renderItem={({ item }) => (
            <ProductList
              style={{
                width: !isWeb ? 150 : _width / 6,
                height: !isWeb ? 350 / 2 : _width / 5 - 20,
              }}
              fontSize={isWeb ? _height * 0.016 : _height * 0.014}
              title={item.title}
              image={item.image_link}
              price={item.price}
              onPress={() => addTocart(item)}
            />
          )}
        />
      </View>
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
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: HEADER_HEIGHT + HEADER_HEIGHT * 0.02 + 20,
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
  headerFlatlist: {
    flex: 1,
    // width: isMobile ? "30%" : "10%",
    // height: HEADER_HEIGHT + 10,
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 5px rgb(0,0,0,0.5)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 40,
  },
  headerFlatlistText: {
    color: DarkAccent,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

const Bar = (isWeb) =>
  StyleSheet.create({
    bar: {
      padding: isWeb ? 20 : 0,
      paddingVertical: isWeb ? null : 10,
      top: isWeb ? "50%" : null,
      left: isWeb ? 20 : null,
      right: isWeb ? null : null,
      bottom: isWeb ? null : 20,
      flexDirection: isWeb ? null : "row",
      justifyContent: isWeb ? null : "space-evenly",
      alignSelf: isWeb ? null : "center",
      width: isWeb ? null : "60%",
    },
  });
