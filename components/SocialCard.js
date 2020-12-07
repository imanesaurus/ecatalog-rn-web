import React from "react";
import {
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { shadow } from "../constant/ColorsConst";

const SocialCard = ({ isWeb, _rem, icon, title, color, link, bgcolor }) => {
  return (
    <View
      style={[
        styles.socialCard,
        { backgroundColor: bgcolor, boxShadow: shadow(2, 0.7) },
      ]}
    >
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            style={{ marginVertical: !isWeb ? null : 5 }}
            name={icon}
            size={35}
            color={color}
          />
          <Text
            style={{
              marginLeft: 10,
              color: "white",
              fontSize: isWeb ? _rem(14) : _rem(9),
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialCard;

const styles = StyleSheet.create({
  socialCard: {
    width: "60%",
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
