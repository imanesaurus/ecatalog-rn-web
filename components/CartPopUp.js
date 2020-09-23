import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { _adjustSizes } from "../constant/adjustedSizes";
import { AccentColor, AccentColor2 } from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";
import CustomButton from "./CustomButton";

const { width, height } = Dimensions.get("window");

const CartPopUp = (props) => {
  const { data } = props;

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginBottom: 20,
          borderBottomWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "flex-start",
          marginHorizontal: 20,
        }}
      >
        <View>
          <Image
            source={{ uri: item.image_link }}
            style={{
              width: _adjustSizes(60),
              height: _adjustSizes(60),
              marginRight: 10,
            }}
          />
        </View>
        <View style={{ flex: 1, width: "90%", marginRight: 10 }}>
          <Text style={{ fontSize: _adjustSizes(20) }}>{item.title}</Text>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: _adjustSizes(10),
              marginTop: 5,
            }}
          >
            {item.color === "" ? null : (
              <Text style={styles.subText}>{item.color}</Text>
            )}
            <Text style={styles.subText}>{item.age_group}</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: _adjustSizes(20) }}>
            {item.count} x {item.price}
          </Text>
          <CustomButton title="Remove" onPress={() => props.removeCart(item)} />
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.modalcontent, { zIndex: 5 }]}>
      <View
        style={{
          padding: 10,
          boxShadow: "1px 1px 2px rgb(0,0,0,0.5)",
          marginBottom: 20,
          borderRadius: 10,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: _adjustSizes(20) }}>
          Kamu memiliki {data.length} item di keranjang{" "}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 10 }}
      >
        <FlatList
          data={props.data}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItem}
        />
      </ScrollView>
      <View
        style={{
          padding: _adjustSizes(10),
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          borderTopWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        {props.isTotal ? (
          <View>
            <Text style={{ fontSize: _adjustSizes(30), fontWeight: "600" }}>
              Total: Rp.{props.cartTotal}
            </Text>
          </View>
        ) : null}
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <View>
            <CustomButton
              style={{
                flex: 1,
                fontSize: isMobile ? 15 : 20,
                paddingHorizontal: _adjustSizes(20),
              }}
              title={"Checkout"}
              onPress={props.onPress}
              bgcolor={AccentColor2}
              textColor={"white"}
            />
          </View>
          <View>
            <CustomButton
              style={{
                fontSize: isMobile ? 15 : 20,
                paddingHorizontal: _adjustSizes(20),
              }}
              backgroundColor={"white"}
              textColor={AccentColor2}
              title={"Close"}
              onPress={props.close}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartPopUp;

const styles = StyleSheet.create({
  modalcontent: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "center",
    position: "fixed",
    width: isMobile ? width * 0.8 : width / 2,
    height: height / 2,
    top: height * 0.06,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    boxShadow: "2px 2px 5px rgb(0,0,0,0.5)",
  },
  subText: {
    marginRight: _adjustSizes(20),
    backgroundColor: AccentColor,
    paddingVertical: _adjustSizes(5),
    paddingHorizontal: _adjustSizes(10),
    borderRadius: 10,
    color: "white",
    fontSize: _adjustSizes(20),
  },
});

// const estyles = EStyleSheet.build({
//   text: {
//     fontSize: '2rem'
//   }
// })
