import {useSelector} from 'react-redux';
import {RootState} from '@/redux/store';
import {StyleSheet, View, Text} from 'react-native';

export default function SummaryScreen() {
  const text = useSelector((state: RootState) => state.input.text);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.summaryText}>Current Text: {text}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 18,
  },
});
