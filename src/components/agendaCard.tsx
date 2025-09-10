import { Text, View, TouchableOpacity } from "react-native";

import styles from "../stylesComponents/agendaCard";

import marcacaoButtons from "../stylesComponents/marcacaoButtons";

type Props = {
  activeTab: "opcao1" | "opcao2" | "opcao3";
};

export default function AgendaCard({activeTab}: Props) {
  return (
    <View>
      {activeTab === "opcao1" && (
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
    )}

    {activeTab === "opcao2" && ( 
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
        <Text style={styles.labelCardView}>Tipo da Exame</Text>
        <Text style={styles.textCardView}>Hemograma</Text>
      </View>

      <View style={styles.infoCardView}>
        <Text style={styles.labelCardView}>Local do enxame</Text>
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
    )}

    {activeTab === "opcao3" && ( 
    <View style={marcacaoButtons.background}>
      <View style={marcacaoButtons.caixaMarcacao}> 
        <Text style={marcacaoButtons.tittleTextCaixaMarcacao}>Marque seu Agendamento</Text>
      </View>

      <View style={marcacaoButtons.caixaMarcacao}>
        <TouchableOpacity style={marcacaoButtons.buttonMarcacao}>
          <Text style={marcacaoButtons.textButtonMarcacao}>Consulta</Text>
        </TouchableOpacity>
      </View>

      <View style={marcacaoButtons.caixaMarcacao}>
        <TouchableOpacity style={marcacaoButtons.buttonMarcacao}>
          <Text style={marcacaoButtons.textButtonMarcacao}>Exame</Text>
        </TouchableOpacity>
      </View>
      </View>
      )}
    </View>

    


    

    
  );
}
