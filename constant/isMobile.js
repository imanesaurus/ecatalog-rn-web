import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const isMobile = width < 500;
