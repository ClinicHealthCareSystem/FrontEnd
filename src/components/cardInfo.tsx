import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "../styles/TabStyles/perfil";
import { maskCPF, maskPhone } from "../utils/userValidations";

type Props = {
  activeTab: "opcao1" | "opcao2" | "opcao3";
  profile: {
    name: string;
    CPF: string;
    email: string;
    phone: string;
    age: number;
    address: string;
    blood: string;
    height: string;
    weight: string;
    IMC: string;
    phoneHelp: string;
  } | null;
};

export default function CardInfoPerfil({ activeTab, profile }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View>
      {activeTab === "opcao1" && (
        <View style={styles.cardInfo}>
          <View style={styles.cardInfoTittle}>
            <Text style={styles.tittleInfo}>Informações Pessoais</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setIsEditing(!isEditing)}
            >
              <MaterialCommunityIcons
                name={isEditing ? "check" : "account-edit"}
                size={30}
                color={"white"}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.labelInfo}>Nome:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              value={profile?.name || ""}
              placeholder="Nome"
            />
          </View>

          <Text style={styles.labelInfo}>CPF:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              value={maskCPF(profile?.CPF) || ""}
              placeholder="CPF"
            />
          </View>

          <Text style={styles.labelInfo}>Email:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              value={profile?.email || ""}
              placeholder="Email"
            />
          </View>

          <Text style={styles.labelInfo}>Telefone:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              value={maskPhone(profile?.phone) || ""}
              placeholder="Telefone"
            />
          </View>

          <Text style={styles.labelInfo}>Idade:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              value={profile?.age?.toString() || ""}
              placeholder="Idade"
            />
          </View>

          <Text style={styles.labelInfo}>Endereço:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              value={profile?.address || ""}
              placeholder="Endereço"
            />
          </View>
        </View>
      )}

      {activeTab === "opcao2" && (
        <View>
          <View style={styles.cardInfo}>
            <Text style={styles.tittleInfo}>Informações de Saúde</Text>

            <View style={styles.textInfoSaude}>
              <Text style={styles.labelInfoSaude}>Tipo sanguíneo</Text>
              <Text style={styles.labelInfoSaude}>{profile?.blood || "-"}</Text>
            </View>

            <View style={styles.textInfoSaude}>
              <Text style={styles.labelInfoSaude}>Altura</Text>
              <Text style={styles.labelInfoSaude}>
                {profile?.height || "-"}
              </Text>
            </View>

            <View style={styles.textInfoSaude}>
              <Text style={styles.labelInfoSaude}>Peso</Text>
              <Text style={styles.labelInfoSaude}>
                {profile?.weight || "-"}
              </Text>
            </View>

            <View style={styles.textInfoSaude}>
              <Text style={styles.labelInfoSaude}>IMC</Text>
              <Text style={styles.labelInfoSaude}>{profile?.IMC || "-"}</Text>
            </View>
          </View>
        </View>
      )}

      {activeTab === "opcao3" && (
        <View style={styles.cardInfo}>
          <Text style={styles.tittleInfo}>Contatos de Emergência</Text>
          <View style={styles.textInfoSaudeContato}>
            <Text style={styles.labelInfoSaudeContato}>Contato Principal</Text>
            <Text style={styles.labelInfoSaudeContato}>
              {profile?.phoneHelp
                ? `Contato: ${maskPhone(profile.phoneHelp)}`
                : "Nenhum contato registrado"}
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonAddPhone}>
            <Text style={styles.buttonAddPhoneText}>
              Adicionar novo contato
              <MaterialCommunityIcons
                name="phone-plus"
                size={18}
                color={"white"}
              />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
