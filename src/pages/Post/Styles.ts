import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#262626",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
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
  postImage: {
    width: width,
    height: width, 
    backgroundColor: "#F2F2F2",
  },
  actionsContainer: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: "row",
  },
  actionButton: {
    marginRight: 16,
  },
  infoContainer: {
    paddingHorizontal: 14,
  },
  likesText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#262626",
    marginBottom: 4,
  },
  captionText: {
    fontSize: 13,
    lineHeight: 18,
    color: "#262626",
  },
  usernameBold: {
    fontWeight: "700",
  },
  commentsSection: {
    paddingHorizontal: 14,
    marginTop: 16,
    paddingBottom: 80, 
  },
  commentsTitle: {
    fontSize: 12,
    color: "#8E8E8E",
    fontWeight: "600",
    marginBottom: 8,
  },
  commentItem: {
    marginBottom: 8,
  },
  commentText: {
    fontSize: 13,
    color: "#262626",
    lineHeight: 16,
  },
  inputContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: "#262626",
    marginRight: 12,
  },
  postCommentButtonText: {
    color: "#0095F6", 
    fontWeight: "600",
    fontSize: 14,
  },
});