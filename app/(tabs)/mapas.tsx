import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zonas de Alagamento</Text>

      <View style={styles.card}>
        <Text style={styles.local}>Marginal Tietê - Ponte das Bandeiras</Text>
        <Text style={styles.chance}>Chance: Alta</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>Avenida do Estado</Text>
        <Text style={styles.chance}>Chance: Média</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>Rua da Mooca</Text>
        <Text style={styles.chance}>Chance: Baixa</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>Vila Prudente</Text>
        <Text style={styles.chance}>Chance: Alta</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>Ipiranga</Text>
        <Text style={styles.chance}>Chance: Média</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>Centro Histórico</Text>
        <Text style={styles.chance}>Chance: Baixa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#FFF9F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: "#2c3e50"
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    borderWidth: 2,
    borderColor: "#2c3e50",
  },
  local: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#2c3e50"
  },
  chance: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
