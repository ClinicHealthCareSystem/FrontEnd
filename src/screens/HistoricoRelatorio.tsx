import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, Image, View } from "react-native";
import headerHome from "../stylesComponents/headerHome";
import HeaderHome from "../components/headerHome";

export default function HistoricoRelatorio(){
    return(<ScrollView>
        <HeaderHome ></HeaderHome>
        <ScrollView>
            <View>
                <Text style={{marginTop:50}}>
                    testando espaçamento
                </Text>
            </View>
        </ScrollView>
    </ScrollView>);
}