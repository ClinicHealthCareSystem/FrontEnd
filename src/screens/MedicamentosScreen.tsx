import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "../styles/medicamentos";
import { Background } from "../globals/globalstyle";
import Checkbox from "../components/checkbox";
import MedicamentoCard from "../components/MedicamentoCard";
import TabsNavegation from "../components/tabsNavegation";
import HeaderHome from "../components/headerHome";
export default function MedicamentosScreen() {
  return (
    <View style={styles.backgroundMed}>
      <HeaderHome
        titulo="Medicamentos"
        subTitulo="Veja seus Medicamentos"
        mostrarBusca={false}
      />
      <ScrollView style={styles.bodyMed}>
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
        <Checkbox />
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
