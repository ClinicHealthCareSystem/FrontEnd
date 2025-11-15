import { View, ScrollView, Switch, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "../../styles/TabStyles/config";
import HeaderHome from "../../components/headerHome";
import TabsNavegation from "../../components/tabsNavegation";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Config() {
  const [FontSize, SetFontsize] = useState(false);
  const [DarkMode, SetDarkMode] = useState(false);
  const [SilenceNotific, SetSilenceNotific] = useState(false);

  const router = useRouter();

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem("token");
      router.replace("/");
    } catch (error) {
      throw new Error(`Error logging out, ${error}`);
    }
  }

  return (
    <View style={styles.background}>
      <HeaderHome />
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <View style={styles.caixa}>
          <Text style={styles.texto}>Aumentar a Fonte</Text>
          <Switch
            value={FontSize}
            onValueChange={SetFontsize}
            thumbColor={FontSize ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={styles.caixa}>
          <Text style={styles.texto}>Modo Escuro</Text>
          <Switch
            value={DarkMode}
            onValueChange={SetDarkMode}
            thumbColor={DarkMode ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={styles.caixa}>
          <Text style={styles.texto}>Silenciar Notificação</Text>
          <Switch
            value={SilenceNotific}
            onValueChange={SetSilenceNotific}
            thumbColor={SilenceNotific ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={styles.caixa2}>
          <Text style={styles.textoSair}>Sair</Text>
          <TouchableOpacity onPress={() => handleLogout()}>
            <MaterialIcons name="logout" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
