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

import styles from "../styles/novaSenha";
import { isValidCPF, validatePassword } from "../utils/userValidations";
import { useUpdateUser } from "../hooks/useUpdateUser";

export default function Novasenha() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({});
  const router = useRouter();
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShow2, setPasswordShow2] = useState(false);

  const password = watch("password");

  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };

  const passwordEyes2 = () => {
    setPasswordShow2((prev) => !prev);
  };

  const { error, handleUpdateUser } = useUpdateUser();

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Nova senha</Text>
      <Text
        style={styles.subtittle}
        accessible={true}
        accessibilityLabel="Digite seu CPF e sua nova senha para atualizar seus dados"
      >
        Digite seu CPF e sua nova senha para atualizar seus dados
      </Text>
      <View style={styles.inputCaixa}>
        <Image
          style={styles.id_card}
          source={require("../assets/id_card.png")}
        />
        <Controller
          control={control}
          name="CPF"
          rules={{
            validate: (value) => isValidCPF(value) || true,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={(text: string) =>
                  onChange(text.replace(/\D/g, ""))
                }
                value={value}
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                maxLength={11}
              />
              {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            </>
          )}
        />
      </View>

      <View style={styles.inputCaixa}>
        <Image style={styles.lock} source={require("../assets/lock.png")} />
        <Controller
          control={control}
          name="password"
          rules={{
            validate: (value) => validatePassword(value) || true,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={(text: string) =>
                  onChange(text.replace(/[^A-Za-z0-9]/g, ""))
                }
                value={value}
                placeholder="Digite sua senha"
                secureTextEntry={!passwordShow}
                maxLength={12}
              />
              <TouchableOpacity onPress={passwordEyes} style={styles.buttonEye}>
                <Image
                  source={
                    passwordShow
                      ? require("../assets/visibility_on.png")
                      : require("../assets/visibility_off.png")
                  }
                  style={styles.IconEye}
                />
              </TouchableOpacity>
              {error && (
                <Text style={{ color: "red", marginRight: 10 }}>
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </View>

      <View style={styles.inputCaixa}>
        <Image style={styles.lock} source={require("../assets/lock.png")} />
        <Controller
          control={control}
          name="confirmPassword"
          rules={{
            required: "Confirmação de senha é obrigatória",
            validate: (value) =>
              value === password || "As senhas não são iguais",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={(text: string) =>
                  onChange(text.replace(/[^A-Za-z0-9]/g, ""))
                }
                value={value}
                placeholder="Digite sua senha novamente"
                secureTextEntry={!passwordShow2}
                maxLength={12}
              />
              <TouchableOpacity
                onPress={passwordEyes2}
                style={styles.buttonEye}
              >
                <Image
                  source={
                    passwordShow2
                      ? require("../assets/visibility_on.png")
                      : require("../assets/visibility_off.png")
                  }
                  style={styles.IconEye}
                />
              </TouchableOpacity>
              {error && (
                <Text style={{ color: "red", marginRight: 10 }}>
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonConcluir}
        onPress={handleSubmit((data) => {
          handleUpdateUser(data);
        })}
        accessible={true}
        accessibilityLabel="Voltar para a tela de login"
      >
        <Text style={styles.buttonText}>Concluir</Text>
      </TouchableOpacity>
      <Text style={styles.text} onPress={() => router.replace("/login")}>
        Voltar
      </Text>
    </ScrollView>
  );
}
