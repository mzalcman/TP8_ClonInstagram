import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, Search, Clapperboard, Send } from "lucide-react-native";

import HomeStack from "./HomeStack";
import Profile from "../pages/Profile/Profile";
import { MainTabParamList } from "./types";

const Tab = createBottomTabNavigator<MainTabParamList>();

const PlaceholderScreen = () => <View style={{ flex: 1, backgroundColor: '#FFF' }} />;

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 54,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0.5,
          borderTopColor: "#DBDBDB",
          paddingBottom: 4,
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#000000",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <House
              color={color}
              size={24}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SearchPlaceholder"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Search color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); 
          },
        }}
      />

      <Tab.Screen
        name="ReelsPlaceholder"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Clapperboard color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); 
          },
        }}
      />

      <Tab.Screen
        name="MessagesPlaceholder"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Send color={color} size={24} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[
              styles.avatarContainer, 
              focused && styles.avatarContainerActive
            ]}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150" }}
                style={styles.avatarIcon}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  avatarContainerActive: {
    borderColor: "#000000",
  },
  avatarIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#E1E1E1",
  },
});