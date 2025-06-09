import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import api from '@/lib/api';

export default function Home() {
  const [nivel, setNivel] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/nivel')
      .then(res => {
        setNivel(res.data.nivel);
      })
      .catch(err => {
        console.error("Erro ao buscar nível:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status em Tempo Real</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={styles.content}>Nível da água: {nivel}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  content: { fontSize: 18 },
});
