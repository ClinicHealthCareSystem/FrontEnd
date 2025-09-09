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
import { useSignUp } from "../hooks/useSignUp";
import {
  unmaskPhone,
  isValidCPF,
  unmaskCPF,
  maskCPF,
  validateName,
  validatePassword,
  validatePhone,
  maskPhone,
} from "../utils/userValidations";

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

  const { error, handleSignUp } = useSignUp();

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
            validate: (value) => validateName(value) || true,
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
            validate: (value) => isValidCPF(value) || true,
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <TextInput
                style={styles.input}
                onChangeText={(text: string) =>
                  onChange(maskCPF(text))
                }
                value={value}
                placeholder="Digite seu CPF"
                keyboardType="numeric"
                maxLength={14}
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

      <Text style={styles.label}>Crie uma Senha</Text>
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
          handleSignUp(data.name, data.CPF, data.phone, data.password);
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
