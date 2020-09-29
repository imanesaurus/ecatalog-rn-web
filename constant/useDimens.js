import { useEffect, useState } from "react";
import {Dimensions} from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default () => {
    const [_dimensions, setDimensions] = useState({ window, screen });
    const _width = _dimensions.window.width;
    const _height = _dimensions.window.height;
  
    const isWeb = _width > 540;
  
    const onChangeDimens = ({ window, screen }) => {
      setDimensions({ window, screen });
    };
  
    useEffect(() => {
      Dimensions.addEventListener("change", onChangeDimens);
      return () => {
        Dimensions.removeEventListener("change", onChangeDimens);
      };
    });

    return [_width, _height, isWeb, _dimensions]
}