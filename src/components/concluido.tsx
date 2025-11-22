import { View, Text, TouchableOpacity } from "react-native";
import CheckAnimation from "../animations/checkAnimation";
import styles from "../styles/stylesComponents/termos";

type Props = {
  onAccept: () => void;
  mensagem?: string;
};

export const Concluido = ({ onAccept, mensagem }: Props) => {
  return (
    <View style={styles.background}>
      <View style={styles.caixa}>
        <View style={styles.scrollTermo}>
          <Text style={styles.termoText}> {mensagem || "Ação concluída com sucesso!"} </Text>
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
