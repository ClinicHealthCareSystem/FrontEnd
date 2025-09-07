import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/login";
import {Background} from "../globals/globalstyle";
import Checkbox from "../components/checkbox";
import MedicamentoCard from "../components/MedicamentoCard";
import TabsNavegation from "../components/tabsNavegation";
import HeaderHome from "../components/headerHome";
export default function MedicamentosScreen(){
    return (
        <View>
            <HeaderHome/>
            <ScrollView>
                <MedicamentoCard/>
                <Checkbox/>
                <TabsNavegation/>
            </ScrollView>
        </View>
    );
}