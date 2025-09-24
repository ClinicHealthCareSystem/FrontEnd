import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import styles from "../styles/medicamentos";
import Checkbox from "../components/checkbox";
import MedicamentoCard from "../components/MedicamentoCard";

import MedicamentoCardTodos from "../components/MedicamentoCardTodos";
import TabsNavegation from "../components/tabsNavegation";
import HeaderHome from "../components/headerHome";
import TabsButtonPerfil from "../components/TabButtonsPerfil"
export default function MedicamentosScreen() {
  const [activeTab, setActiveTab] = useState<"pessoal" | "saude" | "apoio">(
      "pessoal"
    );
  return (
    <View style={styles.backgroundMed}>
      
      <HeaderHome
        titulo="Medicamentos"
        subTitulo="Veja seus Medicamentos"
        mostrarBusca={false}
      />
      
      <ScrollView style={styles.bodyMed}>
        <TabsButtonPerfil
                    tabs={[
                      {label: "Hoje", value: "pessoal"},
                      {label: "Todos", value: "saude"},
                      {label: "Adicionar", value: "apoio"},
                    ]}
                    activeTab={activeTab}
                    onPress={(value) => setActiveTab(value as "pessoal" | "saude" | "apoio")}
                  />
        {activeTab === "pessoal" && (
    <>
      <MedicamentoCard
        tittleRemedio="Dipirona"
        vezesdia="2x ao dia"
        hora1="8:00"
        hora2="16:00"
      />
      <MedicamentoCard
        tittleRemedio="Paracetamol"
        vezesdia="2x ao dia"
        hora1="8:00"
        hora2="16:00"
      />
      <MedicamentoCard
        tittleRemedio="Amoxicilina"
        vezesdia="2x ao dia"
        hora1="8:00"
        hora2="16:00"
      />
    </>
  )}
        {activeTab === "saude" && (
    <>
      <MedicamentoCardTodos
        tittleRemedio="Losartana 50mg"
        inicio="01/01/2024"
        termino="31/01/2024"
        prescrito="Dr. Carlos Silva"
      />

      <MedicamentoCardTodos
        tittleRemedio="Metformina 850mg"
        inicio="05/01/2024"
        termino="04/02/2024"
        prescrito="Dra. Maria Costa"
      />
    </>
  )}
        <Checkbox />
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
