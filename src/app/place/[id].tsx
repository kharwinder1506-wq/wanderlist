
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function PlaceDetailScreen() {
  const { id, name, category, notes } = useLocalSearchParams<{
    id: string;
    name: string;
    category: string;
    notes?: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {name || 'Place Details'}
      </Text>

      <Text style={styles.label}>
        Category: {category || 'Unknown'}
      </Text>

      <Text style={styles.label}>
        Notes: {notes || 'No notes added'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f4f7f8',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0f766e',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 12,
    color: '#334155',
  },
});
