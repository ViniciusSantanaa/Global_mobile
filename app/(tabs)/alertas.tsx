import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Alertas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas de Emergência</Text>

      <View style={styles.card}>
        <Text style={styles.local}>
          Centro - SP <Text style={styles.data}>06/06/2025</Text>
        </Text>
        <Text style={styles.situacao}>Situação: Alagamento em andamento</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>
          Marginal Pinheiros <Text style={styles.data}>05/06/2025</Text>
        </Text>
        <Text style={styles.situacao}>Situação: Risco de transbordamento</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>
          Jardins <Text style={styles.data}>04/06/2025</Text>
        </Text>
        <Text style={styles.situacao}>Situação: Enxurrada controlada</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>
          Zona Leste <Text style={styles.data}>04/06/2025</Text>
        </Text>
        <Text style={styles.situacao}>Situação: Garoa</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.local}>
          Tatuapé <Text style={styles.data}>03/06/2025</Text>
        </Text>
        <Text style={styles.situacao}>Situação: Enxurrada Controlada</Text>
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
    color: '#cc0000',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#cc0000',
  },
  local: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  data: {
    fontSize: 14,
    color: '#999',
  },
  situacao: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
