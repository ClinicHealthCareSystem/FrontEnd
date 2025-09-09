import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/menu";

type CardTypes = {
  title: string;
  descricao: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function MenuCard({
  icon,
  title,
  descricao,
  onPress,
}: CardTypes) {
  return (
    <TouchableOpacity style={styles.buttonCards} onPress={onPress}>
      <Ionicons name={icon} size={40} color={"white"} />
      <Text style={styles.textCards}>{title}</Text>
      <Text style={styles.descricaoCards}>{descricao}</Text>
    </TouchableOpacity>
  );
}
