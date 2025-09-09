import { Text, View, ScrollView } from "react-native";
import HeaderHome from "../components/headerHome";
import TabsNavegation from "../components/tabsNavegation";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/perfil";
import TabsButtonPerfil from "../components/TabButtonsPerfil";
import CardInfoPerfil from "../components/cardInfo";
import { useState } from "react";

export default function Perfil() {
  const [activeTab, setActiveTab] = useState<"pessoal" | "saude" | "apoio">(
    "pessoal"
  );
  return (
    <View style={styles.background}>
      <HeaderHome mostrarBusca={false} titulo="Meu Perfil" />
      <ScrollView>
        <View style={styles.cardPerfil}>
          <View style={styles.avatarCaixa}>
            <Ionicons
              name="person-circle"
              style={styles.avatar}
              size={100}
              color={"white"}
            />
          </View>

          <Text style={styles.nome}>José</Text>
          <Text style={styles.info}>Desde junho 2020</Text>

          <View style={styles.statusAvatar}>
            <View style={styles.planoStatus}>
              <Text style={styles.planoStatusText}>Plano Básico</Text>
            </View>
            <View style={styles.idSatus}>
              <Text style={styles.idStatusText}>Registro: #2020612</Text>
            </View>
          </View>
        </View>
        
          <TabsButtonPerfil
            tabs={[
              {label: "Pessoal", value: "pessoal"},
              {label: "Saúde", value: "saude"},
              {label: "Apoio", value: "apoio"},
            ]}
            activeTab={activeTab}
            onPress={(value) => setActiveTab(value as "pessoal" | "saude" | "apoio")}
          />
          

        <CardInfoPerfil activeTab={activeTab} />
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
