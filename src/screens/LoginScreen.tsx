import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "../styles/login";
import { useRouter } from "expo-router";

export default function Login() {
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn= async()=> {
    setError("");

    if (!CPF || !password){
      setError("Esses campos são obrigatórios");
      return;
    }
    if (!/^\d{1,11}$/.test(CPF)){
      setError("CPF inválido somente números, máx. 11 dígitos");
      return;
    }
    if (!/^[A-Z a-z 0-9]{1,6}$/.test(password)){
      setError("Senha inválida máx. 6 caracteres, sem espaço ou especial");
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/user/signIn`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({CPF, password}),
      });
      const json = await response.json();
      console.log(response.status, json);
    } catch (err){
      console.log("Erro ao logar: "+ err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.tittle}>Login</Text>
      <Text style={styles.subtittle}>Bem-vindo(a) ao Saúde Mania</Text>

      <View style={styles.inputCaixa}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={CPF}
          onChangeText={text => setCPF(text.replace(/[^0-9]/g,""))}
          keyboardType="numeric"
          maxLength={11}
        />
      </View>

      <View style={styles.inputCaixa}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={text => setPassword(text.replace(/[^A-Za-z0-9]/g,""))}
          secureTextEntry
          maxLength={6}
        />
      </View>

      {error ? <Text style={{ color:"red", marginBottom:10 }}>{error}</Text>:null}

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <View style={styles.cadastroCaixa}>
        <Text style={styles.text}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={()=>router.replace("/cadastro")}>
          <Text style={styles.cadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
