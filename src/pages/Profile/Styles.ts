import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const COLUMN_SIZE = width / 3;

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
  headerLayoutWrapper: {
    backgroundColor: "#FFFFFF",
  },
  highlightsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 15,
  },
  highlightItem: {
    alignItems: "center",
    width: 64,
  },
  highlightRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#C7C7C7", 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4,
  },
  highlightImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E1E1E1",
  },
  highlightText: {
    fontSize: 11,
    color: "#262626",
    textAlign: "center",
  },
  tabsContainer: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#DBDBDB",
    marginTop: 5,
  },
  tabButton: {
    flex: 1,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  activeTabButton: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#000000", 
  },
  gridItemContainer: {
    width: COLUMN_SIZE,
    height: COLUMN_SIZE,
    padding: 0.5,
  },
  gridImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F2F2F2",
  },
});