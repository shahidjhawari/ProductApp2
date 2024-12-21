import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UploadProduct from "./components/uploadProduct";
import ShowProducts from "./components/showProducts";
import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Upload Product" component={UploadProduct} />
        <Stack.Screen name="Show Products" component={ShowProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
