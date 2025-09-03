import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
 
  // header
  headerView: {
    backgroundColor: "#3284f1",
    paddingBottom: 25,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingHorizontal: 15,
    elevation: 6,
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },

  headerTitle: {
    fontSize: RFValue(28),
    fontWeight: "bold",
    color: "white",
  },

  headerNotificationContainer: {
    flex: 1,
    alignItems: "flex-end",
  },

  search_bar: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 12,
    paddingLeft: 30,
    fontSize: 16,
    color: "#797979ff",
    outlineWidth: 0,
  },

  headerNotifications: {
    color: "white",
    fontSize: RFValue(23),
    right: 45,
    top: 2,
  },

  headerInfo: {
    alignItems: "center",
    marginTop: 15,
  },

  headerInfoText: {
    color: "white",
    fontSize: RFValue(15),
  },

  
});
