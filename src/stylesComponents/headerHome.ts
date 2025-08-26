import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default StyleSheet.create({
barraAlta: {
    backgroundColor: "#3284f1",
    paddingBottom: 25,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    elevation: 6,
  },

  caixaTopo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  tittle: {
    fontSize: RFValue(28),
    fontWeight: "bold",
    color: "white",
  },

  
  search_bar: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 12,
    // marginTop: 5,
    // paddingHorizontal: 12,
    paddingLeft: 30,
    fontSize: 16,
    color: "#797979ff",
    outlineWidth: 0,
  },
});