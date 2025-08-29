import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity, View, Text} from "react-native";
import HeaderHome from "../components/headerHome";
import TabsNavegation from "../components/tabsNavegation";
import HistoricoStyle from "../styles/HistoricoStyle";
import { useState } from "react";

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
type ItemDataEx = {
    id: string;
    title: string;
};

type ItemPropsEx = {
    item: ItemDataEx;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
}

function formatarData(data: string){
    const d = new Date(data);
    return d.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', year: 'numeric'});

}

const DATA_EXAMPLE: ItemDataEx[]  = [
    {
        id: '1',
        title: 'Card 1',
    },

    {
        id: '2',
        title: 'Card 2',
    },

    {
        id: '3',
        title: 'Card 3'
    }
];

const Item = ({item, onPress, backgroundColor, textColor}: ItemPropsEx) => (
  <TouchableOpacity onPress={onPress} style={[HistoricoStyle.item, {backgroundColor}]}>
    <Text style={[HistoricoStyle.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function HistoricoRelatorio(){
    const [selectedId, setSelectedId] = useState<String>();

    const renderItem = ({item} : {item: ItemDataEx}) => {
        const backgroundColor = item.id === selectedId  ? '#5a96a5ff': '#0ec3faff';
        const color = item.id === selectedId ? 'white' : 'black'

        return(
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    }
    return(
    <SafeAreaView style={HistoricoStyle.safe}>
        <HeaderHome titulo="Histórico"/>
            <View style={HistoricoStyle.body}>
                <FlatList
                    data={DATA_EXAMPLE}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
            </View>
        <TabsNavegation/>
    </SafeAreaView>);
}