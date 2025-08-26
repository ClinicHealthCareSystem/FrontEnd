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
import { useRouter } from "expo-router";
import headerHome from "../stylesComponents/headerHome";


export default function HeaderHome({
  titulo = "Saúde Mania",
  subTitulo = "",
  mostrarBusca = true
}){
    return(
        <View style={headerHome.barraAlta}>
                <View style={headerHome .caixaTopo}>
                  <Text style={headerHome .tittle}>{titulo}</Text>
                  <TouchableOpacity>
                    <Ionicons
                      name="notifications"
                      size={20}
                      color="white"
                      style={{ left: 150, bottom: 25 }}
                    />
                  </TouchableOpacity>
                </View>
                {mostrarBusca && (
                <View>
                  <Ionicons
                    name="search"
                    size={20}
                    color="#3284f1"
                    style={{ top: 37, width: 20, marginLeft: 5 }}
                  />
                  <TextInput
                    style={headerHome.search_bar}
                    placeholder="O que você está procurando?"
                  />
                </View>
                )}
              </View>

    );
}