import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
  Keyboard,
  Platform,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useRouter } from "expo-router";
import Reanimated, { Easing, FadeIn, Keyframe, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
export default function index() {
  const router = useRouter();
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.3, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <ScrollView
      contentContainerStyle={globalStyles.scrollBackground}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Reanimated.View style={globalStyles.background}
        entering={FadeIn.duration(1000)}
        
      >
        <Reanimated.Image
          source={require("../assets/heart-pulse-inicio.png")}
          style={[
              { width: 120, height: 120 },
                animatedStyle,
                ]}resizeMode="contain"/>
                
        <Text style={globalStyles.titulo}>Saúde Mania</Text>

        <Text style={globalStyles.subTitulo}>A nossa mania é a sua saúde</Text>
        <TouchableOpacity 
          style={globalStyles.buttonLogin}
          onPress={() => router.push("/login")}         
        >
          <Text style={globalStyles.textButton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.buttonLogin}
          onPress={() => router.push("/cadastro")}
        >
          <Text style={globalStyles.textButton}>Cadastro</Text>
        </TouchableOpacity>
      </Reanimated.View>
    </ScrollView>
  );
}
