import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import TabsNavegation from '../components/tabsNavegation';
import HeaderHome from '../components/headerHome';
import planos from '../styles/planos';

export default function Planos() {
  return (
    <View style={planos.background}>
      <HeaderHome />
      <ScrollView style={planos.background}>


        <View style={planos.card}>
          <Text style={planos.titlecard}>Plano A</Text>
          <Text style={planos.price}>R$ 89,90/mês</Text>
          <Text style={planos.subtitle}>Perfeito para uso individual</Text>
          <Text style={planos.descricaocard}>
          </Text>

          <TouchableOpacity style={planos.buttoncard}>
            <Text style={planos.buttoncardtext}>Assinar</Text>
          </TouchableOpacity>
        </View>

        

      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
