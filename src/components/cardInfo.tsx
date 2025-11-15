import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import styles from "../styles/TabStyles/perfil";
import {
  maskCPF,
  maskPhone,
  unmaskCPF,
  unmaskPhone,
  validateAddress,
  validateEmail,
  validatePhone,
} from "../utils/userValidations";
import { useUpdateInfoUser } from "../hooks/useUpdateInfoUser";

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
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const { error, success, handleUpdateUser } = useUpdateInfoUser();

  const [touched, setTouched] = useState({
    cpf: false,
    email: false,
    phone: false,
    address: false,
  });

  useEffect(() => {
    if (profile) {
      setCpf(maskCPF(profile.CPF));
      setPhone(maskPhone(profile.phone));
      setEmail(profile.email);
      setAddress(profile.address || "");
    }
  }, [profile]);

  const phoneError = touched.phone ? validatePhone(phone) : "";
  const emailError = touched.email ? validateEmail(email) : "";
  const addressError = touched.address ? validateAddress(address) : "";

  const updateUser = () => {
    setTouched({
      cpf: true,
      email: true,
      phone: true,
      address: true,
    });

    const currentPhoneError = validatePhone(phone);
    const currentEmailError = validateEmail(email);
    const currentAddressError = validateAddress(address);

    if (!currentPhoneError && !currentEmailError && !currentAddressError) {
      const unmaskedPhone = unmaskPhone(phone);
      const unmaskedCpf = unmaskCPF(cpf);

      handleUpdateUser(unmaskedCpf, email, unmaskedPhone, address);
      setIsEditing(false);
    }
  };

  const [iconColor, setIconColor] = useState("white");
  const [iconName, setIconName] = useState<"account-edit" | "check">(
    "account-edit"
  );

  const handlePressEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
      setIconColor("#FFD700");
      setIconName("account-edit");
      return;
    }

    updateUser();

    setIconName("check");
    setIconColor("#07C66A");

    setTimeout(() => {
      setIsEditing(false);
      setIconName("account-edit");
      setIconColor("white");
    }, 800);
  };

  return (
    <View>
      {activeTab === "opcao1" && (
        <View style={styles.cardInfo}>
          <View style={styles.cardInfoTittle}>
            <Text style={styles.tittleInfo}>Informações Pessoais</Text>

            <TouchableOpacity
              style={styles.editButton}
              onPress={handlePressEdit}
            >
              <MaterialCommunityIcons
                name={iconName}
                size={30}
                color={iconColor}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.labelInfo}>Nome:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={false}
              value={profile?.name || ""}
            />
          </View>

          <Text style={styles.labelInfo}>CPF:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={false} value={cpf} />
          </View>

          <Text style={styles.labelInfo}>Email:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            />
          </View>

          {emailError && (
            <Text style={{ color: "red", textAlign: "center" }}>
              {emailError}
            </Text>
          )}

          <Text style={styles.labelInfo}>Telefone:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              onChangeText={(text) => setPhone(maskPhone(text))}
              value={phone}
              maxLength={15}
              keyboardType="numeric"
              onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
            />
          </View>

          {phoneError && (
            <Text style={{ color: "red", textAlign: "center" }}>
              {phoneError}
            </Text>
          )}

          <Text style={styles.labelInfo}>Idade:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={false}
              value={profile?.age?.toString() || ""}
            />
          </View>

          <Text style={styles.labelInfo}>Endereço:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={isEditing}
              onChangeText={setAddress}
              value={address}
              onBlur={() => setTouched((prev) => ({ ...prev, address: true }))}
            />
          </View>

          {addressError && (
            <Text style={{ color: "red", textAlign: "center" }}>
              {addressError}
            </Text>
          )}

          {success && (
            <Text style={{ color: "#07C66A", textAlign: "center" }}>
              {success}
            </Text>
          )}

          {error && (
            <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
          )}
        </View>
      )}

      {activeTab === "opcao2" && (
        <View style={styles.cardInfo}>
          <Text style={styles.tittleInfo}>Informações de Saúde</Text>

          <View style={styles.textInfoSaude}>
            <Text style={styles.labelInfoSaude}>Tipo sanguíneo</Text>
            <Text style={styles.labelInfoSaude}>{profile?.blood || "-"}</Text>
          </View>

          <View style={styles.textInfoSaude}>
            <Text style={styles.labelInfoSaude}>Altura</Text>
            <Text style={styles.labelInfoSaude}>{profile?.height || "-"}</Text>
          </View>

          <View style={styles.textInfoSaude}>
            <Text style={styles.labelInfoSaude}>Peso</Text>
            <Text style={styles.labelInfoSaude}>{profile?.weight || "-"}</Text>
          </View>

          <View style={styles.textInfoSaude}>
            <Text style={styles.labelInfoSaude}>IMC</Text>
            <Text style={styles.labelInfoSaude}>{profile?.IMC || "-"}</Text>
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
              Adicionar novo contato{" "}
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
