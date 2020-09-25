import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
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

const { width, height } = Dimensions.get("window");
const HEADER_HEIGHT = height * 0.06;

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
  // const { addTocart } = props;

  useEffect(() => {
    console.log(availableCategory);
    return () => {
      //
    };
  }, []);
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
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text style={styles.headerText}>Baju Bayi Luwuk</Text>
      </View>
      <View style={{ zIndex: 3, position: "relative" }}>
        <SideBar
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
          <Text style={styles.headerFlatlistText}>Kategori</Text>
        </View>
        <View>
          <FlatList
            numColumns={4}
            contentContainerStyle={{
              flex: 1,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 50,
            }}
            data={category}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <CategoryList title={item.title} image={item.image_link} />
            )}
          />
        </View>
        <Text style={{fontSize: _adjustSizes(40), color: LittleDarkAccent, alignSelf:'center', }}>Produk Terbaru</Text>
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
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
            marginHorizontal: isMobile ? null : 100,
            paddingBottom: "25%",
          }}
          sscrollEnabled
          showsVerticalScrollIndicator={false}
          // numColumns={isMobile ? 2 : 4}
          horizontal
          data={products.reverse().slice(0,4)}
          keyExtractor={(item, index) => item}
          renderItem={({ item }) => (
            <ProductList
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
            style={styles.footerLogo}
            source={require("../assets/Logo.png")}
          />
          <Text adjustsFontSizeToFit={true} style={styles.footerText}>
            COPYRIGHT 2020
          </Text>
          <Text adjustsFontSizeToFit={true} style={styles.footerText}>
            ALL RIGHTS RESERVED
          </Text>
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
    display: "flex",
    paddingTop: height * 0.02,
    flex: 1,
    position: "fixed",
    zIndex: 1,
    height: HEADER_HEIGHT,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 5px rgb(0,0,0,0.1)",

    backgroundColor: "white",
  },
  headerText: {
    color: LittleDarkAccent,
    fontFamily: "Helvetica",
    fontSize: 20,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: HEADER_HEIGHT,
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
    width: isMobile ? '30%' : '10%',
    height: HEADER_HEIGHT + 10,

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
    color: DarkAccent,
    fontSize: _adjustSizes(20),
  },
  footer: {
    flexDirection: "row",
    height: height * 0.2,
    backgroundColor: DarkAccent,
    alignItems: "center",
    justifyContent: "space-evenly",
    // boxShadow: "-2px -2px 10px rgb(0,0,0,0.5)",
    flexWrap: "wrap",
    marginTop: 100,
  },
  footerLogo: {
    width: _adjustSizes(100),
    height: _adjustSizes(100),
  },
  footerText: {
    fontFamily: "Helvetica",
    color: "white",
    marginTop: 10,
    fontSize: isMobile ? 10 : 20,
  },
});
