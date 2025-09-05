import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Link, router, Tabs } from "expo-router";
import { useRouter } from "expo-router";
import tabNavegation from "../stylesComponents/tabNavegation";
import tabButtonPerfil from "../stylesComponents/tabButtonPerfil";
export default function TabsButtonPerfil({
    textTittleButton = ""
}){
    return(
         
            <TouchableOpacity style={tabButtonPerfil.tabButtonPerfil}>
                <Text style={tabButtonPerfil.tabTextPerfil}>{textTittleButton}</Text>
            </TouchableOpacity>                              
       
        

    );
}