import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  caixa: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 8,
  },

  tittle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },

  scrollTermo: {
    marginBottom: 40,
    marginTop: 40,
  },

  termoText: {
    textAlign: "justify",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#0D47AB",
    fontWeight: "bold",
    fontSize: 28,
  },

  areaButton: {
    justifyContent: "center",
    alignItems:"center",
    width: "80%",

  },

  termoButton: {
    width: "30%",
    backgroundColor: "#3284f1",
    alignItems: "center",
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
  },

  termoButtonText: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    
  },
});
