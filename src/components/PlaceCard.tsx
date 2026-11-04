
import { View, Text, StyleSheet } from 'react-native';

type PlaceCardProps = {
  name: string;
  category: string;
  notes: string;
};

export default function PlaceCard({
  name,
  category,
  notes,
}: PlaceCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
      <Text style={styles.notes}>{notes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 13,
    color: '#666666',
  },
  notes: {
    fontSize: 14,
    marginTop: 8,
    color: '#444444',
  },
});
