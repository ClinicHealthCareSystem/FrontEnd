import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ADD8E6",

  },

  barraAlta: {
    backgroundColor: "#3284f1",
    height: 200,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  tittle: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  search_bar:{
    backgroundColor: "white",
    width: 350,
    height: 40,
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#797979ff",
  },
  scrollCards: {
    backgroundColor: "#FFF",
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
    shadowOpacity: 0.7,
    shadowRadius: 8,
    borderWidth: 0,
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
  teste:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    padding: 20,
    borderRadius: 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#3284f1",

  },
  testeButton:{
        flex: 1,
        alignItems: "center",
        color: "#FFF",
        // flexDirection: "row",
        // justifyContent: "space-between",
  },

  textTeste:{
    color: "#FFF",

    

  },
});
