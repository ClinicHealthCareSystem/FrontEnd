import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import tabButtonPerfil from "../stylesComponents/tabButtonPerfil";
import { FadeIn, FadeOut } from 'react-native-reanimated';
import Reanimated from "react-native-reanimated";

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
    <Reanimated.View style={tabButtonPerfil.tabsCaixa} entering={FadeIn.duration(700)} exiting={FadeOut.duration(500)}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.value} style={ tabButtonPerfil.tabButtonPerfil}
          onPress={() => onPress(tab.value)}>
          <Text style={[tabButtonPerfil.tabTextPerfil,]}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </Reanimated.View>
  );
}
