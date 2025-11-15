import { View, Text, TouchableOpacity } from "react-native";
import CheckAnimation from "../animations/checkAnimation";
import styles from "../styles/stylesComponents/termos";

export const Concluido = ({ onAccept }: { onAccept: () => void }) => {
  return (
    <View style={styles.background}>
      <View style={styles.caixa}>
        <View style={styles.scrollTermo}>
          <Text style={styles.termoText}>Consulta Marcada com Sucesso!</Text>
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
