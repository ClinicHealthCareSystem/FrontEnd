import { Button, Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get("window");
const isSmallScreen = width < 380;

export default StyleSheet.create({
  
background:{
  flexGrow: 1,
  justifyContent: "center",
  padding: 20,
  backgroundColor: "#ADD8E6",
},
caixa:{
backgroundColor:"white",
borderRadius:12,
padding:20,
alignItems: "center",
shadowColor: "black",
shadowOpacity: 0.8,
shadowOffset: { width: 0, height: 2},
shadowRadius: 8,


},

logo:{
  marginBottom: 5,

},
titulo:{
  fontSize: 30,
  fontWeight: "bold",
  color: "#0D47AB"

},
subtitulo:{
  fontSize: 25,
  fontWeight: "bold",
  color: "#0D47AB",
  marginBottom: 20,

},
camposCaixa:{
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  flexWrap: "wrap",
},
inputCaixa:{
  flex: 1,
  //minWidth: "45%",
  marginBottom: 15,

},
label:{
  fontSize:16,
  fontWeight: "bold",
  color:"#0D47AB",
  marginBottom: 5,

},
input:{
  backgroundColor: "#ffffff",
  borderColor: "grey",
  color: "black",
  borderRadius: 8,
  // marginBottom: 15,
  paddingHorizontal: 10,
  paddingVertical: 8,
  fontSize: 16,
  // height: 45,
  borderWidth: 1,
},
buttons:{
flexDirection: "row",
justifyContent: "space-between",
width: "100%",
marginTop: 20,

},
buttonText:{
 color: "white",
 fontWeight: "bold",
 fontSize: 14,
},
buttonVoltar:{
  backgroundColor:"#3284f1",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
},
buttonCadastrar:{
  backgroundColor: "#3284f1",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
},



});