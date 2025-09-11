import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ADD8E6",
  },

  cardPerfil: {
    backgroundColor: "#0D47AB",
    borderRadius: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
    padding: 16,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },

  avatarCaixa: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#0D47AB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  nome: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  info: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
  },

  statusAvatar: {
    flexDirection: "row",
  },

  planoStatus: {
    backgroundColor: "#3284f1",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: "center",
  },

  planoStatusText: {
    color: "white",
    fontWeight: "bold",
  },

  idSatus: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
  },

  idStatusText: {
    color: "#0D47AB",
    fontWeight: "bold",
  },

  tabsCaixa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#0D47AB",
    width: "90%",
    padding: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 8,
  },

  cardInfo: {
    backgroundColor: "#0D47AB",
    padding: 12,
    borderRadius: 8,
    elevation: 5,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    width: "90%",
    alignSelf: "center",
  },

  tittleInfo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
    textAlign: "center",
  },

  textInfo: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
  },

  labelInfo: {
    fontSize: 16,
    color: "white",
    marginHorizontal: 30,
    fontWeight: "600",
  },

  inputInfo: {
    color: "#0D47AB",
    fontWeight: "700",
    outlineWidth: 0,
  },

  textInfoSaude:{
    backgroundColor: "#083b94ff",
    borderRadius: 8,
    padding: 6,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ADD8E6",
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",

  },

  labelInfoSaude:{
    fontSize: 16,
    color: "white",
    marginHorizontal: 30,
    fontWeight: "600",

  },
  textInfoSaudeCond:{
     backgroundColor: "#0D47AB",
    padding: 6,
    width: "90%",
    borderColor: "#ADD8E6",
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

  },
  labelInfoSaudeCond:{
     fontSize: 16,
    color: "white",
    
    fontWeight: "600",
    textAlign: "center",


  },
  textInfoSaudeCondCaixa:{
  backgroundColor: "#083b94ff",
  borderRadius: 8,
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderWidth: 1,
  borderColor: "#ADD8E6",
  margin: 6,             
  alignItems: "center",

  },
  textInfoSaudeContato:{
    backgroundColor: "white",
    padding: 6,
    width: "90%",
    borderColor: "#ADD8E6",
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
    textAlign: "justify",
  },
  labelInfoSaudeContato:{
    fontSize: 16,
    color: "#083b94ff",
    fontWeight: "600",
    textAlign: "justify",
  },
  

});
