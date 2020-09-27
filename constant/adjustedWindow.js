import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export const window = Dimensions.get("window");
export const screen = Dimensions.get("screen");

const _dimens = () => {
  const [_dimensions, setDimensions] = useState({ window, screen });
  const onChangeDimens = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChangeDimens);
    return () => {
      Dimensions.removeEventListener("change", onChangeDimens);
    };
  });

  return _dimensions;
};

const _rem = (size) => {
  if (_dimens().window.height > _dimens().window.height) {
    return (size * _dimens().window.width) / 380;
  } else {
    return (size * _dimens().window.height) / 380;
  }
};

export default _rem;
