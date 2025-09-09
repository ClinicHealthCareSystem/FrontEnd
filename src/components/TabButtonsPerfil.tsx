import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Link, router, Tabs } from "expo-router";
import { useRouter } from "expo-router";
import tabNavegation from "../stylesComponents/tabNavegation";
import tabButtonPerfil from "../stylesComponents/tabButtonPerfil";

type Props = {
    textTittleButton: string;
    onPress: () => void;
    active: boolean;
    
    
};

export default function TabsButtonPerfil({
    textTittleButton,
    onPress,
    
    
}: Props){
    return(
         
            <TouchableOpacity style={tabButtonPerfil.tabButtonPerfil } onPress={onPress}>
                <Text style={tabButtonPerfil.tabTextPerfil}>{textTittleButton}</Text>
            </TouchableOpacity>                              
       
        

    );
}