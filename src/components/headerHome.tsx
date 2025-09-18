import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import styles from "../stylesComponents/headerHome";

export default function HeaderHome({
  titulo = "Saúde Mania",
  subTitulo = "",
  mostrarBusca = true,
  mostrarVoltar = false,
}) {
  const router = useRouter();

  return (
    <View style={styles.headerView}>
      <View style={styles.headerContent}>
        
        {mostrarVoltar ? (
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.headerBackButton}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} /> 
        )}

        
        <Text style={styles.headerTitle}>{titulo}</Text>

        
        <TouchableOpacity style={styles.headerRight}>
          <Ionicons name="notifications" size={24} color="white" />
        </TouchableOpacity>
      </View>

      
      {mostrarBusca ? (
        <View>
          <Ionicons
            name="search"
            size={20}
            color="#3284f1"
            style={{ top: 32, width: 20, marginLeft: 5 }}
          />
          <TextInput
            style={styles.search_bar}
            placeholder="O que você está procurando?"
          />
        </View>
      ) : (
        subTitulo && (
          <View style={styles.headerInfo}>
            <Text style={styles.headerInfoText}>{subTitulo}</Text>
          </View>
        )
      )}
    </View>
  );
}
