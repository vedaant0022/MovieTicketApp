import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './Screens/StackNavigator/Tab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName='Tab'
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen name="Tab" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}