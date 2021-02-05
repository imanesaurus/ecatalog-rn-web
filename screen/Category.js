import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import { AccentColor, DarkAccent } from "../constant/ColorsConst";
import priceInt, { cartTotal } from "../constant/function";
import useDimens from "../constant/useDimens";
import { fetchMenu, isLoadingHandler } from "../store/actions/menu";

const Category = ({ match, rem }) => {
  const availMenu = useSelector((state) => state.menu.availableMenu);
  const loading = useSelector((state) => state.menu.isFetching);
  const [_width, _height, isWeb] = useDimens();
  const cid = match.params.cid;

  const dispatch = useDispatch();
  // const items = data.categories.find((x) => x.cid === cid);

  const fetchNewMenu = useCallback(async () => {
    await dispatch(isLoadingHandler());
    await dispatch(fetchMenu(cid));
  }, [dispatch]);

  useEffect(() => {
    fetchNewMenu();
  }, []);

  return (
    <View>
      {!loading ? (
        <View style={styles.MainWrapper}>
          <Fade left>
            <Text
              style={[
                styles.title,
                {
                  fontSize: rem(20),
                },
              ]}
            >
              {cid.charAt(0).toUpperCase() + cid.slice(1)}
            </Text>
          </Fade>
          {/* <Text>{item.title}</Text> */}

          <Link
            to="/"
            style={{
              textDecoration: "none",
              backgroundColor: AccentColor,
              //   width: isWeb ? _width * 0.06 : _width * 0.15,
              flexDirection: "row",
              alignSelf: "flex-start",
              borderRadius: 10,
              padding: 5,
              position: "float",
              marginLeft: isWeb ? 100 : 20,
            }}
          >
            <Ionicons
              name="ios-arrow-round-back"
              size={15}
              color="white"
              style={{ marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>Kembali</Text>
          </Link>
          <Slide bottom cascade>
            <FlatList
              contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
                // flexWrap: "wrap",
                alignItems: "center",
                // paddingBottom: "25%",
              }}
              numColumns={isWeb ? 4 : 2}
              // horizontal
              data={availMenu.meals}
              keyExtractor={(item, index) => item.idMeal}
              renderItem={({ item }) => (
                <ProductList
                  style={{
                    //   width: !isWeb ? 150 : _width / 6,
                    //   height: !isWeb ? 350 / 2 : _width / 5 - 20,
                    width: !isWeb ? 150 : _width / 6,
                    height: !isWeb ? 350 / 2 : _width / 5 - 20,
                  }}
                  fontSize={!isWeb ? rem(5) : rem(8)}
                  title={item.strMeal}
                  image={item.strMealThumb}
                  price={cartTotal(priceInt(100, 200) * 100)}
                  item={item}
                />
              )}
            />
          </Slide>
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  MainWrapper: {
    flex: 1,
    paddingTop: 130,
    alignItems: "center",
    backgroundColor: "#fafcfb",
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    color: DarkAccent,
  },
});
