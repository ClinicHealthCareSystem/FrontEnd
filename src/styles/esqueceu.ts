import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
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
    width: "100%",
    alignSelf: "center",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0D47AB",
    textAlign: "center",
  },
  phone:{

  },

  subtittle: {
    color: "#003186ff",
    fontSize: RFValue(16),
    textAlign: "center",
    top:5,
    marginBottom: 15,
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
    alignSelf: "flex-end",
  },

  text: {
    color: "#0D47AB",
    fontSize: 18,
    textAlign: "center",
    textDecorationLine: "underline",
  },

  textVoltaLogin: {
    fontWeight: "bold",
    color: "#0D47AB",
    fontSize: 18,
    alignSelf: "flex-end",
  },
  account_circle: {
    marginRight: 5,
  },
  
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonCadastrar: {
    backgroundColor: "#3284f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: "auto",
    justifyContent: "center",
    width: "100%",
    height: 50,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  }
});