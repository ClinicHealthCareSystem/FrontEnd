import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../components/headerHome";
import TabsNavegation from "../components/tabsNavegation";
import globalStyle from "../global/globalStyles";
import styles from "../styles/chatBot";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function ChatBotScreen() {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    console.log(message);
  };

  return (
    <View style={globalStyle.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Saúde Mania"
          mostrarBusca={false}
          subTitulo="Saúde Mania BOT"
          mostrarVoltar={true}
        />
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <View>
            <View style={styles.chatBox}>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={styles.chatBoxInput}
                  placeholder="Digite aqui sua mensagem..."
                  onChangeText={setMessage}
                  value={message}
                />
                <Ionicons
                  name="arrow-forward-outline"
                  size={30}
                  color={"white"}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={handleSendMessage}
                style={[styles.chatBoxButton, globalStyle.button]}
              >
                <Text style={globalStyle.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
}
