import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View} from "react-native";
import HeaderHome from "../components/headerHome";
import TabsNavegation from "../components/tabsNavegation";
import HistoricoStyle from "../styles/HistoricoStyle";

type HistoricoTipo = 'RECEITA' | 'EXAME' | 'CONSULTA';
//ainda não falei com o fernando sobre como vai ser a estrutura de um exame em sí, mas creio que assim ja da pra começar, qualquer coisa eu altero :)
type HistoricoItem = {
    id: string;
    tipo: HistoricoTipo;
    titulo: string;
    data: string;
    medico: string;
    status?: 'DISPONIVEL' | 'EXPIRADO' | 'PENDENTE';
    arquivoURL?: string;
}

function formatarData(data: string){
    const d = new Date(data);
    return d.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', year: 'numeric'});

}

export default function HistoricoRelatorio(){
    return(
    <SafeAreaView style={HistoricoStyle.safe}>
        <HeaderHome titulo="Histórico"/>
            <View style={HistoricoStyle.body}>
            </View>
        <TabsNavegation/>
    </SafeAreaView>);
}