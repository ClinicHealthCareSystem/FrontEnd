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
import { useVerifyCode } from "../hooks/useVerifyCode";
import { verifyCode } from "../utils/authValidations";

export default function Recuperar() {
  const { phone } = useLocalSearchParams();
  const {
    control,
    formState: { errors },
    getValues,
  } = useForm({});
  const router = useRouter();

  const { error, validateCode } = useVerifyCode();

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
            validate: (value) => verifyCode(value) || true,
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
          onPress={() => {
            const codeValue = getValues("number");
            validateCode(codeValue, phone as string);
          }}
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
