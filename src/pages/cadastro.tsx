import React from "react";
import { useState } from "react";
import {useForm, Controller} from "react-hook-form";
import {
  Text, TextInput, TouchableOpacity,
  View, Image, ScrollView,
} from "react-native";

import styles from "../styles/cadastro";

export default function Cadastro(){
    const {control, handleSubmit, formState: {errors}} = useForm({})
    function handleSignIn(data: any){
        console.log(data)
    }

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
                <Controller control={control} name="username" render={({field: {onChange, value}}) => (
                    <TextInput style={styles.input} onChangeText={(text: string) => onChange(text)} value={value} placeholder="Digite seu nome"/>
                )}/>
                
                
            </View>
            <View style={styles.inputCaixa}>
                <Text style={styles.label}>Senha</Text>

                <Controller control={control} name="password" render={({field: {onChange, value}}) =>(
                    <TextInput style={styles.input} onChangeText={(text: string) => onChange(text)} value={value} placeholder="Crie sua senha"/>
                )}/>
                
            </View>
        </View>
        <View style={styles.camposCaixa}>
            <View style={styles.inputCaixa}>
                <Text style={styles.label}>CPF</Text>
                <Controller control={control} name="CPF" render={({field: {onChange, value}}) =>(
                    <TextInput style={styles.input} onChangeText={(text: string) => onChange(text)} value={value} placeholder="Digite seu CPF"/>
                )}/>
                
                

            </View>
            <View style={styles.inputCaixa}>
                <Text style={styles.label}>Email</Text>
                <Controller control={control} name="Email" render={({field: {onChange, value}}) =>(
                    <TextInput style={styles.input} onChangeText={(text: string) => onChange(text)} value={value} placeholder="Digite seu Email"/>
                )}/>
                
                

            </View>  
        </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonVoltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCadastrar} onPress={handleSubmit(handleSignIn)}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    </ScrollView>


    );
}