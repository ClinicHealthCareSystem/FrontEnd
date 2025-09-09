import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../components/headerHome";
import TabsNavegation from "../components/tabsNavegation";
import AgendaCard from "../components/agendaCard";
import TabsButtonPerfil from "../components/TabButtonsPerfil";

import styles from "../styles/agendar";

export default function AgendarScreen() {
  const [activeTab, setActiveTab] = useState<"pessoal" | "saude" | "apoio">(
      "pessoal"
    );
  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Agendamentos"
          mostrarBusca={false}
          subTitulo="Veja seus agendamentos"
        />
        <ScrollView style={styles.body}>
          <TabsButtonPerfil
                      tabs={[
                        {label: "Consultas", value: "pessoal"},
                        {label: "Exames", value: "saude"},
                        {label: "Agendar", value: "apoio"},
                      ]}
                      activeTab={activeTab}
                      onPress={(value) => setActiveTab(value as "pessoal" | "saude" | "apoio")}
                    />
          <AgendaCard />
          
        </ScrollView>
        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
}
