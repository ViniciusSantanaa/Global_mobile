import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native';
import { Link } from 'expo-router';

import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link href="/mapas" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Zonas de alagamento</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/alertas" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alertas</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buscar Moto</Text>
        </TouchableOpacity>
      </Link>
   
      <Link href="/sobre" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sobre Nós</Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF9F9',
  },
  button: {
    backgroundColor: '#243B55',
    color: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 20,
    width: '50%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    width: '70%',
    textAlign: "center",
  },
});