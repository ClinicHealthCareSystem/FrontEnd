import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  background: {
    backgroundColor: "#ADD8E6",
    flex: 1,
  },

  // Body
  body: {
    display: "flex",
    flex: 1,
  },

  Agendar: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#3284f1",
    borderRadius: 12,
    alignSelf: "center",
    top: 200,
    padding: 10,
  },

  AgendarText: {
    borderRadius: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: RFValue(15),
  },
});
