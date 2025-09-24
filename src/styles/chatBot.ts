import { StyleSheet } from "react-native";

export default StyleSheet.create({
  chatBox: {
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 10,
    width: "90%",
    height: 180,
    margin: "auto",
    flex: 1,
    backgroundColor: "#3284f1",
    padding: 10,
    paddingTop: 350,
  },

  chatBoxButton: {
    width: "50%",
    height: "80%",
    margin: "auto",
    marginBottom: 15,
    marginTop: 15,
  },

  chatBoxInput: {
    width: "100%",
    outlineWidth: 0,
    padding: 7,
    borderRadius: 8,
    backgroundColor: "white",
  },
});
