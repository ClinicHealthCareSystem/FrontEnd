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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRef, useState, useEffect } from "react";

export default function ChatBotScreen() {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    setMessages((prev) => [...prev, message]);
    setMessage("");
    console.log(message);
  };

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages]);

  return (
    <View style={globalStyle.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderHome
          titulo="Saúde Mania"
          mostrarBusca={false}
          subTitulo="Saúde Mania BOT"
          mostrarVoltar={true}
        />

        <View style={{ flex: 1 }}>
          <ScrollView
            ref={scrollViewRef}
            style={{ flex: 1 }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: messages.length === 0 ? "center" : "flex-end",
              paddingHorizontal: 16,
              paddingVertical: 10,
            }}
            showsVerticalScrollIndicator={false}
          >
            {messages.length === 0 && (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="robot" size={100} color="white" />
              </View>
            )}

            {messages.map((msg, index) => (
              <View key={index} style={styles.mensagem}>
                <Text style={{ fontSize: 16 }}>{msg}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.chatBoxInput}
              placeholder="Digite aqui sua mensagem..."
              onChangeText={setMessage}
              value={message}
              multiline={false}
              returnKeyType="send"
              onSubmitEditing={handleSendMessage}
            />

            <TouchableOpacity
              onPress={handleSendMessage}
              style={[styles.chatBoxButton, globalStyle.button]}
            >
              <Ionicons
                name="arrow-forward-outline"
                style={{ color: "white", fontWeight: "bold" }}
                size={18}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TabsNavegation />
      </SafeAreaView>
    </View>
  );
}
