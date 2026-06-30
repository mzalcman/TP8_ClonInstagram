import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {House,CircleUserRound,} from "lucide-react-native";

import HomeStack from "./HomeStack";
import Profile from "../pages/Profile/Profile";

import { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: false,

        tabBarStyle: {
          height: 60,
        },

        tabBarActiveTintColor: "#000",

        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <House
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CircleUserRound
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}