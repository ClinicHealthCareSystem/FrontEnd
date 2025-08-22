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

export default function Novasenha() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const router = useRouter();
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShow2, setPasswordShow2] = useState(false);

  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };
  const passwordEyes2 = () => {
    setPasswordShow2((prev) => !prev);
  };

  async function handleUpdateUser(data: any) {
    console.log(data);
    try {
      const response = await fetch(`http://localhost:3000/user/updateUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      console.log(json);
      console.log(response.status);
      if (!response.ok) {
        throw new Error(`ERROR HTTP: ${response.status}`);
      } else {
        console.log("Dados do usuário atualizado com sucesso");
        router.replace("/login");
      }
    } catch (error) {
      console.log("Não foi possível atualizar os dados do usuário: " + error);
      throw new Error("Não foi possível atulizar seus dados: " + error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.titulo}>Nova senha</Text>
      <Text
        style={styles.subtittle}
        accessible={true}
        accessibilityLabel="Foi enviado um SMS para seu telefone. Digite o código para prosseguir"
      >
        Foi enviado um SMS para seu telefone. Digite o código para prosseguir
      </Text>
      <View style={styles.inputCaixa}>
        <Image
          style={styles.envelope}
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
              keyboardType="numeric"
              placeholder="Digite seu CPF"
              accessible={true}
              accessibilityLabel="Digitar código de verificação"
            />
          )}
        />
      </View>
      <View>
        <Image
          style={styles.envelope2}
          source={require("../assets/lock.png")}
        />
        <View>
          <TouchableOpacity
            style={styles.inputCaixa}
            accessible={true}
            accessibilityLabel="Envia SMS para o telefone informado"
          >
            <TextInput
              style={styles.input2}
              placeholder="Digite sua nova senha"
              secureTextEntry={!passwordShow}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={passwordEyes}>
            <Image
              source={
                passwordShow
                  ? require("../assets/visibility_on.png")
                  : require("../assets/visibility_off.png")
              }
              style={styles.visivility_on}
            />
          </TouchableOpacity>

          <Image
            style={styles.envelope3}
            source={require("../assets/lock.png")}
          />
          <View>
            <TouchableOpacity
              style={styles.inputCaixa}
              accessible={true}
              accessibilityLabel="Envia SMS para o telefone informado"
            >
              <TextInput
                style={styles.input2}
                placeholder="Digite sua nova senha"
                secureTextEntry={!passwordShow2}
              ></TextInput>
            </TouchableOpacity>

            <TouchableOpacity onPress={passwordEyes2}>
              <Image
                source={
                  passwordShow2
                    ? require("../assets/visibility_on.png")
                    : require("../assets/visibility_off.png")
                }
                style={styles.visivility_on}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonCadastrar}
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
      </View>
    </ScrollView>
  );
}
