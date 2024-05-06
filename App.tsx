import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './Screens/StackNavigator/Tab';
import Moviedetails from './Screens/StackNavigator/Moviedetails';

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
      <Stack.Screen name="Details" component={Moviedetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}