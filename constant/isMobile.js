import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const HEADER_HEIGHT = height * 0.09;
export const HEADER_MARGIN = HEADER_HEIGHT + HEADER_HEIGHT * 0.02;
export const isMobile = width < 500;
