import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export default StyleSheet.create({ 
  background:{
    flex:1,
    backgroundColor:'#ADD8E6',
  },
   section:{
    marginBottom:10,
    marginTop:50,
    padding:5,
    
  },
    cardCaixa:{
    alignItems:'center',
    marginBottom:5,
  },
   card:{
    width:'85%',
    height:'120%',
    backgroundColor:'#0D47AB',
    padding:10,
    borderRadius:8,
    alignItems:'center',
    elevation:5,
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.7,
    shadowRadius:8,
    flexDirection:'column',
    justifyContent:'space-between',
  },
   titlecard:{
    fontSize:RFValue (20),
    fontWeight:'bold',
    color:'white',
  },
   descricaocard:{
    fontSize:RFValue (16),
    textAlign:'center',
    color:'white',
    marginTop:15,
    fontWeight:'bold',
    lineHeight:20,

  },
   buttoncardtext:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:RFValue (16),
  },
  buttoncard:{
    width:'35%',
    backgroundColor:'#3284f1',
    justifyContent:'center',
    marginTop:15,
    borderRadius:8,
    paddingVertical:5,
  },
 })