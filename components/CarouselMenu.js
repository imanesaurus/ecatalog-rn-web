import React from "react";
import { Animated, StyleSheet, Text, View, FlatList } from "react-native";
import { AccentColor, AccentColor2 } from "../constant/ColorsConst";
import useDimens from "../constant/useDimens";
import CarouselItem from "./Carousel-item";

let flatlist;

const CarouselMenu = ({ item, index, }) => {
  const scrollX = new Animated.Value(0);
  const [_width, _height, isWeb] = useDimens();
  let position = Animated.divide(scrollX, isWeb ? _width * 0.7 : _width * 0.7);
  return (
    <View style={styles(_width, _height).mainContainer}>
      <FlatList
        data={item}
        snapToEnd
        // ref={(flatList) => {
        //   this.flatList = flatList;
        // }}
        keyExtractor={(item, index) => "key" + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CarouselItem
              item={item}
              index={index}
              _width={_width}
              _height={_height}
              data={item}
              isWeb={isWeb}
            />
          );
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } },
        ])}
      />
      <View style={styles().dotView}>
        {item.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i],
            outputRange: [0.2, 1, 0.2],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: "#595959",
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CarouselMenu;

const styles = (_width, _height) =>
  StyleSheet.create({
    dotView: { flexDirection: "row", justifyContent: "center" },
    mainContainer: {
      // flex: 1,
      width: _width,
      paddingHorizontal: 100,
      paddingTop: 50,
      // height: _height/3
    },
  });
