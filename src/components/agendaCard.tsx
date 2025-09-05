import { Text, View, TouchableOpacity } from "react-native";


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
      <hr style={{ width: "90%" }} />
      <Text style={styles.TipoConsulta}>Tipo da consulta</Text>
      <Text style={styles.Tipo}>Cardiologista</Text>
      <hr style={{ width: "90%" }} />
      <Text style={styles.LocalConsulta}>Local da consulta</Text>
      <Text style={styles.Local}>Av. Exemplo Nº 123</Text>

      <View style={styles.caixaButtonOption}>
        <View>
          <TouchableOpacity style={styles.buttonEdit}>
            <Text style={styles.EditarAgendamentos}>Reagendar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.Cancelar}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
