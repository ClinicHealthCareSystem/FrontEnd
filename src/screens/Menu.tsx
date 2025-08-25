import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, ScrollView, TextInput } from "react-native";
import styles from "../styles/menu";

import { Ionicons } from "@expo/vector-icons";
import { Link, router, Tabs } from "expo-router";
import { useRouter } from "expo-router";

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
      <View style={styles.barraAlta}>
        <View style={styles.caixaTopo}>
          <Text style={styles.tittle}>Saúde Mania</Text>
          <TouchableOpacity>
          <Ionicons name="notifications" size={20} color= "white"  style={{left: 150, bottom: 25}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.caixaPesquisa}>
        <Ionicons name="search" size={20} color= "#3284f1"  style={{top: 37}}/>
        <TextInput style={styles.search_bar} placeholder="  O que você está procurando?"/>
        </View>
      </View>

      <ScrollView style={styles.scrollCards}>
        <View style={styles.cards}>
          {card.map((item) => (
            <TouchableOpacity key={item.id} style={styles.buttonCards}>
              <Ionicons name={item.icon} size={40} color={"white"} />
              <Text style={styles.textCards}>{item.title}</Text>
              <Text style={styles.descricaoCards}>{item.descricao}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      <View style={styles.tabNavegation}>
        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="home" size={30} color= "#fff" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="person" size={30} color= "#fff" />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Ionicons name="settings" size={30} color= "#fff" />
          <Text style={styles.tabText}>Config</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
