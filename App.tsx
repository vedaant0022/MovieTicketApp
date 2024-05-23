import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './Screens/StackNavigator/Tab';
import Moviedetails from './Screens/StackNavigator/Moviedetails';
import Splash from './Components/Splash';
import Seatbooking from './Screens/StackNavigator/Seatbooking';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName='Splash'
      screenOptions={{
        headerShown:false
      }}
      >
      <Stack.Screen name="Tab" component={Tab}
        
      />
      <Stack.Screen name="Details" component={Moviedetails} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Booking" component={Seatbooking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}