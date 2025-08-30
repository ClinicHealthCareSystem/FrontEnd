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
import login from "../hooks/useLogin";
import {
  isValidCPF,
  validatePassword,
  maskCPF,
} from "../utils/userValidations";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [touched, setTouched] = useState<{ cpf: boolean; password: boolean }>({
    cpf: false,
    password: false,
  });

  const { error, handleSignIn } = login(router);

  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };

  const cpfError = isValidCPF(CPF);
  const passwordError = validatePassword(password);

  const handleSubmit = () => {
    if (!cpfError && !passwordError) {
      handleSignIn(CPF, password);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.tittle}>Login</Text>
      <Text style={styles.subtittle}>Bem-vindo(a) ao Saúde Mania</Text>

      <View style={styles.inputCaixa}>
        <Ionicons name="person-outline" size={30} style={styles.id_card} />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          value={maskCPF(CPF)}
          onChangeText={(text) => setCPF(text)}
          maxLength={14}
          onBlur={() => setTouched((prev) => ({ ...prev, cpf: true }))}
        />
        {touched.cpf && cpfError ? (
          <Text style={{ color: "red", marginBottom: 5 }}>{cpfError}</Text>
        ) : null}
      </View>

      <View style={styles.inputCaixa}>
        <Ionicons name="lock-closed-outline" size={30} style={styles.lock} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!passwordShow}
          maxLength={12}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
        />
        {touched.password && passwordError ? (
          <Text style={{ color: "red", marginBottom: 5 }}>{passwordError}</Text>
        ) : null}
        <TouchableOpacity onPress={passwordEyes}>
          {passwordShow ? (
            <Ionicons name="eye-outline" size={30} style={styles.eyeOpened}/>
          ) : (
            <Ionicons name="eye-off-outline" size={30} style={styles.eyeClosed}/>
          )}
        </TouchableOpacity>
      </View>

      {error ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      ) : null}

      <TouchableOpacity onPress={() => router.replace("/esqueceu")}>
        <Text style={styles.esqueci}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
