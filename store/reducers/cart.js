import { EDIT_ORDER } from "../actions/cart";

const initialState = {
  orderItems: [],
};

export function cartReducer(state = initialState, action) {
  let orderList = [...state.orderItems];
  switch (action.type) {
    case EDIT_ORDER:
      let item = orderList.filter((i) => i.idMeal == action.idMeal);
      let currentItem = item[0];
      if (action.action == "+") {
        if (item.length > 0) {
          let newQty = currentItem.qty + 1;
          currentItem.qty = newQty;
          currentItem.total = currentItem.qty * action.price;
        } else {
          const newItem = {
            idMeal: action.idMeal,
            strMeal: action.title,
            qty: 1,
            price: action.price,
            total: action.price,
            strMealThumb: action.img,
          };
          orderList.push(newItem);
        }
      } else {
        if (item.length > 0) {
          if (currentItem.qty > 1) {
            let newQty = currentItem.qty - 1;
            currentItem.qty = newQty;
            currentItem.total = newQty * action.price;
          } else {
            orderList.pop();
          }
        }
      }
      return {
        ...state,
        orderItems: orderList,
      };
    default:
      return state;
  }
}
