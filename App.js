import React from "react";
import Home from "./screen/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { View, AppRegistry } from "react-native";
import Product from "./screen/Product";

// const linking = {
//   config: {
//     Home: "",
//     About: "about",
//   },
// };

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
    <Home />
  );
}
