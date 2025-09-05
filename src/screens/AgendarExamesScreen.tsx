import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import TabsNavegation from "../components/tabsNavegation";
import HeaderHome from "../components/headerHome";

import styles from "../styles/exames";

export default function Exames() {
    return(
        <View style={styles.background}>
            <HeaderHome/>
            <ScrollView style={{ flex: 1 }}></ScrollView>
            <TabsNavegation/>
        </View>
    )
}