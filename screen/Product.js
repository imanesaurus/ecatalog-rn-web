import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { AccentColor, LittleDarkAccent, shadow } from "../constant/ColorsConst";
import { HEADER_MARGIN } from "../constant/isMobile";
import useDimens from "../constant/useDimens";

const Product = ({ match, rem }) => {
  const [_width, _height, isWeb] = useDimens();
  const [mealsDetail, setMealsDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = match.params.id;

  const fetchMealsDetail = async () => {
    const mealsDetailData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const _mealsDetail = await mealsDetailData.json();
    setMealsDetail(_mealsDetail.meals[0]);
  };

  useEffect(async () => {
    await setIsLoading(true);
    await fetchMealsDetail();
    await setIsLoading(false);
  }, []);

  return (
    <View>
      {!isLoading ? (
        <Fade bottom>
          <View style={[styles.container]}>
            <Link
              to="/"
              style={{
                marginLeft: HEADER_MARGIN,
                textDecoration: "none",
                marginTop: HEADER_MARGIN / 4,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: AccentColor,
                  width: isWeb ? _width * 0.06 : _width * 0.18,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: shadow(2, 0.2),
                  borderRadius: 10,
                  paddingVertical: 5,
                }}
              >
                <Ionicons
                  name="ios-arrow-round-back"
                  size={15}
                  color="white"
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: "white" }}>Kembali</Text>
              </View>
            </Link>
            <View style={[styles.box]}>
              <View
                style={[
                  styles.imageContainer,
                  {
                    width: _height / 2,
                    height: _height / 2,
                  },
                ]}
              >
                <Image
                  source={{ uri: mealsDetail.strMealThumb }}
                  style={styles.image}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: HEADER_MARGIN,
                  alignItems: isWeb ? "flex-start" : "center",
                  justifyContent: "center",
                  width: "50%",
                }}
              >
                <Text
                  style={[
                    styles.title,
                    {
                      marginTop: isWeb ? null : 10,
                      textAlign: isWeb ? "left" : "center",
                      fontSize: isWeb ? rem(12) : rem(10),
                    },
                  ]}
                >
                  {mealsDetail.strMeal}
                </Text>
                <View style={{ height: "50%" }}>
                  <Text style={{ color: "gray" }}>Description:</Text>
                  <Text
                    style={{
                      flex: 1,
                      marginVertical: 5,
                      boxShadow: shadow(5, 0.2),
                      borderRadius: 10,
                      fontSize: isWeb ? 14 : rem(4),
                      textAlign: "justify",
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                    }}
                  >
                    {mealsDetail.strInstructions}
                  </Text>
                </View>
                {/* <CustomButton
              title="Add to Cart"
              bgcolor={AccentColor2}
              textColor="white"
              style={{
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            /> */}
              </View>
            </View>
          </View>
        </Fade>
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: HEADER_MARGIN + 40 },
  box: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  imageContainer: {
    backgroundColor: "white",
    marginHorizontal: HEADER_MARGIN,
    boxShadow: shadow(6, 0.2),
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    color: LittleDarkAccent,
  },
});
