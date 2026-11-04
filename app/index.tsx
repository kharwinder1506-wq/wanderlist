import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const appName = 'Wanderlist';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to {appName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});