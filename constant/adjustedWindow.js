import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export const window = Dimensions.get("window");
export const screen = Dimensions.get("screen");

const useDimens = () => {
  const [_dimensions, setDimensions] = useState({ window, screen });
  const _width = _dimensions.window.width;
  const _height = _dimensions.window.height;

  const isWeb = _width > 500;

  const onChangeDimens = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    console.log("Hooks");
    Dimensions.addEventListener("change", onChangeDimens);
    return () => {
      Dimensions.removeEventListener("change", onChangeDimens);
    };
  }, [_dimensions]);

  return [_dimensions, _width, _height, isWeb, _rem]
};

export const _rem = (size) => {
  if (_height > _width) {
    return ((size * _width) / 380) * 2;
  } else {
    return (size * _height) / 380;
  }
};

export default useDimens;
