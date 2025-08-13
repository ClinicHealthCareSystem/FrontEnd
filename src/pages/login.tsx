import React from "react";
import {useForm, Controller} from "react-hook-form";
import {
  Text, TextInput, TouchableOpacity,
  View, Image, ScrollView,
} from "react-native";
import styles from "../styles/login";

export default function Login(){
  const {control, handleSubmit, formState: {errors}} = useForm({})
  async function handleSignUp(data: any){
    console.log(data);
    try{
      const response = await fetch(`http://localhost:3000/user/login`,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    }
    catch (error){
      console.log("Não foi possivel criar o usuário" + error);

    }
  }
  return (
    <ScrollView contentContainerStyle={styles.background}>
     <Text style={styles.tittle}>Login</Text>
     <View style={styles.inputCaixa}>
      <Controller control={control} name="CPF" render={({field: {onChange, value}}) =>(
        <TextInput style={styles.input } onChangeText={(text: string)=>onChange(text)} value={value} placeholder="CPF"/>
      )}/>
      </View>


     <View style={styles.inputCaixa}>
      <Controller control={control} name="password" render={({field: {onChange, value}}) =>(
        <TextInput style={styles.input} onChangeText={(text: string)=> onChange(text)} value={value} placeholder="Senha"/>
      )}/>
      
      </View>
<TouchableOpacity><Text style={styles.esqueci}>Esqueceu a senha?</Text> </TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignUp)}>< Text style={styles.buttonText}> Login</Text></TouchableOpacity>

<TouchableOpacity><Text style={styles.cadastro}>Cadastre-se</Text></TouchableOpacity>
    </ScrollView>
  );
}


