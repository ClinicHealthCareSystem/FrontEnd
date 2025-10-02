import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/termos";
import { useRouter } from "expo-router";
import CheckAnimation from "../animations/checkAnimation";
export const Concluido = ({
  onAccept,
}: {
  onAccept: () => void;
}) => {
  const router = useRouter();

  return (
    <View style={styles.background}>
      <View style={styles.caixa}>
        <View style={styles.scrollTermo}>
          <Text style={styles.termoText}>
            Consulta Marcada com Sucesso!
          </Text>
          <CheckAnimation />
        </View>
        <View style={styles.areaButton}>
          <TouchableOpacity style={styles.termoButton} onPress={onAccept}>
            <Text style={styles.termoButtonText}>Aceitar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
