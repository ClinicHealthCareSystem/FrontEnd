import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { router, useRouter } from "expo-router";

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

import styles from "../styles/esqueceu";

async function handleVerificationCode(data: any) {
  try {
    const response = await fetch(
      `http://localhost:3000/whatsapp/sendVerificationCode`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: data.phone }),
      }
    );
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // NÃO passa o código como parâmetro!
      router.push({
        pathname: "/recuperar",
        params: { phone: data.phone }, // Apenas o telefone
      });
    } else {
      console.log("Não foi possível enviar o código para o celular fornecido");
    }
  } catch (error) {
    console.log(
      "Não foi possível enviar o código para o celular fornecido: " + error
    );
  }

  router.push({
    pathname: "/recuperar",
    // params: { code: verificationCode.toString() },
  });
}

export default function Esqueceu() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const router = useRouter();

  const maskPhone = (text: string) => {
    let cleaned = text.replace(/\D/g, "");

    if (cleaned.length > 10) cleaned = cleaned.substring(0, 10);

    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 6)
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`;
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
      2,
      6
    )}-${cleaned.substring(6)}`;
  };

  const unmaskPhone = (text: string) => text.replace(/\D/g, "");

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
        <Controller
          control={control}
          name="phone"
          rules={{
            required: "Celular é obrigatório",
            validate: {
              onlyNumbers: (value) =>
                /^[0-9]+$/.test(unmaskPhone(value)) || "Digite apenas números",
              exactLength: (value) =>
                unmaskPhone(value).length === 10 ||
                "Celular deve ter 10 dígitos (com DDD)",
              validDDD: (value) =>
                (parseInt(unmaskPhone(value).substring(0, 2)) >= 11 &&
                  parseInt(unmaskPhone(value).substring(0, 2)) <= 99) ||
                "DDD inválido",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={(text: string) => onChange(maskPhone(text))}
                value={value}
                placeholder="Digite seu celular com DDD"
                keyboardType="numeric"
                maxLength={15}
              />
              {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            </>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.sendPasswordButton}
          onPress={handleSubmit((data) => {
            data.phone = unmaskPhone(data.phone);
            handleVerificationCode(data);
          })}
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
