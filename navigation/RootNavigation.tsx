import ChronicleScreen from '@/app/screens/ChronicleScreen';
import HomeScreen from '@/app/screens/HomeScreen';
import InputedTextScreen from '@/app/screens/InputedTextScreen';
import SummaryScreen from '@/app/screens/SummaryScreen';
import {RootState} from '@/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigationProp, createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// Define props for each Screen. If Screen doesn't take any props, set to undefined.
// https://reactnavigation.org/docs/typescript/#type-checking-the-navigator
export type RootStackInterface = {
  Home: undefined;
  Summary: undefined;
  Chronicle: undefined;
  InputedText: undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackInterface>;

const Stack = createStackNavigator<RootStackInterface>();

export default function RootNavigation() {
  const text = useSelector((state: RootState) => state.input.text);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Summary"
          component={SummaryScreen}
        />
        <Stack.Screen
          name="Chronicle"
          component={ChronicleScreen}
        />
        <Stack.Screen
          name="InputedText"
          component={InputedTextScreen}
          options={{
            title: text
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

