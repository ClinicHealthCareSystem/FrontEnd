import { Text, View, TextInput,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import styles from "../styles/perfil";
type Props = {
  activeTab: "opcao1" | "opcao2" | "opcao3";
};
export default function CardInfoPerfil({ activeTab }: Props) {
  return (
     <View>
    {activeTab === "opcao1" && (
        <View style={styles.cardInfo}>
          <View style={styles.cardInfoTittle}>
          <Text style={styles.tittleInfo}>Informações Pessoais</Text>
          <TouchableOpacity>
          <MaterialCommunityIcons name="account-edit" size={30} color={"white"}/>
          </TouchableOpacity>
          </View>

          <Text style={styles.labelInfo}>Nome:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="José" />
          </View>

          <Text style={styles.labelInfo}>Email:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="Jose@gmail.com" />
          </View>

          <Text style={styles.labelInfo}>Telefone:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="(85) 9 9999-9999" />
          </View>

          <Text style={styles.labelInfo}>Data de Nascimento:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="01/01/2001" />
          </View>

          <Text style={styles.labelInfo}>Endereço:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} placeholder="Rua A 10" />
          </View>
        </View>
      )}

      {activeTab === "opcao2" && (
        <View>
          <View style={styles.cardInfo}>
            <Text style={styles.tittleInfo}>Informações de Saúde</Text>

            <View style={styles.textInfoSaude}>
              <Text style={styles.labelInfoSaude}>Tipo sanguíneo</Text>
              <Text style={styles.labelInfoSaude}>O+</Text>
            </View>

            <View style={styles.textInfoSaude}>
              <Text style={styles.labelInfoSaude}>Altura</Text>
              <Text style={styles.labelInfoSaude}>1,80m</Text>
            </View>

            <View style={styles.textInfoSaude}>
              <Text style={styles.labelInfoSaude}>Peso</Text>
              <Text style={styles.labelInfoSaude}>85,5Kg</Text>
            </View>

            <View style={styles.textInfoSaude}>
              <Text style={styles.labelInfoSaude}>IMC</Text>
              <Text style={styles.labelInfoSaude}>20,70</Text>
            </View>
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.tittleInfo}>Condições de Saúde</Text>
            <View style={styles.textInfoSaudeCond}>
              <View style={styles.textInfoSaudeCondCaixa}>
                <Text style={styles.labelInfoSaudeCond}>Diabetes</Text>
              </View>
              <View style={styles.textInfoSaudeCondCaixa}>
                <Text style={styles.labelInfoSaudeCond}>Hipertensão</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.tittleInfo}>Alergias</Text>
            <View style={styles.textInfoSaudeCond}>
              <View style={styles.textInfoSaudeCondCaixa}>
                <Text style={styles.labelInfoSaudeCond}>Penicilina</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    

    {activeTab === "opcao3" && ( 
      <View style={styles.cardInfo}>
      <Text style={styles.tittleInfo}>Contatos de emergencia</Text>
            <View style={styles.textInfoSaudeContato}>           
              <Text style={styles.labelInfoSaudeContato}>Contato Principal</Text>
              <Text style={styles.labelInfoSaudeContato}>Contato: (85) 9 999999</Text>
            </View>
            <TouchableOpacity style={styles.buttonAddPhone}>
              <Text style={styles.buttonAddPhoneText}>Adicionar novo contato<MaterialCommunityIcons name="phone-plus" size={18} color={"white"}/></Text>
            </TouchableOpacity>
          </View>
          
     )} 
     </View>    
    

     
    
  );
}
