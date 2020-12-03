import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import { AccentColor, DarkAccent } from "../constant/ColorsConst";
import useDimens from "../constant/useDimens";
import data from "../data/data.json";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const Category = ({ match, rem }) => {
  const [_width, _height, isWeb] = useDimens();
  const cid = match.params.cid;
  const items = data.categories.find((x) => x.cid === cid);

  return (
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
          {items.title}
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
          data={data.products.filter(
            (p) => p.category.toLowerCase() === items.title.toLowerCase()
          )}
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
              title={item.title}
              image={item.image_link}
              price={item.price}
              item={item}
            />
          )}
        />
      </Slide>
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
