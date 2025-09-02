import React, { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TabsNavegation from '../components/tabsNavegation';
import HeaderHome from '../components/headerHome';
import styles from '../styles/planos';
interface PlanProps {
  title: string;
  price: string;
  descriptionPoints: string[];
  isSelected: boolean;
}

const PlanCard = ({ title, price, descriptionPoints, isSelected }: PlanProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[styles.planCard, isSelected && styles.selectedPlanCard, pressed && styles.planCardPressed]}
    >
      <Text style={styles.planTitle}>{title}</Text>
      <Text style={styles.planPrice}>{price}</Text>

      {descriptionPoints.map((point, index) => (
        <Text key={index} style={styles.descriptionText}>
          • {point}
        </Text>
      ))}

      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>ASSINAR</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default function PlanosScreen() {
  const navigation = useNavigation();

  const plans: PlanProps[] = [
    {
      title: 'Essencial',
      price: 'R$ 29,90 / mês',
      descriptionPoints: [
        'Consultas médicas básicas (clínica geral)',
        'Agendamento online em 48h',
        'Cartão digital de beneficiário',
      ],
      isSelected: false,
    },
    {
      title: 'Completo',
      price: 'R$ 59,90 / mês',
      descriptionPoints: [
        'Consultas e exames laboratoriais básicos',
        'Atendimento por telemedicina 24/7',
        'Descontos em odontologia parceira',
        'Acesso a rede de especialistas',
      ],
      isSelected: false,
    },
    {
      title: 'Premium',
      price: 'R$ 99,90 / mês',
      descriptionPoints: [
        'Consultas ilimitadas com especialistas',
        'Exames de imagem inclusos (limite anual)',
        'Cobertura nacional e segunda opinião médica',
        'Atendimento VIP e coordenação de cuidados',
        'Programas de prevenção e bem‑estar',
      ],
      isSelected: true,
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderHome subTitulo="Planos" mostrarBusca={false} />
      <ScrollView contentContainerStyle={styles.plansContainer}>
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </ScrollView>

      {/* Botão voltar no canto inferior esquerdo */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <TabsNavegation />
    </View>
  );
}