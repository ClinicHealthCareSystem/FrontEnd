import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ADD8E6",

  },

  barraAlta: {
    
    backgroundColor: "#3284f1", 
    paddingBottom: 25,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    elevation: 6,    
  },
  caixaTopo:{
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  tittle: {
    
    fontSize: 28,
    fontWeight: "bold",
    color: "white"  
},
caixaPesquisa:{

},
  search_bar:{
    
     backgroundColor: "white",
    height: 40,
    borderRadius: 12,
    marginTop: 5,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#797979ff",
    outlineWidth: 0,

  },
  scrollCards: {
   
    marginTop: 10,
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
    
  },
  buttonCards: {
   
    backgroundColor: "#3284f1",
    borderRadius: 8,
    marginBottom: 16,
    width: "47%",
    height: 128,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "white",

    

  },
  textCards: {
   
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  descricaoCards: {
    
    fontSize: RFValue(16),
    color: "white",
    textAlign: "center",
  },
  tabNavegation:{
   
     flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
    borderRadius: 2,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: "#3284f1",
    elevation:8,
    borderTopWidth: 1,
    borderColor: "white",
    

  },
  tabButton:{
        flex: 1,
        alignItems: "center",
        color: "#FFF",
        
  },

  tabText:{
    color: "#FFF",

    

  },
});
