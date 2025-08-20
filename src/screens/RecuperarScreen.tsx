import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";

import styles from "../styles/recuperar";

export default function Recuperar() {
  const { phone } = useLocalSearchParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({});
  const router = useRouter();

  async function validateCode() {
    const codeValue = getValues("number");

    if (!codeValue || codeValue.length !== 6) {
      Alert.alert("Erro: ", "Digite um código válido");
      return;
    }

    const payload = {
      phone: phone,
      code: codeValue,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/whatsapp/verifyCodeAuthenticator`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      if (response.ok) {
        console.log("Código válido!");
        router.push({
          pathname: "/novasenha",
        });
      } else {
        console.log("Código inválido");
      }
    } catch (error) {
      console.log("Erro na verificação do código", error);
      Alert.alert("Erro", "Não foi possível verificar o código");
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Recuperar senha</Text>
      <Text
        style={styles.subtittle}
        accessible={true}
        accessibilityLabel="Foi enviado um SMS para seu telefone. Digite o código para prosseguir"
      >
        Foi enviado um código para seu Watsapp. Digite o código para prosseguir
      </Text>
      <Text style={styles.label}>Digite o código</Text>
      <View style={styles.inputCaixa}>
        <Image style={styles.sms} source={require("../assets/sms.png")} />
        <Controller
          control={control}
          name="number"
          rules={{
            required: "Código obrigatório",
            pattern: {
              value: /^[0-9]{6}$/,
              message: "O código deve ter exatamente 6 dígitos numéricos",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={(text) => onChange(text.replace(/[^0-9]/g, ""))}
                value={value}
                placeholder="Digite o código de autenticação"
                accessible={true}
                accessibilityLabel="Digitar código de verificação"
                keyboardType="numeric"
                maxLength={6}
              />
              {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            </>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonCadastrar}
          onPress={validateCode}
          accessible={true}
          accessibilityLabel="Confirmar código de verificação"
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={styles.text}
        onPress={() => router.replace("/esqueceu")}
        accessible={true}
        accessibilityLabel="Voltar para tela de esqueceu a senha"
      >
        Voltar
      </Text>
    </ScrollView>
  );
}
