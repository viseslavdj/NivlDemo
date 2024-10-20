import {useSelector} from 'react-redux';
import {RootState} from '@/redux/store';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default function ChronicleScreen() {
  const history = useSelector((state: RootState) => state.input.history);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.historyContainer}>
        {history.length > 0 ? (
          history.map((item, index) => (
            <Text key={index} style={styles.historyText}>
              {index + 1}. {item}
            </Text>
          ))
        ) : (
          <Text style={styles.noHistoryText}>No history available yet.</Text>
        )}
      </ScrollView>
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
  historyContainer: {
    width: '100%',
  },
  historyText: {
    fontSize: 16,
    marginVertical: 5,
  },
  noHistoryText: {
    fontSize: 16,
    color: '#888',
  },
});
