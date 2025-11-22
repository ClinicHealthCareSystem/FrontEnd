import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/stylesComponents/termos";
import { useRouter } from "expo-router";
import { PlanosType } from "../utils/authPlanos";

export const TermosPlanos = ({
  onClose,
  onAccept
}: {
  onClose: () => void;
  onAccept: () => void;
}) => {

  return (
    <View style={styles.background}>
      <View style={styles.caixa}>
        <Text style={styles.tittle}>Deseja mudar o plano?</Text>

        <View style={styles.areaButton}>
          
          <TouchableOpacity style={styles.termoButton} onPress={onClose}>
            <Text style={styles.termoButtonText}>Não</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.termoButton} onPress={onAccept}>
            <Text style={styles.termoButtonText}>Sim</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

