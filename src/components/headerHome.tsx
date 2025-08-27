import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Link, router, Tabs } from "expo-router";
import styles from "../stylesComponents/headerHome";

export default function HeaderHome({
  titulo = "Saúde Mania",
  subTitulo = "",
  mostrarBusca = true,
}) {
  return (
    <View style={styles.headerView}>
      <View style={styles.headerContent}>
        <View style={{ flex: 1 }} />
        <Text style={styles.headerTitle}>{titulo}</Text>
        <TouchableOpacity style={styles.headerNotificationContainer}>
          <Ionicons
            name="notifications"
            size={20}
            color="white"
            style={styles.headerNotifications}
          />
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
