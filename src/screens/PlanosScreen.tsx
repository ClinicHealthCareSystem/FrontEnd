import React, { useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TabsNavegation from '../components/tabsNavegation';
import HeaderHome from '../components/headerHome';
import styles from '../styles/planos';
import planos from '../styles/planos';

export default function Planos(){
  return( 
    <View style={planos.background}>
      <HeaderHome />
      <ScrollView style={planos.background}>
        <View style={planos.section}>
          <View style={planos.cardCaixa}>
            <View style={planos.card}>
              <Text style={planos.titlecard}>plano A</Text>
              <Text style={planos.descricaocard}>descricao</Text>
              <TouchableOpacity style={planos.buttoncard}>
                <Text style={planos.buttoncardtext}>assinar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={planos.section}>
          <View style={planos.cardCaixa}>
            <View style={planos.card}>
              <Text style={planos.titlecard}>plano B</Text>
              <Text style={planos.descricaocard}>descricao</Text>
              <TouchableOpacity style={planos.buttoncard}>
                <Text style={planos.buttoncardtext}>assinar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={planos.section}>
          <View style={planos.cardCaixa}>
            <View style={planos.card}>
              <Text style={planos.titlecard}>plano C</Text>
              <Text style={planos.descricaocard}>descricao</Text>
              <TouchableOpacity style={planos.buttoncard}>
                <Text style={planos.buttoncardtext}>assinar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
      <TabsNavegation />
      </View>

      
   );
 }