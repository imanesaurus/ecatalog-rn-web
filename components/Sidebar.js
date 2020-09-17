import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AccentColor2 } from "../constant/ColorsConst";

const Mobile = Platform.OS === 'android' || Platform.OS === 'ios';
const {width} = Dimensions.get('window');

const SideBar = (props) => {

    const FB_LINK = 'https://web.facebook.com/bajubayiluwuk/shop/';
    const WA_LINK = 'https://wa.me/+6285343638747?text=Kak+Kiki+saya+mau+ecer+baju+nih..';
    // const onPress = (url) => {
    //     Linking.openURL(props.link)
    // };

  return (
    <View style={styles.sidebar}>
      <TouchableOpacity onPress={() => Linking.openURL(FB_LINK)} >
        <Ionicons
          style={{ marginBottom: 10 }}
          name="logo-facebook"
          size={!Mobile ? 50 : 35}
          color={AccentColor2}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(FB_LINK)}>
        <Ionicons
          style={{ marginBottom: 10 }}
          name="logo-instagram"
          size={!Mobile ? 50 : 35}
          color={AccentColor2}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(WA_LINK)}>
        <Ionicons
          style={{ marginBottom: 10 }}
          name="logo-whatsapp"
          size={!Mobile ? 50 : 35}
          color={AccentColor2}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  sidebar: {
    padding: !Mobile ? 20 : 10,
    paddingVertical: !Mobile ? null : 2,
    borderRadius: 20,
    flex: 1,
    position: "fixed",
    left: !Mobile ? 0 : null,
    top: !Mobile ? 500 : null,
    bottom : !Mobile ? null : 20,
    flexDirection : !Mobile ? null : 'row',
    justifyContent: !Mobile ? null : 'space-evenly',
    alignSelf: !Mobile ? null : 'center',
    width: !Mobile ? null : width*.6,
    
    marginLeft: 20,
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
    backgroundColor: "white",
  },
});
