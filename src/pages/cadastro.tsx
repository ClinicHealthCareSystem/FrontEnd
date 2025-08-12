import React from "react";
import { useState } from "react";
import {
  Text, TextInput, TouchableOpacity,
  View, Image, ScrollView,
} from "react-native";

import styles from "../styles/cadastro";

export default function Cadastro(){
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        CPF: '',
        email: '',
    })
    return( 
    <ScrollView contentContainerStyle={styles.background}>
        <View style={styles.caixa}>
            <Image source={require("../assests/heart-pulse (2).png")}
            style = {styles.logo}></Image>
            <Text style={styles.titulo}>Saúde Mania</Text>
            <Text style={styles.subtitulo}>Cadastro</Text>

        <View style={styles.camposCaixa}>
            <View style={styles.inputCaixa}>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput style={styles.input} placeholder="Digite seu nome"/>
            </View>
            <View style={styles.inputCaixa}>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input} placeholder="Crie sua senha"/>
            </View>
        </View>
        <View style={styles.camposCaixa}>
            <View style={styles.inputCaixa}>
                <Text style={styles.label}>CPF</Text>
                <TextInput style={styles.input} placeholder="Digite seu CPF"/>

            </View>
            <View style={styles.inputCaixa}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="Digite seu Email"/>

            </View>  
        </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonVoltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCadastrar}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </ScrollView>


    );
}