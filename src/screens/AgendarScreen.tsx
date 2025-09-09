import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../components/headerHome";
import TabsNavegation from "../components/tabsNavegation";
import AgendaCard from "../components/agendaCard";

import styles from "../styles/agendar";

export default function AgendarScreen() {
  return (
    <View style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Agendamentos"
          mostrarBusca={false}
          subTitulo="Veja seus agendamentos"
        />
        <ScrollView style={styles.body}>
          <AgendaCard />
          <TouchableOpacity style={styles.Agendar}>
            <Text style={styles.AgendarText}>Agendar Consulta</Text>
          </TouchableOpacity>
        </ScrollView>
        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
}
