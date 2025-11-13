import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

interface MedicamentoCardTodosProps {
  tittleRemedio: string;
  inicio: string;
  termino: string;
  prescrito: string;
}

export default function MedicamentoCardTodos({
  tittleRemedio = "",
  inicio = "",
  termino = "",
  prescrito = "",
}: MedicamentoCardTodosProps) {
  

  return (
    <View style={globalStyles.medicamentoCardTodosContainer}>
      <View style={globalStyles.medicamentoCardTodosHeader}>
        <Text style={globalStyles.medicamentoCardTodosTitle}>{tittleRemedio}</Text>
      
      </View>


      
      <View style={globalStyles.medicamentoCardTodosInfoRow}>
        <MaterialCommunityIcons name="calendar-start" size={18} color="white" />
        <Text style={globalStyles.medicamentoCardTodosInfoText}>Início: {inicio}</Text>
      </View>

      <View style={globalStyles.medicamentoCardTodosInfoRow}>
        <MaterialCommunityIcons name="calendar-end" size={18} color="white" />
        <Text style={globalStyles.medicamentoCardTodosInfoText}>Término: {termino}</Text>
      </View>

      <View style={globalStyles.medicamentoCardTodosInfoRow}>
        <MaterialCommunityIcons name="stethoscope" size={18} color="white" />
        <Text style={globalStyles.medicamentoCardTodosInfoText}>Prescrito por: {prescrito}</Text>
      </View>

      
      <View style={globalStyles.medicamentoCardTodosButtonsRow}>
        <TouchableOpacity style={globalStyles.medicamentoCardTodosButtonPrimary}>
          <Text style={globalStyles.buttonText}>Ver Detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.medicamentoCardTodosButtonSecondary}>
          <Text style={globalStyles.buttonText}>Histórico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
