import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
     /*...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),*/
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic", 
    fontFamily: "Arial Rounded MT Bold",
    letterSpacing: -0.5,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 10,
    marginRight: 10,
  },
});