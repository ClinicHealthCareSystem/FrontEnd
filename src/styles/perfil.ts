import { StyleSheet } from "react-native";
export default StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: "#ADD8E6",
        
    },
    cardPerfil:{
        backgroundColor: "#0D47AB",
        borderRadius:  12,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.7,
        shadowRadius: 8,
        elevation: 5,
        padding: 16,
        alignItems: "center",
        marginTop: 30,
        marginHorizontal: 20,
        


    },
    avatarCaixa:{
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: "#0D47AB",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
        


        

    },
    avatar:{
        width:100,
        height: 100,
        borderRadius: 50,
        

    },
    nome:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",


    },
    info:{
    color: "white",
    fontSize: 18,
    marginBottom: 8,

    },
    statusAvatar:{
        flexDirection: "row",

    },
    planoStatus:{
    backgroundColor:"#3284f1",
        paddingHorizontal: 10,
        borderRadius: 8,
        marginRight: 8,
        justifyContent: "center",
    },
    planoStatusText:{
       color: "white",
       fontWeight: "bold",
    },
    idSatus:{
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        justifyContent: "center",
        

    },
    idStatusText:{
        color: "#0D47AB",
        fontWeight: "bold",
        

    },
    tabsCaixa:{
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
    // alignSelf: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#0D47AB",
    width: "90%",
    padding: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 8,
    


 },


}

);