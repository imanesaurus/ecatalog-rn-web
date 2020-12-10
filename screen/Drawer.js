import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import Slide from "react-reveal/Slide";
import MenuBar from "../components/MenuBar";

// const opacity = new Animated.Value(0);

// const fadeIn = () => {
//   Animated.timing(opacity, {
//     toValue: 1,
//     duration: 200
//   });
// };

const Drawer = ({
  visible,
  _width,
  _height,
  drawerHandler,
  modalHandler,
  slide,
  isWeb,
  _rem,
  slideAnim,
  style,
}) => {
  return (
    <Modal onShow={slideAnim} onRequestClose={modalHandler} visible={visible} transparent={true}>
      <TouchableWithoutFeedback onPress={drawerHandler}>
        <View style={[styles.container, { height: "100%", width: _width }]}>
          <Animated.View
            style={[
              styles.drawerContainer,
              { width: _width / 2, height: _height, right: slide },
            ]}
          >
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
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 2,
  },
  drawerContainer: {
    paddingTop: 30,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    // zIndex: 100
    // top: 0,
    // right: 0,
  },
});
