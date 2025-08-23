import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
  },

  barraAlta: {
    backgroundColor: "#ADD8E6",
    height: 100,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  tittle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3284f1",
  },
  scrollCards: {
    backgroundColor: "#ADD8E6",
  },
  cards: {
    backgroundColor: "",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    
  },
  buttonCards: {
    backgroundColor: "#3284f1",
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 50,
    padding: 15,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "white",
  },
  textCards: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  descricaoCards: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
  },
});
