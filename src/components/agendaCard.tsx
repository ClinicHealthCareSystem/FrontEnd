import { Text, View, TouchableOpacity } from "react-native";

import styles from "../stylesComponents/agendaCard";

export default function AgendaCard() {
  return (
    <View style={styles.CardContainer}>
      <Text style={styles.DateHour}>01/09/2025 (Segunda-Feira) 13:50</Text>
      <View style={styles.infoCardView}>
        <Text style={styles.labelCardView}>Nome do profissional</Text>
        <Text style={styles.textCardView}>Fernando</Text>
      </View>

      <View style={styles.infoCardView}>
        <Text style={styles.labelCardView}>Nome do paciente</Text>
        <Text style={styles.textCardView}>Chaves</Text>
      </View>

      <View style={styles.infoCardView}>
        <Text style={styles.labelCardView}>Tipo da consulta</Text>
        <Text style={styles.textCardView}>Cardiologista</Text>
      </View>

      <View style={styles.infoCardView}>
        <Text style={styles.labelCardView}>Local da consulta</Text>
        <Text style={styles.textCardView}>Av. Exemplo Nº 123</Text>
      </View>

      <View style={styles.caixaButtonOption}>
        <TouchableOpacity style={styles.buttonCardEdit}>
          <Text style={styles.buttonTextCardView}>Reagendar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCardCancel}>
          <Text style={styles.buttonTextCardView}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
