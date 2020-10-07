import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Modal from "react-modal";
import CartPopUp from "../components/CartPopUp";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import useDimens from "../constant/useDimens";
import data from "../data/data.json";
import { DarkAccent, LittleDarkAccent } from "../constant/ColorsConst";
import { isMobile, HEADER_MARGIN, HEADER_HEIGHT } from "../constant/isMobile";

const Dashboard = () => {
  const availableProducts = data.products;
  const availableCategory = data.categories;
  const [products, setProducts] = useState(availableProducts);
  const [category, setCategory] = useState(availableCategory);
  const [_width, _height, isWeb] = useDimens();
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const _rem = (size) => {
    if (_height > _width) {
      return ((size * _width) / 380) * 2;
    } else {
      return (size * _height) / 380;
    }
  };

  const modalHandler = () => {
    setModalVisible(!modalVisible);
  }
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

  return (
    <View style={{ flex: 1 }}>
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
              fontSize={isWeb ? _rem(8) : _rem(5)}
              title={item.title}
              image={item.image_link}
              style={{
                width: !isMobile ? _width / 8 - 20 : _width / 4 - 20,
                height: !isMobile ? _width / 8 - 20 : _width / 4 - 20,
                minWidth: 60,
                minHeight: 60,
              }}
              onPress={modalHandler}
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
              fontSize={!isWeb ? _rem(5) : _rem(8)}
              title={item.title}
              image={item.image_link}
              price={item.price}
              onPress={() => addTocart(item)}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: HEADER_MARGIN + 20,
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
});
const Bar = (isWeb) =>
  StyleSheet.create({
    bar: {
      padding: isWeb ? 20 : 0,
      paddingVertical: isWeb ? null : 10,
      top: isWeb ? "40%" : null,
      left: isWeb ? 20 : null,
      right: isWeb ? null : null,
      bottom: isWeb ? null : 20,
      flexDirection: isWeb ? null : "row",
      justifyContent: isWeb ? null : "space-evenly",
      alignSelf: isWeb ? null : "center",
      width: isWeb ? null : "60%",
    },
  });
