import React from "react";
import {
  Text, TextInput, TouchableOpacity,
  View, Image,
} from "react-native";
import styles from "../styles/login";

export default function Login(){
  return (
    <View style={styles.background}>
      <View style={styles.caixa}>
        <View style={styles.caixatittle}>  
          <Image source={require("../assests/heart-pulse (2).png")}
          style = {styles.logo}></Image>
        <Text style={styles.titulo}>Saúde Mania </Text>
        </View>
        <Text style={styles.textLogin}>Login</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite seu Email"/>

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input}  placeholder="Digite sua Senha"/>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCadastro}>  
            <Text style={styles.textButtonOption}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSenha}>
          <Text style={styles.textButtonOption}>Esqueci a Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


