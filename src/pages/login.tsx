import React from "react";
import {
  Text, TextInput, TouchableOpacity,
  View, Image, ScrollView,
} from "react-native";
import styles from "../styles/login";

export default function Login(){
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <View style={styles.caixa}>
        <View style={styles.caixaTitulo}> 

          <Image source={require("../assests/heart-pulse (2).png")} resizeMode="contain"
          style = {styles.logo}></Image>
          
         <View>
        <Text style={styles.titulo}>Saúde Mania </Text>
        <Text style={styles.subTitulo}>Login</Text>
          </View> 
         </View>


        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} placeholder="Digite seu CPF"/>

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input}  placeholder="Digite sua Senha"/>

        
        <TouchableOpacity style={styles.buttonSenha}>  
          <Text style={styles.textEsqueceu}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.textinfo}>Você ainda possui uma conta?</Text>
        <TouchableOpacity style={styles.buttonCadastro}>  
            <Text style={styles.buttonTextCadastro}>Cadastre-se</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}


