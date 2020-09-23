import { isMobile } from "./isMobile";


export const _adjustSizes = (size) => {
    if (isMobile) {
      return size / 2;
    } else {
      return size;
    }
  };