import {
  Text,TouchableOpacity, View, Image, ScrollView, TextInput,} from "react-native";
  import HeaderHome from "../components/headerHome";
  import TabsNavegation from "../components/tabsNavegation";
import { Ionicons } from "@expo/vector-icons";
  import styles from "../styles/perfil";
  import TabsButtonPerfil from "../components/TabButtonsPerfil";
  
  export default function CardInfoPerfil(){
    return (
        <View style={styles.cardInfo}>
            <Text style={styles.tittleInfo}>Informações</Text>
            <Text style={styles.labelInfo}>Nome:</Text>
            <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="José"/>
            </View>
                           
            <Text style={styles.labelInfo}>Email:</Text>
            <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="Jose@gmail.com"/>
            </View>
                           
            <Text style={styles.labelInfo}>Telefone:</Text>
            <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="(85) 9 9999-9999"/>
            </View>
                           
            <Text style={styles.labelInfo}>Data de Nascimento:</Text>
            <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="01/01/2001"/>
            </View>
                           
            <Text style={styles.labelInfo}>Endereço:</Text>
            <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="Rua A 10"/>
            </View>
            </View>
                         

    );
  }
