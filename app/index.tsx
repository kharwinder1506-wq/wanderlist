
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import PlaceCard from '../src/components/PlaceCard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wanderlist</Text>
        <Text style={styles.tagline}>
          My favourite places and travel ideas
        </Text>
      </View>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.heading}>Places I Want to Visit</Text>

        <PlaceCard
          name="Banff National Park"
          category="Nature"
          notes="I want to visit the mountains and enjoy the beautiful views."
        />

        <PlaceCard
          name="Old Montreal"
          category="City"
          notes="I would like to explore the streets and take some pictures."
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#dceee8',
    padding: 25,
    paddingTop: 55,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 15,
    marginTop: 8,
    color: '#555555',
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});   