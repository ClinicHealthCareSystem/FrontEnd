import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
  Keyboard,
  Platform,
} from "react-native";
import styles from "../styles/telainicial";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollbackground}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.background}>
        <Image source={require("../assets/heart-pulse-inicio.png")} />
        <Text style={styles.titulo}>Saúde Mania</Text>

        <Text style={styles.subTitulo}>A nossa mania é a sua saúde</Text>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => router.push("/cadastro")}
        >
          <Text style={styles.textButton}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
