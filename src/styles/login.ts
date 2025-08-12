
import {Dimensions, StyleSheet} from "react-native";
const {width, height} = Dimensions.get("window");
const isSmallScreen = width < 380;
export default  StyleSheet.create({
background:{
  flex: 1,
  backgroundColor: "#ADD8E6",
  justifyContent: "center",
  // alignItems: "center",
  paddingHorizontal: 20,
},
caixa:{
  backgroundColor: "white",
  borderRadius: 10, 
  // width: "90%",
  // maxWidth: 400,
  padding: 20,
  elevation: 5,
  shadowColor: "black",
  shadowOpacity: 0.8,
  shadowOffset: { width: 0, height: 2},
  shadowRadius: 8,
  width: isSmallScreen ? "100%" : "100%", 
  marginBottom: 16,
  marginHorizontal: isSmallScreen ? 0 : 4,

},
caixaTitulo:{
  flexDirection: "row", 
  alignItems: "center",
  marginBottom: 30,

},

titulo:{
  color: "#0D47AB",
  fontSize: 28,
  fontWeight: "bold",
  textAlign: "center",
  alignItems: "center",
  // left: 20,
  //bottom: 30,
},
logo:{
  //flexDirection: "row",
  // justifyContent: "space-between",
  // alignSelf: "flex-start",
  // top: 20,
  // left: 15,


},

subTitulo:{
  color: "#0D47AB",
  fontSize: 25,
  fontWeight: "bold",
  textAlign: "center",
  //alignItems: "center",
  right: 20,
  top: 20,
  // marginTop: 20,
  // bottom: 25,
},

input:{
  backgroundColor: "#ffffff",
  borderColor: "grey",
  color: "black",
  borderRadius: 8,
  marginBottom: 15,
  paddingHorizontal: 10,
  fontSize: 16,
  height: 45,
  borderWidth: 1,
  // width: "100%",


},

label:{
  fontSize: 16,
  color: "#0047AB",
  fontWeight: "bold",
  marginBottom: 5,

},

button:{
  backgroundColor: "#3284f1",
  paddingVertical: 12,
  borderRadius: 8,
  width: "100%"
  
},
buttonText:{
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center"
},

buttonCadastro:{
  color:"#3284f1",
  //justifyContent: "center",
  //alignContent: "center",
  //alignItems:"flex-end",
  alignSelf: "center",
  

},
buttonTextCadastro:{
  color: "#3284f1",
  fontWeight:"bold",
  
},
textEsqueceu:{
  color:"#3284f1",
  fontWeight:"bold",
},
buttonSenha:{
alignSelf: "flex-end",
marginBottom: 20,
},


textinfo:{
  textAlign:"center",
  color:"#3284f1",

}


});


