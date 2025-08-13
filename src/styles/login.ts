
import {Dimensions, StyleSheet} from "react-native";
import cadastro from "./cadastro";
//const {width, height} = Dimensions.get("window");
//const isSmallScreen = width < 380;
export default  StyleSheet.create({
background:{
  flex: 1,
  backgroundColor: "#ADD8E6",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 20,
},

tittle:{
  color: "#0D47AB",
  fontSize: 32,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 80,
},
logo:{
  //flexDirection: "row",
  // justifyContent: "space-between",
  // alignSelf: "flex-start",
  // top: 20,
  // left: 15,


},
inputCaixa:{
flexDirection: "row",
alignItems: "center",
width: "100%",
height: 40,
backgroundColor: "white",
borderRadius: 8,
paddingHorizontal: 10,
marginBottom: 25,

},
input:{
  flex: 1,
  height: "100%",


},
esqueci:{
alignSelf: "flex-end",
marginBottom: 10,
bottom: 5,
color: "#0D47AB",
fontWeight: "bold",
fontSize: 18,
},
button:{
backgroundColor: "#3284f1",
justifyContent: "center",
width: "100%",
height: 50,
borderRadius: 8,
alignItems: "center",
marginBottom: 15,

},
buttonText:{
color: "white",
fontSize: 18,

},

cadastro:{
fontWeight: "bold",
color: "#0D47AB",
fontSize: 18,
},

// label:{
//   fontSize: 16,
//   color: "#0047AB",
//   fontWeight: "bold",
//   marginBottom: 5,

// },

// button:{
//   backgroundColor: "#3284f1",
//   paddingVertical: 12,
//   borderRadius: 8,
//   width: "100%"
  
// },
// buttonText:{
//   color: "white",
//   fontSize: 16,
//   fontWeight: "bold",
//   textAlign: "center"
// },

// buttonCadastro:{
//   color:"#3284f1",
//   //justifyContent: "center",
//   //alignContent: "center",
//   //alignItems:"flex-end",
//   alignSelf: "center",
  

// },
// buttonTextCadastro:{
//   color: "#3284f1",
//   fontWeight:"bold",
  
// },
// textEsqueceu:{
//   color:"#3284f1",
//   fontWeight:"bold",
// },
// buttonSenha:{
// alignSelf: "flex-end",
// marginBottom: 20,
// },


// textinfo:{
//   textAlign:"center",
//   color:"#3284f1",

// }


});


