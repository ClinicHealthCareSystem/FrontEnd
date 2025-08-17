import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";

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

  const abrirTermos = () => {
    setModalVisible(true);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const router = useRouter();

  async function handleSignUp(data: any) {
    console.log(data);
    try {
      const response = await fetch(`http://localhost:3000/user/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      const json = await response.json();
      console.log(response.status);
      console.log(json);
    } catch (error) {
      console.log("Não foi possível criar o usuário" + error);
    }
  }

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
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Digite seu nome"
            />
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
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Digite seu CPF"
            />
          )}
        />
      </View>

      <Text style={styles.label}>Celular</Text>
      <View style={styles.inputCaixa}>
        <Image style={styles.phone} source={require("../assets/phone.png")} />
        <Controller
          control={control}
          name="CPF"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="(85) 9 9999-9999"
            />
          )}
        />
      </View>
      <Text style={styles.label}>Crie uma Senha</Text>
      <View style={styles.inputCaixa}>
        <Image style={styles.lock} source={require("../assets/lock.png")} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => onChange(text)}
              value={value}
              placeholder="Mínimo 6 dígitos"
            />
          )}
        />
        <Image
          style={styles.visibility_on}
          source={require("../assets/visibility_on.png")}
        />
      </View>

<<<<<<< HEAD
      <TouchableOpacity onPress={abrirTermos}><Text style={styles.buttonAceitar}>Aceite os Termos</Text></TouchableOpacity> 
          <Modal visible={modalVisible} animationType="fade" transparent={true}> <TermosServico/></Modal>

=======
>>>>>>> 0bf382c1f28b593cc53727da488bb1bbea836e72
      <TouchableOpacity
        style={styles.buttonCadastrar}
        // onPress={abrirTermos}
        onPress={handleSubmit(handleSignUp)}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
<<<<<<< HEAD
          {/* <Modal visible={modalVisible} animationType="fade" transparent={true}> <TermosServico/></Modal> */}
=======
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        {" "}
        <TermosServico />
      </Modal>
>>>>>>> 0bf382c1f28b593cc53727da488bb1bbea836e72

      <View style={styles.voltaLogin}>
        <Text style={styles.text}>Já tem uma conta?</Text>
        <TouchableOpacity>
          <Text
            style={styles.textVoltaLogin}
            onPress={() => router.replace("/login")}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
