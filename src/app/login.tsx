import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import styles from "../styles/login";
import { useRouter } from 'expo-router';
import cadastro from "../styles/cadastro";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const router = useRouter();

  async function handleSignIp(data: any) {
    console.log(data);
    try {
      const response = await fetch(`http://localhost:3000/user/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      const json = await response.json();
      console.log(response.status);
      console.log(json);
    } catch (error) {
      console.log("Crendenciais incorretas, por favor tente novamente" + error);
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <View style={styles.caixa}>
        <View style={styles.caixaTitulo}>
          <Image
            source={require("../assests/heart-pulse (2).png")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>

          <View>
            <Text style={styles.titulo}>Saúde Mania </Text>
            <Text style={styles.subTitulo}>Login</Text>
          </View>
        </View>

        <Text style={styles.label}>CPF</Text>
        <Controller
          control={control}
          name="CPF"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Digite seu CPF"
            />
          )}
        />

        <Text style={styles.label}>Senha</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Digite sua Senha"
            />
          )}
        />

        <TouchableOpacity style={styles.buttonSenha}>
          <Text style={styles.textEsqueceu}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleSignIp)}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.textinfo}>Você não possui uma conta?</Text>
        <TouchableOpacity style={styles.buttonCadastro} onPress={() => router.navigate('/cadastro')}>
          <Text style={styles.buttonTextCadastro}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
