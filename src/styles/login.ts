
import {Dimensions, StyleSheet} from "react-native";
const {width, height} = Dimensions.get("window");

export default  StyleSheet.create({
background:{
  flex: 1,
  backgroundColor: "#ADD8E6",
  justifyContent: "center",
  alignItems: "center",
},
caixa:{
  backgroundColor: "white",
  borderRadius: 10, 
  width: "90%",
  maxWidth: 400,
  padding: 30,
  elevation: 5,
  shadowColor: "black",
  shadowOpacity: 0.8,
  shadowOffset: { width: 0, height: 2},
  shadowRadius: 8,

},
caixatittle:{
  flexDirection: "row",
  backgroundColor: "white",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
},
titulo:{
  color: "#0D47AB",
  fontSize: 30,
  fontWeight: "bold",
  //textAlign: "center",
  // left: 20,
  //bottom: 30,
},
logo:{
  // justifyContent: "space-between",
  // alignSelf: "flex-start",
  // top: 20,
  // left: 15,


},

textLogin:{
  color: "#0D47AB",
  fontSize: 25,
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 20,
  bottom: 25,
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
  marginTop: 10,
  
},
buttonText:{
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center"
},

buttonCadastro:{
  justifyContent: "center",
  alignContent: "center",
  top:29,
  
  
},
buttonSenha:{
justifyContent: "center",
alignContent: "center",
alignSelf: "flex-end",
flexDirection: "row",
},
textButtonOption:{
color: "#3284f1",
fontSize: width * 0.045,
fontWeight: "bold",

},


});


