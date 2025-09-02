import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "../stylesComponents/agendaCard";

export default function AgendaCard() {
  return (
    
    <View style={styles.CardContainer}>
      <Text style={styles.DateHour}>01/09/2025 (Segunda-Feira) 13:50</Text>
      <hr style={{ width: "90%" }} />
      <Text style={styles.Profissional}>Nome do profissional</Text>
      <Text style={styles.ProfissionalName}>Fernando</Text>
      <hr style={{ width: "90%" }} />
      <Text style={styles.Paciente}>Nome do paciente</Text>
      <Text style={styles.PacienteName}>Chaves</Text>

      <View style={styles.caixaButtonOption}>
        <View style={styles.buttonEdit}>
      <TouchableOpacity>
        <Text style={styles.EditarAgendamentos}>Editar</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.buttonCancel}>
      <TouchableOpacity>
        <Text style={styles.Cancelar}>Cancelar</Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
    
  );
}
