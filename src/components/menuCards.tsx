import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/menu";

import {BounceInLeft, BounceInUp, FadeIn, FadeOut} from 'react-native-reanimated';
import Reanimated from "react-native-reanimated";

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
    <Reanimated.View style={styles.buttonCards} entering={BounceInUp.duration(400)} exiting={FadeOut.duration(500)}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={icon} size={40} color={"white"}/>
        <Text style={styles.textCards}>{title}</Text>
        <Text style={styles.descricaoCards}>{descricao}</Text>
      </TouchableOpacity>
    </Reanimated.View>
  );
}
