import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import styles from "../styles/menu";

import { Ionicons } from "@expo/vector-icons";
import { Link, router, Tabs } from "expo-router";
import { useRouter } from "expo-router";
import TabsNavegation from "../components/tabsNavegation";
import HeaderHome from "../components/headerHome";
import MenuCard from "../components/menuCards";

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
      title: "CONSULTAS",
      descricao: "Marque sua consulta",
      icon: "medkit-outline",
    },
    {
      id: 2,
      title: "EXAMES",
      descricao: "Marque seu Enxame",
      icon: "flask-outline",
    },
    {
      id: 3,
      title: "HISTÓRICO",
      descricao: "Veja seus Histórico",
      icon: "time-outline",
    },
    {
      id: 4,
      title: "MEDICAMENTOS",
      descricao: "Qual Medicamento receitado",
      icon: "bandage-outline",
    },
    {
      id: 5,
      title: "RESULTADOS",
      descricao: "Veja os Resultados Clinicos",
      icon: "document-text-outline",
    },
    {
      id: 6,
      title: "PLANOS",
      descricao: "Atualize seu plano",
      icon: "heart-circle-outline",
    },
  ];
  return (
    <View style={styles.background}>
      <HeaderHome mostrarBusca={true} />

      <ScrollView style={styles.scrollCards}>
        <View style={styles.cards}>
          {card.map((card) => (
            <MenuCard 
              key={card.id}
              title={card.title}
              descricao={card.descricao}
              icon={card.icon}
            />
            // <TouchableOpacity key={item.id} style={styles.buttonCards}>
            //   <Ionicons name={item.icon} size={40} color={"white"} />
            //   <Text style={styles.textCards}>{item.title}</Text>
            //   <Text style={styles.descricaoCards}>{item.descricao}</Text>
            // </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TabsNavegation />
    </View>
  );
}
