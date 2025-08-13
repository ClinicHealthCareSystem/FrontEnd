import { Button, Dimensions, StyleSheet } from "react-native";
const {width} = Dimensions.get("window");

export default StyleSheet.create({
scrollbackground:{
flexGrow:1,
backgroundColor: "#ADD8E6",
justifyContent: "center",
},
background:{
alignItems: "center",
},
titulo:{
//fontSize: width * 0.06,
fontSize: 30,
fontWeight: "bold",
// justifyContent: "center",
// alignItems: "center",
color: "#0D47AB",
marginBottom: 10,

},
subTitulo:{
fontSize: 14,
color: "#0D47AB",
marginBottom: 20,
alignItems: "center",
},
buttonLogin:{
width: "80%",
backgroundColor: "#3284f1",
alignItems: 'center',
marginBottom: 15,
borderRadius: 8,
marginVertical: 10,
paddingVertical: 5,
},

buttonCadastro:{

width: "80%",
backgroundColor: "#3284f1",
alignItems: 'center',
marginBottom: 15,
borderRadius: 8,
borderWidth: 1,
marginVertical: 10,
paddingVertical: 5,
},

textButton:{
color: "white",
fontWeight: "bold",
fontSize: 16,
},

}

);