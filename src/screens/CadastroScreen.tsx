import { useState } from "react";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TermosServico } from "../components/termos";

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import styles from "../styles/cadastro";

export default function Cadastro() {
  const [modalVisible, setModalVisible] = useState(false);

  const [aceitarTermos, setAceitarTermos] = useState(false);

  const abrirTermos = () => {
    setModalVisible(true);
  };

  const [passwordShow, setPasswordShow] = useState(false);
  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const router = useRouter();

  const [error, setError] = useState("");

  async function handleSignUp(data: any) {
    const senha = data.password;

    // regex: apenas letras e números, mínimo 8 caracteres
    const senhaValida = /^[A-Za-z0-9]{8,}$/;

    if (!senhaValida.test(senha)) {
      setError(
        "Senha inválida: mínimo 8 caracteres, apenas letras e números (sem espaços ou símbolos)"
      );
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/user/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      console.log(response.status);
      console.log(json);
    } catch (error) {
      console.log("Não foi possível criar o usuário: " + error);
    }
  }

  const maskPhone = (text: string) => {
    let cleaned = text.replace(/\D/g, "");
    if (cleaned.length > 11) cleaned = cleaned.substring(0, 11);
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 7)
      return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`;
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(
      2,
      7
    )}-${cleaned.substring(7)}`;
  };

  const unmaskPhone = (text: string) => text.replace(/\D/g, "");

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
          rules={{
            required: "Nome é obrigatório",
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,50}$/,
              message: "Digite um nome válido",
            },
            validate: {
              noDoubleSpaces: (value) =>
                !/\s{2,}/.test(value) || "Evite espaços em excesso",
              hasSurname: (value) =>
                value.trim().split(" ").length > 1 ||
                "Informe nome e sobrenome",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={(text: string) =>
                  onChange(text.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, ""))
                }
                value={value}
                placeholder="Digite seu nome completo"
              />
              {error && <Text style={{ color: "red" }}>{error.message}</Text>}
            </>
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
          name="CPF"
          rules={{
            required: "CPF é obrigatório",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "CPF deve conter 11 dígitos",
            },
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

      <Text style={styles.label}>Celular</Text>
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
                unmaskPhone(value).length === 11 ||
                "Celular deve ter 11 dígitos (com DDD)",
              validDDD: (value) =>
                (parseInt(unmaskPhone(value).substring(0, 2)) >= 11 &&
                  parseInt(unmaskPhone(value).substring(0, 2)) <= 99) ||
                "DDD inválido",
              startsWith9: (value) =>
                unmaskPhone(value)[2] === "9" ||
                "O número deve começar com 9 após o DDD",
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

      <Text style={styles.label}>Crie uma Senha</Text>
      <View style={styles.inputCaixa}>
        <Image style={styles.lock} source={require("../assets/lock.png")} />
        <Controller
          control={control}
          name="password"
          rules={{
            required: "Senha é obrigatória",
            pattern: {
              value: /^[A-Za-z0-9]{8,}$/,
              message:
                "Senha inválida: mínimo 8 caracteres",
            },
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
              />

              {error && <Text style={{ color: "red" }}>{error.message}</Text>}

              <TouchableOpacity onPress={passwordEyes}>
                <Image
                  source={
                    passwordShow
                      ? require("../assets/visibility_on.png")
                      : require("../assets/visibility_off.png")
                  }
                  style={styles.visibility_on}
                />
              </TouchableOpacity>
            </>
          )}
        />
      </View>
      <TouchableOpacity onPress={abrirTermos}>
        <Text style={styles.buttonAceitar}>Aceite os Termos</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        {" "}
        <TermosServico
          onClose={() => setModalVisible(false)}
          onAccept={() => {
            setAceitarTermos(true);
            setModalVisible(false);
          }}
        />
      </Modal>

      <TouchableOpacity
        style={styles.buttonCadastrar}
        disabled={!aceitarTermos}
        onPress={handleSubmit((data) => {
          data.phone = unmaskPhone(data.phone);
          handleSignUp(data);
          router.replace("/login");
        })}
      >
        <Text style={styles.buttonText}>
          {aceitarTermos ? "Cadastrar" : "Cadastrar"}
        </Text>
      </TouchableOpacity>

      <View style={styles.voltaLogin}>
        <Text style={styles.text}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={styles.textVoltaLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
