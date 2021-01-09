import {
  SET_CATEGORY,
  SET_DETAIL_MENU,
  SET_LATEST_MENU,
  SET_MENU,
} from "../actions/menu";

const initialState = {
  categoryList: [],
  availableMenu: [],
  detailMenu: [],
  latestMenu: [],
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categoryList: action.categoryList,
      };
    case SET_LATEST_MENU:
      return {
        ...state,
        latestMenu: action.latestMenu,
      };
    case SET_MENU:
      return {
        ...state,
        availableMenu: action.availableMenu,
      };
    case SET_DETAIL_MENU:
      return {
        ...state,
        detailMenu: action.detailMenu,
      };

    default:
      return state;
  }
}