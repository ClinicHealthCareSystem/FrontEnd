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
import { useSendCode } from "../hooks/useSendCode";
import {
  validatePhone,
  maskPhone,
  unmaskPhone,
} from "../utils/userValidations";

const { error, handleVerificationCode } = useSendCode();

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
        <Controller
          control={control}
          name="phone"
          rules={{
            validate: (value) => validatePhone(value) || true,
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
            handleVerificationCode(data.phone);
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
