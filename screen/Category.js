import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import { AccentColor, DarkAccent } from "../constant/ColorsConst";
import useDimens from "../constant/useDimens";
import data from "../data/data.json";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import priceInt from "../constant/function";
import { set } from "react-native-reanimated";
import Loading from "../components/Loading";

const Category = ({ match, rem }) => {
  const [_width, _height, isWeb] = useDimens();
  const [meals, setNewMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const cid = match.params.cid;
  // const items = data.categories.find((x) => x.cid === cid);

  const fetchMeals = async () => {
    const mealsData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cid}`);
    const _meals = await mealsData.json();
    setNewMeals(_meals);
  }

  useEffect(async () => {
    await setIsLoading(true);
    await fetchMeals();
    await setIsLoading(false);
  }, [])

  return (
    <View>
      {!isLoading ? (
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
            data={meals.meals}
            keyExtractor={(item, index) => item.cid}
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
                price={priceInt(10000, 50000)}
                item={item}
              />
            )}
          />
        </Slide>
      </View>
      ) : <Loading />}
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
