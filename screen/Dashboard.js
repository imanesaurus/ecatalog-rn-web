import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import CartPopUp from "../components/CartPopUp";
import CategoryList from "../components/CategoryList";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import SideBar from "../components/SideBar";
import { DarkAccent, LittleDarkAccent } from "../constant/ColorsConst";
import priceInt, { cartTotal } from "../constant/function";
import { HEADER_MARGIN, isMobile } from "../constant/isMobile";
import useDimens from "../constant/useDimens";
import data from "../data/data.json";
// import * as _Action from "../store/actions/menu"
import {
  fetchAllMenu,
  fetchCategory,
  fetchMenu,
  isLoadingHandler,
} from "../store/actions/menu";

const PADDING_LEFT = "20%";

const Dashboard = () => {
  const availCat = useSelector((state) => state.menu.categoryList);
  const catLength = availCat.categories;
  const availLatMenu = useSelector((state) => state.menu.latestMenu);
  const availMenu = useSelector((state) => state.menu.availableMenu);
  const loading = useSelector((state) => state.menu.isFetching);
  const availablePromo = data.Promo;
  const [promo, setPromo] = useState(availablePromo);
  const [_width, _height, isWeb] = useDimens();
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [meals, setMeals] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const _rem = (size) => {
    if (_height > _width) {
      return ((size * _width) / 380) * 2;
    } else {
      return (size * _height) / 380;
    }
  };

  const fetchNewManu = useCallback(async () => {
    // await dispatch(isLoadingHandler());
    dispatch(fetchCategory());
    dispatch(fetchMenu("starter"));
    // dispatch(fetchLatestMenu());
  }, [dispatch]);

  useEffect(async () => {
    await fetchNewManu();
  }, []);

  const modalHandler = () => {
    setModalVisible(!modalVisible);
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

  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category);
    dispatch(fetchAllMenu(category.strCategory.toLowerCase()));
    setMeals(true);
  };
  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <View>
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
          <View style={[styles.body]}>
            {visible ? (
              <CartPopUp
                isTotal={total > 0}
                data={cartItems}
                close={() => setVisible(false)}
                removeCart={removeFromCart}
                cartTotal={cartTotal(total)}
              />
            ) : null}
            <View
              style={{
                // flex: 1,
                // height: _height / 1.8,
                // width: _width * 0.8,
                // alignItems: "center",
                justifyContent: "center",
                marginVertical: 10,
                // flexGrow: 1,
              }}
            >
              <Fade left>
                <View style={styles.headerFlatlist}>
                  <Text
                    style={{
                      ...styles.headerFlatlist,
                      paddingLeft: isWeb ? PADDING_LEFT : null,
                      fontSize: isWeb ? _rem(22) : _rem(12),
                      color: LittleDarkAccent,
                      marginTop: 10,
                    }}
                  >
                    Promo Saat ini
                  </Text>
                </View>
              </Fade>
              <Slide bottom cascade>
                <FlatList
                  data={promo}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{
                    paddingLeft: isWeb ? PADDING_LEFT : null,
                  }}
                  keyExtractor={(item) => item.pid}
                  renderItem={({ item }) => {
                    return (
                      <ProductList
                        style={{
                          flex: 1,
                          width: !isWeb ? 150 : _width / 6,
                          height: !isWeb ? 350 / 2 : _width / 5 - 20,
                        }}
                        fontSize={!isWeb ? _rem(5) : _rem(8)}
                        title={item.title}
                        // image={item.image_link}
                        imagePath={require(`../assets/${item.image_link}`)}
                        price={cartTotal(priceInt(400, 900) * 100)}
                        onPress={() => addTocart(item)}
                        item={item}
                      />
                    );
                  }}
                />
              </Slide>
            </View>
            <View style={styles.headerFlatlist}>
              <Fade left>
                <Text
                  style={[
                    styles.headerFlatlistText,
                    {
                      fontSize: isWeb ? _rem(22) : _rem(12),
                      paddingVertical: 10,
                      paddingLeft: isWeb ? PADDING_LEFT : null,
                      color: LittleDarkAccent,
                    },
                  ]}
                >
                  Pilih kategori favoritmu!
                </Text>
              </Fade>
            </View>
            <Slide bottom cascade>
              <FlatList
                // numColumns={4}
                horizontal
                contentContainerStyle={{
                  flex: 1,
                  // justifyContent: "center",
                  // alignItems: "center",
                  paddingTop: 20,
                  paddingLeft: isWeb ? PADDING_LEFT : null,
                }}
                data={availCat.categories}
                keyExtractor={(item) => item.idCategory}
                showsHorizontalScrollIndicator={isWeb ? false : true}
                renderItem={({ item }) => (
                  <CategoryList
                    fontSize={isWeb ? _rem(8) : _rem(5)}
                    title={item.strCategory.toUpperCase()}
                    image={item.strCategoryThumb}
                    style={{
                      width: !isMobile ? _width / 8 - 20 : _width / 4 - 20,
                      height: !isMobile ? _width / 8 - 20 : _width / 4 - 20,
                      marginVertical: isWeb ? 10 : null,
                    }}
                    cid={item.strCategory.toLowerCase()}
                    onPress={() => {
                      selectedCategoryHandler(item);
                    }}
                    selectedCategory={selectedCategory}
                    item={item}
                  />
                )}
              />
            </Slide>
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

            {!meals ? (
              <Fade left>
                <View style={styles.headerFlatlist}>
                  <Text
                    style={{
                      ...styles.headerFlatlist,
                      fontSize: isWeb ? _rem(22) : _rem(12),
                      color: LittleDarkAccent,
                      paddingLeft: isWeb ? PADDING_LEFT : null,
                    }}
                  >
                    Latest Menu
                  </Text>
                </View>
                <FlatList
                  contentContainerStyle={{
                    // marginHorizontal: !isWeb ? null : 100,
                    // paddingBottom: "25%",
                    justifyContent: isWeb ? null : "center",
                    alignItems: "center",
                    paddingLeft: isWeb ? PADDING_LEFT : null,
                  }}
                  scrollEnabled
                  showsVerticalScrollIndicator={false}
                  numColumns={isMobile ? 2 : 4}
                  // horizontal
                  // data={products.reverse().slice(0, 8)}
                  data={availMenu.meals}
                  // data={products}
                  keyExtractor={(item, index) => item.idCategory}
                  renderItem={({ item }) => (
                    <Slide bottom cascade>
                      <ProductList
                        style={{
                          width: !isWeb ? 150 : _width / 6,
                          height: !isWeb ? 350 / 2 : _width / 5 - 20,
                        }}
                        fontSize={!isWeb ? _rem(5) : _rem(8)}
                        title={item.strMeal}
                        image={item.strMealThumb}
                        price={cartTotal(priceInt(100, 400) * 100)}
                        onPress={() => addTocart(item)}
                        item={item}
                      />
                    </Slide>
                  )}
                />
              </Fade>
            ) : (
              <FlatList
                ListHeaderComponent={
                  <Text
                    style={{
                      fontSize: isWeb ? _rem(22) : _rem(12),
                      color: LittleDarkAccent,
                    }}
                  >
                    {selectedCategory.strCategory}
                  </Text>
                }
                ListHeaderComponentStyle={{alignSelf: 'flex-start', marginHorizontal: 20}}
                contentContainerStyle={{
                  // marginHorizontal: !isWeb ? null : 100,
                  // paddingBottom: "25%",
                  justifyContent: isWeb ? null : "center",
                  alignItems: "center",
                  paddingLeft: isWeb ? PADDING_LEFT : null,
                }}
                scrollEnabled
                showsVerticalScrollIndicator={false}
                numColumns={isMobile ? 2 : 4}
                // horizontal
                // data={products.reverse().slice(0, 8)}
                data={availLatMenu.meals}
                // data={products}
                keyExtractor={(item, index) => item.idMeal}
                renderItem={({ item }) => (
                  <Slide bottom cascade>
                    <ProductList
                      style={{
                        width: !isWeb ? 150 : _width / 6,
                        height: !isWeb ? 350 / 2 : _width / 5 - 20,
                      }}
                      fontSize={!isWeb ? _rem(5) : _rem(8)}
                      title={item.strMeal}
                      image={item.strMealThumb}
                      price={cartTotal(priceInt(100, 400) * 100)}
                      onPress={() => addTocart(item)}
                      item={item}
                    />
                  </Slide>
                )}
              />
            )}
          </View>
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    marginTop: HEADER_MARGIN + 20,
    backgroundColor: "#fafcfb",
    overflow: "visible",
  },
  headerFlatlist: {
    paddingHorizontal: 20,
    borderRadius: 20,
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
      marginHorizontal: 10,
    },
  });

export default Dashboard;
