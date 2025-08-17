import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "../styles/termos";
import { useRouter } from "expo-router";
export function TermosServico(){

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({});
      const router = useRouter();

    return (
            <View style={styles.background}>
                <View style={styles.caixa}>
                
                <Text style={styles.tittle}>Termos de Serviço</Text>
                <ScrollView style={styles.scrollTermo}>
                    <Text style={styles.termoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis pulvinar vestibulum. Cras dapibus, ligula ut aliquet
                tristique, lorem massa vulputate nisi, at rutrum nulla erat
                vitae nulla. {"\n\n"}Você deve concordar com os termos para
                continuar o cadastro.
                    </Text>
                </ScrollView>

                <View style={styles.areaButton}>
                    <TouchableOpacity style={styles.termoButton}>
                        <Text style={styles.termoButtonText} onPress={() => router.replace("/cadastro")}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.termoButton}>
                        <Text style={styles.termoButtonText}>Aceitar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
    )
}