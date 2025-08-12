import React,{useState, useEffect} from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView,Dimensions, Keyboard, Platform, } from 'react-native';
import styles from "../styles/telainicial";

export default function TelaIncial(){

    return(
        <ScrollView contentContainerStyle={styles.scrollbackground} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            <View style={styles.background}>
                <Image source={require("../assests/heart-pulse-inicio.png")}/>
                <Text style={styles.titulo}>Saúde Mania</Text>

                <Text style={styles.subTitulo}>
                    A nossa mania é a sua saúde
                </Text>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCadastro}>
                    <Text style={styles.textButton}>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}