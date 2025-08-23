import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import styles from "../styles/menu";

import { Ionicons } from "@expo/vector-icons";

type Botao = {
  id: number;
  title: string;
  descricao: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export default function Menu() {
  const card: Botao[] = [
    {
      id: 1,
      title: "MARCAR CONSULTA",
      descricao: "Marque sua consulta",
      icon: "medkit-outline",
    },
    {
      id: 2,
      title: "AGENDAR EXAMES",
      descricao: "Marque sua consulta",
      icon: "time-outline",
    },
    {
      id: 3,
      title: "HISTÓRICO",
      descricao: "Marque sua consulta",
      icon: "flask-outline",
    },
    {
      id: 4,
      title: "MEDICAMENTOS",
      descricao: "Marque sua consulta",
      icon: "bandage-outline",
    },
    {
      id: 5,
      title: "RESULTADOS",
      descricao: "Marque sua consulta",
      icon: "people-outline",
    },
    {
      id: 6,
      title: "PLANOS",
      descricao: "Marque sua consulta",
      icon: "settings-outline",
    },
  ];
  return (
    <>
      <View style={styles.background}>
        <View style={styles.barraAlta}>
          <Text style={styles.tittle}>Saúde Mania</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollCards}>
        <View style={styles.cards}>
          {card.map((item) => (
            <TouchableOpacity key={item.id} style={styles.buttonCards}>
              <Ionicons name={item.icon} size={36} color={"white"} />
              <Text style={styles.textCards}>{item.title}</Text>
              <Text style={styles.descricaoCards}>{item.descricao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
