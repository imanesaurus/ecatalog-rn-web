import React from "react";
import {
  View,
  Text,
  Modal,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { AccentColor2, LittleDarkAccent } from "../constant/ColorsConst";
import { Ionicons } from "@expo/vector-icons";
import SocialCard from "./SocialCard";

export const CustomModal = ({
  modalVisible,
  modalHandler,
  height,
  width,
  bgColor,
  body,
  props,
}) => {
  return (
    <Modal
      underlayColor="red"
      animationType="fade"
      visible={modalVisible}
      onRequestClose={modalHandler}
      transparent={true}
      {...props}
    >
      <TouchableWithoutFeedback onPress={modalHandler}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)" }}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: bgColor,
              borderColor: "#eee",
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: "center",
              marginTop: 100,
              height,
              margin: "auto",
              padding: 30,
              width,
            }}
          >
            {body}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export const ContactModal = ({ fontSize, _rem, isWeb }) => {
  const FB_LINK = "https://web.facebook.com/bajubayiluwuk/shop/";
  const WA_LINK =
    "https://wa.me/+6285343638747?text=Kak+Kiki+saya+mau+ecer+baju+nih..";
  const IG_LINK = "https://www.instagram.com/bajubayiluwuk";

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: fontSize }}>
        Silahkan Hubungi Kami melalui Sosial Media Dibawah:
      </Text>
      <SocialCard
        link={FB_LINK}
        isWeb={isWeb}
        _rem={_rem}
        title="Facebook"
        icon="logo-facebook"
        color="white"
        bgcolor="#3b5998"
      />
      <SocialCard
        link={IG_LINK}
        isWeb={isWeb}
        _rem={_rem}
        title="Instagram"
        icon="logo-instagram"
        color="white"
        bgcolor={AccentColor2}
      />
      <SocialCard
        link={WA_LINK}
        isWeb={isWeb}
        _rem={_rem}
        title="Whatsapp"
        icon="logo-whatsapp"
        color="white"
        bgcolor="#25D366"
      />
    </View>
  );
};

const styles = StyleSheet.create({});
