import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import styles from "../styles/cadastro";

export default function Cadastro() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const router = useRouter();

  async function handleSignUp(data: any) {
    console.log(data);
    try {
      const response = await fetch(`http://localhost:3000/user/signUp`, {
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
      console.log("Não foi possível criar o usuário" + error);
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Cadastro</Text>

      <Text style={styles.label}>Nome Completo</Text>
      <View style={styles.inputCaixa}>
        <Image
          style={styles.account_circle}
          source={require("../assets/account_circle.png")}
        />
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Digite seu nome"
            />
          )}
        />
      </View>
      <Text style={styles.label}>CPF</Text>
      <View style={styles.inputCaixa}>
        <Image
          style={styles.id_card}
          source={require("../assets/id_card.png")}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Digite seu CPF"
            />
          )}
        />
      </View>

      <Text style={styles.label}>Celular</Text>
      <View style={styles.inputCaixa}>
        <Image style={styles.phone} source={require("../assets/phone.png")} />
        <Controller
          control={control}
          name="CPF"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="(85) 9 9999-9999"
            />
          )}
        />
      </View>
      <Text style={styles.label}>Crie uma Senha</Text>
      <View style={styles.inputCaixa}>
        <Image style={styles.lock} source={require("../assets/lock.png")} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Mínimo 6 dígitos"
            />
          )}
        />
        <Image
          style={styles.visibility_on}
          source={require("../assets/visibility_on.png")}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonCadastrar}
        onPress={handleSubmit(handleSignUp)}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.voltaLogin}>
        <Text style={styles.text}>Já tem uma conta?</Text>
        <TouchableOpacity>
          <Text
            style={styles.textVoltaLogin}
            onPress={() => router.replace("/login")}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
