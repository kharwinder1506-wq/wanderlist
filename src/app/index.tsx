
import { useState } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlaceCard from '../components/PlaceCard';
import type { Place, PlaceCategory } from '../lib/types';

const appName = 'Wanderlist';
const categories: PlaceCategory[] = [
  'city',
  'nature',
  'food',
  'other',
];

export default function HomeScreen() {
  const [places, setPlaces] = useState<Place[]>([
    {
      id: '1',
      name: 'Montréal',
      category: 'city',
      notes: 'Explore Old Montréal and its cafés.',
    },
    {
      id: '2',
      name: 'Mount Royal',
      category: 'nature',
      notes: 'Enjoy the walking trails and views.',
    },
  ]);

  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [category, setCategory] = useState('');

  const [nameError, setNameError] = useState('');
  const [notesError, setNotesError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  function addPlace() {
    const cleanName = name.trim();
    const cleanNotes = notes.trim();
    const cleanCategory = category.trim().toLowerCase();

    const validCategory = categories.find(
      (item) => item === cleanCategory
    );

    setNameError(
      cleanName ? '' : 'Please enter a place name.'
    );

    setNotesError(
      notes.length <= 200
        ? ''
        : 'Notes cannot exceed 200 characters.'
    );

    setCategoryError(
      validCategory
        ? ''
        : 'Choose city, nature, food or other.'
    );

    if (!cleanName || notes.length > 200 || !validCategory) {
      return;
    }

    const newPlace: Place = {
      id: Date.now().toString(),
      name: cleanName,
      category: validCategory,
      notes: cleanNotes || undefined,
    };

    setPlaces((current) => [...current, newPlace]);

    setName('');
    setNotes('');
    setCategory('');
    setNameError('');
    setNotesError('');
    setCategoryError('');
  }

  function openPlace(place: Place) {
    router.push({
      pathname: '/place/[id]',
      params: {
        id: place.id,
        name: place.name,
        category: place.category,
        notes: place.notes || '',
      },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>
                Welcome to {appName}
              </Text>
              <Text style={styles.tagline}>
                Keep track of places you want to discover.
              </Text>
            </View>

            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=900',
              }}
              style={styles.image}
            />

            <Text style={styles.sectionTitle}>
              Add a place
            </Text>

            <View style={styles.form}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Québec City"
                value={name}
                onChangeText={setName}
              />
              {nameError ? (
                <Text style={styles.error}>{nameError}</Text>
              ) : null}

              <Text style={styles.label}>
                Notes (optional)
              </Text>
              <TextInput
                style={[styles.input, styles.notesInput]}
                placeholder="What would you like to do there?"
                value={notes}
                onChangeText={setNotes}
                multiline
              />
              <Text style={styles.counter}>
                {notes.length}/200
              </Text>
              {notesError ? (
                <Text style={styles.error}>{notesError}</Text>
              ) : null}

              <Text style={styles.label}>Category</Text>
              <TextInput
                style={styles.input}
                placeholder="city, nature, food or other"
                value={category}
                onChangeText={setCategory}
                autoCapitalize="none"
              />
              {categoryError ? (
                <Text style={styles.error}>{categoryError}</Text>
              ) : null}

              <Pressable
                style={styles.button}
                onPress={addPlace}
              >
                <Text style={styles.buttonText}>
                  Add place
                </Text>
              </Pressable>
            </View>

            <Text style={styles.sectionTitle}>
              My places ({places.length})
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable onPress={() => openPlace(item)}>
            <PlaceCard
              name={item.name}
              category={item.category}
              notes={item.notes}
            />
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            No places added yet.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f8',
  },
  content: {
    padding: 20,
    paddingBottom: 48,
  },
  header: {
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 12,
  },
  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#0f766e',
    textAlign: 'center',
  },
  tagline: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 16,
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 12,
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 26,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 7,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 9,
    paddingHorizontal: 12,
    paddingVertical: 11,
    fontSize: 15,
    marginBottom: 14,
    color: '#0f172a',
  },
  notesInput: {
    minHeight: 78,
    textAlignVertical: 'top',
    marginBottom: 4,
  },
  counter: {
    textAlign: 'right',
    color: '#64748b',
    marginBottom: 12,
    fontSize: 12,
  },
  error: {
    color: '#b91c1c',
    marginTop: -8,
    marginBottom: 12,
    fontSize: 12,
  },
  button: {
    backgroundColor: '#0f766e',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    color: '#64748b',
    marginTop: 20,
  },
});
