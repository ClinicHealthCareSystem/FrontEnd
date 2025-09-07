import React, {useState} from "react";
import { Text, View, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesComponents/MedicamentoCard";


export default function MedicamentoCard() {
    const [liked, setLiked] = useState(false);

  return (
    <View style={styles.CardContainer}>
      <Text style={styles.DateHour}>(Segunda-Feira)</Text>
      <View style={styles.infoCardView}>
      <Text style={styles.labelCardView}>Nome do profissional</Text>
      <Text style={styles.textCardView}>Fernando</Text>
      </View>

      <View style={styles.infoCardView}>
      <Text style={styles.labelCardView}>Dipirona | 6 em 6h</Text>
      <Text style={styles.textCardView}>13h</Text>
      
      <TouchableOpacity  onPress={() => setLiked(!liked)}>
        <Ionicons name={liked ? "checkbox" : "checkbox-outline"}
          size={40}
          color={liked ? "green" : "white"}
          />
      </TouchableOpacity>
      <Text style={styles.textCardView}>19h</Text>
      <TouchableOpacity onPress={() => setLiked(!liked)}>
        <Ionicons name={liked ? "checkbox" : "checkbox-outline"}
          size={40}
          color={liked ? "green" : "white"}
          />
      </TouchableOpacity>
      </View>

      <View style={styles.infoCardView}>
      <Text style={styles.labelCardView}>Parecetamol | 1 caixa</Text>
      <Text style={styles.textCardView}>13h</Text>
      <Text style={styles.textCardView}>21h</Text>
      </View>

      <View style={styles.caixaButtonOption}>
  
          <TouchableOpacity style={styles.buttonCardEdit}>
            <Text style={styles.buttonTextCardView}>Reagendar</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.buttonCardCancel}>
            <Text style={styles.buttonTextCardView}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
            <Text style={styles.textAll} >Ver todos os medicamentos</Text>
            </TouchableOpacity>
        </View>
      </View>
    
  );
}
