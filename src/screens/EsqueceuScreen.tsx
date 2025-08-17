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

import styles from "../styles/esqueceu";

export default function Esqueceu() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Esqueceu sua senha?</Text>
      <Text
        style={styles.subtittle}
        accessible={true}
        accessibilityLabel="Coloque seu telefone para que possamos enviar um SMS para realizar a verificação"
      >
        Coloque seu telefone para que possamos enviar um SMS para realizar a
        verificação
      </Text>
      <Text style={styles.label}>Telefone</Text>
      <View style={styles.inputCaixa}>
        <Image style={styles.phone} source={require("../assets/phone.png")} />
        <TextInput
          style={styles.input}
          accessible={true}
          accessibilityLabel="Digite seu telefone"
          placeholder="(85) 9 9999-9999"
          keyboardType="phone-pad"
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.sendPasswordButton}
          onPress={() => router.replace("/recuperar")}
          accessible={true}
          accessibilityLabel="Envia SMS para o telefone informado"
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <Text style={styles.text} onPress={() => router.replace("/login")}>
          Voltar
        </Text>
      </View>
    </ScrollView>
  );
}
