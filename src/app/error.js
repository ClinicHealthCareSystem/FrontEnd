import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function ErrorPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página não encontrada 😕</Text>
      <Text style={styles.subtitle}>
        A rota que você tentou acessar não existe.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.replace("/")} // volta para página inicial
      >
        <Text style={styles.buttonText}>Ir para Página Inicial</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
