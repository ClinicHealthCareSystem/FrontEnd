import {
  View,
  ScrollView,
} from "react-native";
import styles from "../styles/menu";

import { Ionicons } from "@expo/vector-icons";
import TabsNavegation from "../components/tabsNavegation";
import HeaderHome from "../components/headerHome";
import MenuCard from "../components/menuCards";

type Botao = {
  id: number;
  title: string;
  descricao: string;
  icon: keyof typeof Ionicons.glyphMap;
};

export default function Menu() {
  const card: Botao[] = [
    {
      id: 1,
      title: "AGENDAMENTO",
      descricao: "Realize seu agendamento",
      icon: "today-outline",
    },
    {
      id: 2,
      title: "RESULTADOS",
      descricao: "Veja os Resultados Clinicos",
      icon: "document-text-outline",
    },
    {
      id: 3,
      title: "MEDICAMENTOS",
      descricao: "Qual Medicamento receitado",
      icon: "bandage-outline",
    },
    {
      id: 4,
      title: "PLANOS",
      descricao: "Atualize seu plano",
      icon: "heart-circle-outline",
    },
    {
      id: 5,
      title: "CHATBOT",
      descricao: "Entre em contato",
      icon: "chatbubbles-outline",
    },
  ];
  return (
    <View style={styles.background}>
      <HeaderHome mostrarBusca={true} />

      <ScrollView style={styles.scrollCards}>
        <View style={styles.cards}>
          {card.map((card) => (
            <MenuCard
              key={card.id}
              title={card.title}
              descricao={card.descricao}
              icon={card.icon}
            />
          ))}
        </View>
      </ScrollView>

      <TabsNavegation />
    </View>
  );
}
