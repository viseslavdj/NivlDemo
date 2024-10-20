import {StyleSheet, View, Text} from 'react-native';

export default function InputedTextScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nothing}>Nothing to see here, beside title.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  nothing: {
    fontSize: 18,
  }
});
