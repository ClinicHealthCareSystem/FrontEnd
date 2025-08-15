import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const isSmallScreen = width < 380;

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ADD8E6",
  },

  caixa: {
    backgroundColor: "#ADD8E6",
    borderRadius: 12,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: "100%",
    alignSelf: "center",
  },

  
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0D47AB",
    textAlign: "center",
    marginBottom: 30,
    
  },

  inputCaixa: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0D47AB",
    marginBottom: 6,
    
  },

  input: {
  flex: 1,
  height: "100%",
  overflow: "hidden",
  outlineWidth: 0,
  },

  voltaLogin: {
    // flexDirection: "row",
    marginTop: 20,
    //alignItems: "center",
    // justifyContent: "center",
    alignSelf: "flex-start"
  },

  text: {
   color: "#0D47AB",
    fontSize: 18,
  },

  textVoltaLogin: {
    fontWeight: "bold",
    color: "#0D47AB",
    fontSize: 18,
    // left: 10,
    // alignSelf: "center",
  },
  buttonText:{
      color: "white",
      fontSize: 18,
      fontWeight: "bold"
  },
  

  buttonCadastrar: {
    backgroundColor: "#3284f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "flex-end",
    
  },
});
