import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesComponents/MedicamentoCard";
import TabsButtonPerfil from "./TabButtonsPerfil";

export default function MedicamentoCard({
  tittleRemedio = "",
  vezesdia = "",
  hora1 = "",
  hora2 = "",
}) {
  const [activeTab, setActiveTab] = useState<"pessoal" | "saude" | "apoio">(
      "pessoal"
    );
  const [liked, setLiked] = useState(false);

  return (

        
    
    <View style={styles.CardContainer}>
      
      <Text style={styles.titleRemedio}>{tittleRemedio}</Text>
      <View style={styles.infoCardView}>
        <Text style={styles.textCardView}>{vezesdia}</Text>
      </View>
      

      <View style={styles.infoCardView}>

                 
        <Text style={styles.textCardView}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color={"white"}
          />
          {hora1}
        </Text>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "checkbox" : "checkbox-outline"}
            size={30}
            color={liked ? "green" : "white"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.infoCardView}>
        <Text style={styles.textCardView}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={16}
            color={"white"}
          />{" "}
          {hora2}
        </Text>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "checkbox" : "checkbox-outline"}
            size={30}
            color={liked ? "green" : "white"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
