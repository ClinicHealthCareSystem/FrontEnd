import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";
import TabsButtonPerfil from "./TabButtonsPerfil";

import { FadeIn, FadeOut } from 'react-native-reanimated';
import Reanimated from "react-native-reanimated";

interface MedicamentoCardProps {
  tittleRemedio: string;
  vezesdia: string;
  hora1: string;
  hora2: string;
}

export default function MedicamentoCard({
  tittleRemedio = "",
  vezesdia = "",
  hora1 = "",
  hora2 = "",
}: MedicamentoCardProps) {
  const [activeTab, setActiveTab] = useState<"opcao1" | "opcao2" | "opcao3">(
    "opcao1"
  );
  const [liked, setLiked] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [notify, setNotify] = useState(true); 

  return (
    <Reanimated.View style={globalStyles.medicamentoCardContainer} entering={FadeIn.duration(700)} exiting={FadeOut.duration(500)}>
      <View style={globalStyles.medicamentoCardHeader}>
      <Text style={globalStyles.medicamentoCardTitle}>{tittleRemedio}</Text>
      <TouchableOpacity onPress={() => setNotify(!notify)}>
          <Ionicons
            name={notify ? "notifications" : "notifications-off"}
            size={24}
            color={notify ? "white" : "gray"}
          />
        </TouchableOpacity>
        </View>
      <View style={globalStyles.medicamentoCardInfoView}>
        <Text style={globalStyles.medicamentoCardInfoText}>{vezesdia}</Text>
      </View>

      <View style={globalStyles.medicamentoCardInfoView}>
        <Text style={globalStyles.medicamentoCardInfoText}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color={"white"}
            style={{ marginRight: 5 }}
          />
          {hora1}
        </Text>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "checkbox" : "checkbox-outline"}
            size={30}
            color={liked ? "green" : "white"}
            style={{ marginRight: 10, marginTop: 5 }}
          />
        </TouchableOpacity>
      </View>

      <View style={globalStyles.medicamentoCardInfoView}>
        <Text style={globalStyles.medicamentoCardInfoText}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color={"white"}
          />{" "}
          {hora2}
        </Text>
        <TouchableOpacity onPress={() => setLiked2(!liked2)}>
          <Ionicons
            name={liked2 ? "checkbox" : "checkbox-outline"}
            size={30}
            color={liked2 ? "green" : "white"}
            style={{ marginRight: 10, marginTop: 5 }}
          />
        </TouchableOpacity>
      </View>
    </Reanimated.View>
  );
}
