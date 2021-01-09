import React from "react";
import Home from "./screen/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { View, AppRegistry } from "react-native";
import Product from "./screen/Product";
import ReduxThunk from "redux-thunk"
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {menuReducer} from "./store/reducers/Menu";

// const linking = {
//   config: {
//     Home: "",
//     About: "about",
//   },
// };
const rootReducer = combineReducers({
  menu: menuReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk)) 

export default function App() {
  return (
    // <NavigationContainer linking={linking}>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} options={
    //       {
    //         ...TransitionPresets.FadeFromBottomAndroid,
    //         headerShown: false

    //       }
    //     } />
    //     <Stack.Screen name="Cart" component={Cart} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
