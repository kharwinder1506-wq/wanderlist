import { StyleSheet, Text, View } from 'react-native';
import type { Place } from '../lib/types';

type PlaceCardProps = Pick<Place, 'name' | 'category' | 'notes'>;

export default function PlaceCard({ name, category, notes }: PlaceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headingRow}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category.toUpperCase()}</Text>
      </View>
      {notes ? <Text style={styles.notes}>{notes}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', borderRadius: 14, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#e5e7eb' },
  headingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 },
  name: { fontSize: 17, fontWeight: '700', color: '#1f2937', flexShrink: 1 },
  category: { fontSize: 11, fontWeight: '700', color: '#0f766e' },
  notes: { color: '#475569', marginTop: 8, lineHeight: 20 },
});
