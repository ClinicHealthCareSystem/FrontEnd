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
import { validateCPF, validatePassword } from "../utils/validation";

export default function Login() {
  const router = useRouter();
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const { error, handleSignIn } = login(router);

  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };

  const cpfError = validateCPF(CPF);
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
          maxLength={12}
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
