import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editOrder } from "../store/actions/cart";
import { LittleDarkAccent } from "../constant/ColorsConst";

const BUTTON_SIZES = 50;

const ProductsModal = ({
  productModal,
  productModalHandler,
  props,
  cart,
  product,
  price,
}) => {
  //   const [orderItems, setOrderItems] = React.useState([]);
  const order = useSelector((state) => state.cart.orderItems);

  const dispatch = useDispatch();

  //   let orderList = orderItems.slice();
  //   let item = orderList.filter((i) => i.idMeal == product.idMeal);

  //   const editOrder = (action) => {
  //     if (action == "+") {
  //       if (item.length > 0) {
  //         let newQty = item[0].qty + 1;
  //         item[0].qty = newQty;
  //         item[0].total = item[0].qty * price;
  //       } else {
  //         const newItem = {
  //           idMeal: product.idMeal,
  //           qty: 1,
  //           price: price,
  //           total: price,
  //         };
  //         orderList.push(newItem);
  //       }

  //       setOrderItems(orderList);
  //     } else {
  //       if (item.length > 0) {
  //         if (item[0]?.qty > 1) {
  //           let newQty = item[0].qty - 1;
  //           item[0].qty = newQty;
  //           item[0].total = newQty * price;
  //         } else {
  //           orderList.pop();
  //         }
  //       }

  //       setOrderItems(orderList);
  //     }
  //   };
  const getOrderQty = () => {
    let orderList = order.slice();
    let item = orderList.filter((a) => a.idMeal == product.idMeal);

    if (item.length > 0) {
      return item[0].qty;
    }

    return 0;
  };

  return (
    <Modal
      underlayColor="red"
      animationType="fade"
      visible={productModal}
      onRequestClose={productModalHandler}
      transparent={true}
      {...props}
    >
      <TouchableWithoutFeedback onPress={productModalHandler}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)" }}>
          <View
            style={{
              // flex: 1,
              alignItems: "center",
              backgroundColor: "white",
              borderColor: "#eee",
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: "center",
              marginTop: 100,
              //   height,
              margin: "auto",
              padding: 30,
              //   width,
            }}
          >
            <Image
              source={{ uri: product.strMealThumb }}
              style={styles.image}
            />
            <Text style={styles.title}>{product.strMeal}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                // disabled={() => disabledButton(product.idMeal, true, false)}
                onPress={() =>
                  dispatch(
                    editOrder(
                      "-",
                      product.idMeal,
                      price,
                      product.strMeal,
                      product.strMealThumb
                    )
                  )
                }
                style={[
                  styles.buttonText,
                  {
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  },
                ]}
              >
                <Text style={styles.buttonTitle}>-</Text>
              </TouchableOpacity>
              <View style={styles.buttonText}>
                <Text style={styles.buttonTitle}>{getOrderQty(product)}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  dispatch(
                    editOrder(
                      "+",
                      product.idMeal,
                      price,
                      product.strMeal,
                      product.strMealThumb
                    )
                  )
                }
                style={[
                  styles.buttonText,
                  {
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  },
                ]}
              >
                <Text style={styles.buttonTitle}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProductsModal;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    width: BUTTON_SIZES,
    height: BUTTON_SIZES,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
