import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import HeaderHome from "../../components/headerHome";
import TabsNavegation from "../../components/tabsNavegation";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/TabStyles/perfil";
import TabsButtonPerfil from "../../components/TabButtonsPerfil";
import CardInfoPerfil from "../../components/cardInfo";
import { useState } from "react";
import { useProfile } from "../../hooks/useProfile";

export default function Perfil() {
  const [activeTab, setActiveTab] = useState<"opcao1" | "opcao2" | "opcao3">(
    "opcao1"
  );
  const { profile, loading, error } = useProfile();

  return (
    <View style={styles.background}>
      <HeaderHome mostrarBusca={false} titulo="Meu Perfil" />
      <ScrollView>
        <View style={styles.cardPerfil}>
          {loading ? (
            <ActivityIndicator color="white" size="large" />
          ) : error ? (
            <Text style={{ color: "red" }}>{error}</Text>
          ) : (
            <>
              <View style={styles.avatarCaixa}>
                <Ionicons
                  name="person-circle"
                  style={styles.avatar}
                  size={100}
                  color={"white"}
                />
              </View>

              <Text style={styles.nome}>{profile?.name}</Text>
              <Text style={styles.info}>CPF: {profile?.CPF}</Text>

              <View style={styles.statusAvatar}>
                <View style={styles.planoStatus}>
                  <Text style={styles.planoStatusText}>Plano Básico</Text>
                </View>
                <View style={styles.idSatus}>
                  <Text style={styles.idStatusText}>
                    Telefone: {profile?.phone}
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>

        <TabsButtonPerfil
          tabs={[
            { label: "Pessoal", value: "opcao1" },
            { label: "Saúde", value: "opcao2" },
            { label: "Apoio", value: "opcao3" },
          ]}
          activeTab={activeTab}
          onPress={(value) =>
            setActiveTab(value as "opcao1" | "opcao2" | "opcao3")
          }
        />

        <CardInfoPerfil activeTab={activeTab} />
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
