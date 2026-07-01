import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: width,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatarNameWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
    backgroundColor: "#E1E1E1",
  },
  usernameText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#262626",
  },
  locationText: {
    fontSize: 11,
    color: "#65676B",
    marginTop: 1,
  },
  moreOptions: {
    fontSize: 14,
    color: "#262626",
    fontWeight: "bold",
  },
  postImage: {
    width: width,
    height: width, 
    backgroundColor: "#F2F2F2",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    marginRight: 16,
  },
  footerContainer: {
    paddingHorizontal: 14,
    paddingBottom: 12,
  },
  likesText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#262626",
    marginBottom: 5,
  },
  captionText: {
    fontSize: 13,
    lineHeight: 18,
    color: "#262626",
  },
  usernameBold: {
    fontWeight: "700",
  },
});