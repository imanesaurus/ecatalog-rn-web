import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AccentColor2, AccentColor } from "../constant/ColorsConst";
import { isMobile } from "../constant/isMobile";

const { width } = Dimensions.get("window");

const SideBar = (props) => {
  const FB_LINK = "https://web.facebook.com/bajubayiluwuk/shop/";
  const WA_LINK =
    "https://wa.me/+6285343638747?text=Kak+Kiki+saya+mau+ecer+baju+nih..";
  // const onPress = (url) => {
  //     Linking.openURL(props.link)
  // };

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={() => Linking.openURL(FB_LINK)}>
        <Ionicons
          style={{ marginBottom: isMobile ? null : 10 }}
          name="logo-facebook"
          size={!isMobile ? '300%' : 35}
          color={AccentColor2}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(FB_LINK)}>
        <Ionicons
          style={{ marginBottom: isMobile ? null : 10 }}
          name="logo-instagram"
          size={!isMobile ? '300%' : 35}
          color={AccentColor2}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(WA_LINK)}>
        <Ionicons
          style={{ marginBottom: isMobile ? null : 10 }}
          name="logo-whatsapp"
          size={!isMobile ? '300%' : 35}
          color={AccentColor2}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.cartHandler}>
        <Ionicons
          style={{ marginBottom: isMobile ? null : 10 }}
          name="md-cart"
          size={!isMobile ? '300%' : 35}
          color={AccentColor2}
        />
        {props.badgeData > 0 && (
          <Text
            style={{
              position: "absolute",
              right: 0,
              backgroundColor: AccentColor,
              paddingHorizontal: 5,
              borderRadius: 20,
              color: "white",
              fontSize: isMobile ? 12 : 15,
            }}
          >
            {props.badgeData}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  sidebar: {
    padding: !isMobile ? 20 : 10,
    paddingVertical: !isMobile ? null : 5,
    borderRadius: 20,
    flex: 1,
    position: "fixed",
    top: !isMobile ? '50%' : null,
    bottom: !isMobile ? null : 20,
    flexDirection: !isMobile ? null : "row",
    justifyContent: !isMobile ? null : "space-evenly",
    alignItems: 'center',
    alignSelf: !isMobile ? null : "center",
    width: !isMobile ? null : '60%',
    marginLeft: 20,
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    backgroundColor: "white",
  },
});
