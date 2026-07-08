import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#E1E1E1",
  },
  statsContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    marginLeft: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "700",
    color: "#262626",
  },
  statLabel: {
    fontSize: 12,
    color: "#262626",
    marginTop: 2,
  },
  bioContainer: {
    marginTop: 12,
    paddingHorizontal: 4,
  },
  nameText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#262626",
  },
  bioText: {
    fontSize: 13,
    color: "#262626",
    lineHeight: 18,
    marginTop: 2,
  },
  buttonsContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    gap: 8, 
    marginTop: 15, 
    width: "100%", 
  },
  
  editButton: {
    flex: 1, 
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    height: 32,
    justifyContent: "center",
    alignItems: "center", 
  },

  editButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000000",
  },
});