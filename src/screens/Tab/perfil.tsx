import { Text, View, ScrollView } from "react-native";
import HeaderHome from "../../components/headerHome";
import TabsNavegation from "../../components/tabsNavegation";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/TabStyles/perfil";
import TabsButtonPerfil from "../../components/TabButtonsPerfil";
import CardInfoPerfil from "../../components/cardInfo";
import { use, useState } from "react";
import { useRouter } from "expo-router";
import meuPlano from "../../hooks/meuPlano";

export default function Perfil() {
  const [activeTab, setActiveTab] = useState<"opcao1" | "opcao2" | "opcao3">(
    "opcao1"
  );
  const { error, plano } = meuPlano();
  
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
              <Text style={styles.planoStatusText}>{plano}</Text>
            </View>
            <View style={styles.idSatus}>
              <Text style={styles.idStatusText}>Registro: #2020612</Text>
            </View>
          </View>
        </View>
        
          <TabsButtonPerfil
            tabs={[
              {label: "Pessoal", value: "opcao1"},
              {label: "Saúde", value: "opcao2"},
              {label: "Apoio", value: "opcao3"},
            ]}
            activeTab={activeTab}
            onPress={(value) => setActiveTab(value as "opcao1" | "opcao2" | "opcao3")}
          />
          

        <CardInfoPerfil activeTab={activeTab} />
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
