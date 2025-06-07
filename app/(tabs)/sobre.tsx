import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Nós</Text>
      <View style={styles.textBackground}>
        <Text style={styles.text}>
        A FloodSafe é uma empresa inovadora dedicada à segurança e prevenção de desastres naturais. Sua principal solução é um sistema inteligente que detecta em tempo real o nível da água em regiões de risco e envia alertas imediatos aos moradores por meio de um aplicativo e notificações no celular. Utilizando sensores e tecnologia de monitoramento avançada, a FloodSafe permite que comunidades estejam sempre informadas e possam agir rapidamente em caso de enchentes, protegendo vidas e reduzindo danos.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F9',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40, 
    fontWeight: 'bold',
    color: '#243B55',
    marginBottom: 30, 
    textAlign: 'center',
  },
  textBackground: {
    backgroundColor: '#fff', 
    padding: 20,
    borderRadius: 10,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  text: {
    fontSize: 19, 
    color: '#2c3e50', 
    textAlign: 'justify', 
    lineHeight: 28, 
  },
});