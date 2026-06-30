import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  storyWrapper: {
    alignItems: "center",
    marginHorizontal: 6,
    width: 68,
  },
  myAvatarContainer: {
    position: "relative",
    marginBottom: 6,
  },
  activeStoryRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#FF3040", 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E1E1E1",
  },
  plusButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0095F6", 
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  usernameText: {
    fontSize: 11,
    color: "#262626",
    textAlign: "center",
    width: "100%",
  },
});