export const EDIT_ORDER = "EDIT_ORDER";
export const GET_ORDER_QTY = "GET_ORDER_QTY";

export const editOrder = (action, idMeal, price, title, img) => {
  return { type: EDIT_ORDER, action, idMeal, price, title, img };
};
