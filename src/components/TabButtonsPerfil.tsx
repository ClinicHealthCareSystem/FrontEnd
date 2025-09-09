import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tabButtonPerfil from "../stylesComponents/tabButtonPerfil";

type Props = {
  textTittleButton: string;
  onPress: () => void;
  active: boolean;
};

export default function TabsButtonPerfil({ textTittleButton, onPress }: Props) {
  return (
    <TouchableOpacity style={tabButtonPerfil.tabButtonPerfil} onPress={onPress}>
      <Text style={tabButtonPerfil.tabTextPerfil}>{textTittleButton}</Text>
    </TouchableOpacity>
  );
}
