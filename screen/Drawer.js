import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import Slide from "react-reveal/Slide";
import MenuBar from "../components/MenuBar";

const Drawer = ({
  visible,
  width,
  height,
  drawerHandler,
  modalHandler,
  isWeb,
  _rem,
}) => {
  return (
    <Modal onRequestClose={modalHandler} visible={visible} transparent={true}>
      <TouchableWithoutFeedback onPress={drawerHandler}>
        <View style={styles.container}>
          <View style={[styles.drawerContainer, { width, height }]}>
            <Text>Menu</Text>
            <MenuBar
              title="Tentang Kami"
              menuHandler={() => modalHandler(1)}
              isWeb={isWeb}
              _rem={_rem}
            />
            <MenuBar
              title="Kontak"
              menuHandler={() => modalHandler(2)}
              isWeb={isWeb}
              _rem={_rem}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  drawerContainer: {
    paddingTop: 30,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
  },
});
