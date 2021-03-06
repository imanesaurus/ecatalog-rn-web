import {
  IS_LOADING,
  IS_LOADING_FALSE,
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
  isFetching: true,
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categoryList: action.categoryList,
        isFetching: false
      };
    case SET_LATEST_MENU:
      return {
        ...state,
        latestMenu: action.latestMenu,
        isFetching: false
      };
    case SET_MENU:
      return {
        ...state,
        availableMenu: action.availableMenu,
        isFetching: false
      };
    case SET_DETAIL_MENU:
      return {
        ...state,
        detailMenu: action.detailMenu,
        isFetching: action.isFetching,
      };
    case IS_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case IS_LOADING_FALSE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
}
