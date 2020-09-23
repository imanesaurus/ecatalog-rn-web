import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screen/Home";


const linking = {
  config: {
    Home: "",
    About: "about",
  },
};

const Stack = createStackNavigator();
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
