import {RootStackNavigationProp} from '@/navigation/RootNavigation';
import {setText} from '@/redux/slices/inputSlice';
import {RootState} from '@/redux/store';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Keyboard,
  Button,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';


export default function HomeScreen() {
   const dispatch = useDispatch();
   const navigation = useNavigation<RootStackNavigationProp>();
   const text = useSelector((state: RootState) => state.input.text);

   const changeValue = (inputedValue: string) => {
      dispatch(setText(inputedValue));
   }

  return (
    <KeyboardAvoidingView
         style={styles.container}
         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
         keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
      <Pressable
        style={styles.container}
        onPress={() => Keyboard.dismiss()}
      >
        <>
          <Text>
            Welcome to my NivlDemo app.
          </Text>
        </>
        <View style={styles.innerContainer}>
          <TextInput
            placeholder='Input text here'
            value={text}
            onChangeText={changeValue}
            multiline
            numberOfLines={4}
            style={styles.textInput}
          />
          <View>
            <Text style={styles.inputedValue}>
              Inputed value will be shown below:
            </Text>
            <Text>
              {text}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Summary"
              onPress={() => navigation.navigate('Summary')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="History"
              onPress={() => navigation.navigate('Chronicle')}
            />
          </View>
        </View>

        <View style={styles.belowButtonContainer}>
          <View style={styles.button}>
            <Button
              title={`${text}`}
              disabled={text.length === 0}
              onPress={() => navigation.navigate('InputedText')}
            />
          </View>
        </View>

      </Pressable>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginTop: 5,
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    justifyContent: 'center',
  },
  textInput: {
    position: 'relative',
    margin: 10,
    padding: 5,
    backgroundColor: '#E8E8E8',
  },
  inputedValue: {
    margin: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 100,
    width: '80%',
  },
  belowButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 30,
    width: '80%',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});
