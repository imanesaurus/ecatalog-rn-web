import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuBar = ({menuHandler, _rem, isWeb, title, fontSize}) => {
  return (
    <TouchableOpacity
      onPress={menuHandler}
    >
      <Text
        style={{
          fontSize: isWeb ? _rem(10) : _rem(8),
          marginRight: isWeb ? 20 : 10,
          marginTop: isWeb ? null : 10
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuBar;

const styles = StyleSheet.create({});
