import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/menu";

type CardTypes = {
  title: string;
  descricao: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export default function MenuCard({ icon, title, descricao }: CardTypes) {
  return (
    <TouchableOpacity style={styles.buttonCards}>
      <Ionicons name={icon} size={40} color={"white"} />
      <Text style={styles.textCards}>{title}</Text>
      <Text style={styles.descricaoCards}>{descricao}</Text>
    </TouchableOpacity>
  );
}
