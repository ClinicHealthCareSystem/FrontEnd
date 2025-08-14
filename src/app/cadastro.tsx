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
      <View style={styles.caixa}>
        <Image
          source={require("../assests/heart-pulse (2).png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.titulo}>Saúde Mania</Text>
        <Text style={styles.subtitulo}>Cadastro</Text>

        <View style={styles.camposCaixa}>
          <View style={styles.inputCaixa}>
            <Text style={styles.label}>Nome Completo</Text>
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
          <View style={styles.inputCaixa}>
            <Text style={styles.label}>Senha</Text>

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={(text: string) => onChange(text)}
                  value={value}
                  placeholder="Crie sua senha"
                />
              )}
            />
          </View>
        </View>
        <View style={styles.camposCaixa}>
          <View style={styles.inputCaixa}>
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
          </View>
          <View style={styles.inputCaixa}>
            <Text style={styles.label}>Email</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={styles.input}
                  onChangeText={(text: string) => onChange(text)}
                  value={value}
                  placeholder="Digite seu Email"
                />
              )}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonVoltar}
            onPress={() => router.navigate("/")}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonCadastrar}
            onPress={handleSubmit(handleSignUp)}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
