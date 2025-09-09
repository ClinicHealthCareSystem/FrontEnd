import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import tabButtonPerfil from "../stylesComponents/tabButtonPerfil";

type Tab ={
label: string;
value: string;
};


type Props = {
  tabs: Tab[];
  activeTab: string;
  onPress: (value: string) => void;
};

export default function TabsButtonPerfil({ tabs,  onPress }: Props) {
  return (
    <View style={tabButtonPerfil.tabsCaixa}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.value} style={ tabButtonPerfil.tabButtonPerfil}
          onPress={() => onPress(tab.value)}>
          <Text style={[tabButtonPerfil.tabTextPerfil,]}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
