export const SET_MENU = "SET_MENU";
export const SET_LATEST_MENU = "SET_LATEST_MENU";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_DETAIL_MENU = "SET_DETAIL_MENU";
export const IS_LOADING = "IS_LOADING";

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((json) => dispatch({ type: SET_CATEGORY, categoryList: json }));
    } catch (err) {
      throw err;
    }
  };
};

export const fetchLatestMenu = () => {
  return (dispatch) => {
    try {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=d")
        .then((res) => res.json())
        .then((json) => dispatch({ type: SET_LATEST_MENU, latestMenu: json }));
    } catch (err) {
      return err;
    }
  };
};

export const fetchMenu = (cid) => {
  return (dispatch) => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cid}`)
        .then((res) => res.json())
        .then((json) =>
          dispatch({ type: SET_MENU, availableMenu: json, isFetching: true })
        );
    } catch (err) {
      return err;
    }
  };
};

export const fetchDetailMenu = (id) => {
  return (dispatch) => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((json) =>
          dispatch({ type: SET_DETAIL_MENU, detailMenu: json.meals[0] })
        );
    } catch (err) {
      return err;
    }
  };
};

export const isLoadingHandler = () => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING, isFetching: true });
  };
};
