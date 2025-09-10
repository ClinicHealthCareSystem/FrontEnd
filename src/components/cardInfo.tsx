import { Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../styles/perfil";
type Props = {
  activeTab: "opcao1" | "opcao2" | "opcao3";
};
export default function CardInfoPerfil({ activeTab }: Props) {
  return (
    <View style={styles.cardInfo}>
      {activeTab === "opcao1" && (
        <>
          <Text style={styles.tittleInfo}>Informações</Text>
          <Text style={styles.labelInfo}>Nome:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={false}
              placeholder="José"
            />
          </View>

          <Text style={styles.labelInfo}>Email:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={false}
              placeholder="Jose@gmail.com"
            />
          </View>

          <Text style={styles.labelInfo}>Telefone:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={false}
              placeholder="(85) 9 9999-9999"
            />
          </View>

          <Text style={styles.labelInfo}>Data de Nascimento:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={false}
              placeholder="01/01/2001"
            />
          </View>

          <Text style={styles.labelInfo}>Endereço:</Text>
          <View style={styles.textInfo}>
            <TextInput
              style={styles.inputInfo}
              editable={false}
              placeholder="Rua A 10"
            />
          </View>
        </>
      )}

      {activeTab === "opcao2" && (
        <>
          <Text style={styles.tittleInfo}>Informações de saúde</Text>

          <Picker>
            <Picker.Item label="Possui diabetes?" value={null} />
            <Picker.Item label="Serviço 1" value="Serviço 1" />
            <Picker.Item label="Serviço 2" value="Serviço 2" />
            <Picker.Item label="Serviço 3" value="Serviço 3" />
          </Picker>

          <Picker>
            <Picker.Item label="Possui Doenças Veneras" value={null} />
            <Picker.Item label="Serviço 1" value="Serviço 1" />
            <Picker.Item label="Serviço 2" value="Serviço 2" />
            <Picker.Item label="Serviço 3" value="Serviço 3" />
          </Picker>

          <Picker>
            <Picker.Item label="Possui doença cronicas" value={null} />
            <Picker.Item label="Serviço 1" value="Serviço 1" />
            <Picker.Item label="Serviço 2" value="Serviço 2" />
            <Picker.Item label="Serviço 3" value="Serviço 3" />
          </Picker>

          <Picker>
            <Picker.Item label="Selecione um serviço" value={null} />
            <Picker.Item label="Serviço 1" value="Serviço 1" />
            <Picker.Item label="Serviço 2" value="Serviço 2" />
            <Picker.Item label="Serviço 3" value="Serviço 3" />
          </Picker>
        </>
      )}
    </View>
  );
}
