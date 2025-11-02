import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity, View, Text, Animated} from "react-native";
import HeaderHome from "../../components/headerHome";
import TabsNavegation from "../../components/tabsNavegation";
import HistoricoStyle from "../../styles/MenuStyles/HistoricoStyle";
import { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type HistoricoTipo = 'RECEITA' | 'EXAME' | 'CONSULTA';
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
    isExpanded: boolean;
}

function formatarData(data: string){
    const d = new Date(data);
    return d.toLocaleDateString('pt-BR', {day: '2-digit', month: 'short', year: 'numeric'});

}

const DATA_EXAMPLE: ItemDataEx[]  = [
    {
        id: '1',
        title: 'Hemograma',
    },

    {
        id: '2',
        title: 'Raio-X',
    },

    {
        id: '3',
        title: 'Ultrassonografia'
    }
];

const Item = ({item, onPress, backgroundColor, textColor, isExpanded}: ItemPropsEx) => {
    const animatedHeight = useRef(new Animated.Value(60)).current;
    useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isExpanded ? 150 : 60,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);
  return (
  <TouchableOpacity onPress={onPress} style={[HistoricoStyle.item, {backgroundColor: "#0D47AB"}]}>
    <Animated.View style={{height:animatedHeight}}>
        <Text style={[HistoricoStyle.title, {color: textColor= "white"}]}>{item.title}</Text>
        {isExpanded && <Text>
            <Ionicons name="calendar" size={18} color={"white"} />
            Data da Consulta</Text>
            
        }    

        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Sunt quibusdam eligendi, incidunt consequatur assumenda, vel doloribus
              quae temporibus delectus facilis illum ducimus sint. Quaerat, alias natus modi cumque totam rerum?     */}
    </Animated.View>
  </TouchableOpacity>
  );
};

export default function HistoricoRelatorio(){
    const [selectedId, setSelectedId] = useState<String>();
    

    const renderItem = ({item} : {item: ItemDataEx}) => {
        const backgroundColor = item.id === selectedId  ? '#0e7ffa': '#0ec3faff';
        const color = item.id === selectedId ? 'white' : 'black';
        const isExpanded = item.id === selectedId;


        return(
            <Item
                item={item}
                onPress={() => setSelectedId(prev => prev === item.id ? undefined : item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
                isExpanded={isExpanded}
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