import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from "react-native";
import styles from "../styles/login";
import { useRouter } from "expo-router";

import * as SecureStore from "expo-secure-store";

// import { setItemAsync } from "expo-secure-store";

export default function Login() {
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [passwordShow, setPasswordShow] = useState(false);

  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };

  const handleSignIn = async () => {
    setError("");

    if (!CPF || !password) {
      setError("Esses campos são obrigatórios");
      return;
    }

    if (!/^\d{11,11}$/.test(CPF)) {
      setError("CPF precisa ter 11 dígitos");
      return;
    }

    if (password.length < 8 && !/^[A-Z a-z 0-9]{8,}$/.test(password)) {
      setError("Senha inválida, mínumo 8 caracteres necessários");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ CPF, password }),
      });

      const json = await response.json();
      console.log(response.status, json);

      if (response.ok) {
        const token = json.access_token;

        if (token) {
          try {
            if (typeof window !== "undefined" && window.localStorage) {
              localStorage.setItem("token", token);
              console.log("Token salvo no localStorage");
            } else {
              await SecureStore.setItemAsync("token", token);
              console.log("Token salvo no SecureStore");
            }

            router.replace("/menu");
          } catch (storageError) {
            console.error("Erro ao armazenar:", storageError);
          }
        } else {
          setError("Token não recebido do servidor");
        }
      } else {
        setError(json.message || "Falha ao autenticar");
      }
    } catch (err) {
      console.log("Erro ao logar: " + err);
      setError("Erro no servidor, tente novamente mais tarde");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.tittle}>Login</Text>
      <Text style={styles.subtittle}>Bem-vindo(a) ao Saúde Mania</Text>

      <View style={styles.inputCaixa}>
        <Image
          style={styles.id_card}
          source={require("../assets/id_card.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={CPF}
          onChangeText={(text) => setCPF(text.replace(/[^0-9]/g, ""))}
          maxLength={11}
        />
      </View>

      <View style={styles.inputCaixa}>
        <Image style={styles.lock} source={require("../assets/lock.png")} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(text) =>
            setPassword(text.replace(/[^A-Za-z0-9]/g, ""))
          }
          secureTextEntry={!passwordShow}
        />
        {password.length > 0 && password.length < 8 && (
          <Text style={{ color: "red" }}>
            A senha deve ter pelo menos 8 caracteres
          </Text>
        )}
        <TouchableOpacity onPress={passwordEyes}>
          <Image
            source={
              passwordShow
                ? require("../assets/visibility_on.png")
                : require("../assets/visibility_off.png")
            }
            style={styles.visivility_on}
          />
        </TouchableOpacity>
      </View>

      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      ) : null}

      <TouchableOpacity onPress={() => router.replace("/esqueceu")}>
        <Text style={styles.esqueci}>Esqueceu a senha?</Text>{" "}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <View style={styles.cadastroCaixa}>
        <Text style={styles.text}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => router.replace("/cadastro")}>
          <Text style={styles.cadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
