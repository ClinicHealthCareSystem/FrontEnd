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
  const { code } = useLocalSearchParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({});
  const router = useRouter();

  function Code() {
    const codeValue = getValues("number");
    console.log("codeValue:", codeValue);
    if (codeValue !== code) {
      Alert.alert("Código inválido, tente novamente");
      return;
    }
    router.replace("/novasenha");
  }
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Recuperar senha</Text>
      <Text
        style={styles.subtittle}
        accessible={true}
        accessibilityLabel="Foi enviado um SMS para seu telefone. Digite o código para prosseguir"
      >
        Foi enviado um SMS para seu telefone. Digite o código para prosseguir
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
              value: /^[0-9]{4}$/,
              message: "O código deve ter exatamente 4 dígitos numéricos",
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
                maxLength={4}
              />
              {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            </>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonCadastrar}
          onPress={Code}
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
