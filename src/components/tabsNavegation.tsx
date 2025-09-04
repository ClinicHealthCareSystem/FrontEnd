import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Link, router, Tabs } from "expo-router";
import { useRouter } from "expo-router";
import tabNavegation from "../stylesComponents/tabNavegation";

const goBack = () => {
  router.push("/menu");
}

export default function TabsNavegation() {
  return (
    <View style={tabNavegation.tabNavegation}>
      <TouchableOpacity style={tabNavegation.tabButton} onPress={() => goBack()}>
        <Ionicons name="home" size={30} color="#fff" />
        <Text style={tabNavegation.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tabNavegation.tabButton}>
        <Ionicons name="person" size={30} color="#fff" />
        <Text style={tabNavegation.tabText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tabNavegation.tabButton}>
        <Ionicons name="settings" size={30} color="#fff" />
        <Text style={tabNavegation.tabText}>Config</Text>
      </TouchableOpacity>
    </View>
  );
}
