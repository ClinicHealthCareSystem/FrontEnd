import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("window");
const isSmallScreen = width < 380;

export default StyleSheet.create({
  background: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ADD8E6",
  },

  caixa: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    alignItems: "stretch",
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
  },

  headerContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    width: 44,
    height: 44,
    resizeMode: "contain",
    marginTop: -15,
    marginBottom: 8,
  },

  titleContainer: {
    alignItems: "center",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D47AB",
    textAlign: "center",
    marginTop: 0,
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0D47AB",
    marginTop: 6,
    textAlign: "center",
  },

  camposCaixa: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    marginTop: 20,
  },

  inputCaixa: {
    width: isSmallScreen ? "100%" : "100%",
    marginBottom: 16,
    marginHorizontal: isSmallScreen ? 0 : 4,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0D47AB",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#ffffff",
    borderColor: "grey",
    color: "black",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  buttonVoltar: {
    backgroundColor: "#3284f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },

  buttonCadastrar: {
    backgroundColor: "#3284f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
