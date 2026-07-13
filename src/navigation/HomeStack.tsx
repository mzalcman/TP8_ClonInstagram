import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import Post from "../pages/Post/Post"; 
import { HomeStackParamList } from "./types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
    // Explicado por la IA: 
    // Desactiva la cabecera gris nativa de la pila de pantallas para que podamos
    // usar e integrar nuestro propio encabezado personalizado (FeedHeader)
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
      />

      <Stack.Screen
        name="Post"
        component={Post}
      />
    </Stack.Navigator>
  );
}