import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './Screens/StackNavigator/Tab';
import Moviedetails from './Screens/StackNavigator/Moviedetails';
import Splash from './Components/Splash';
import Seatbooking from './Screens/StackNavigator/Seatbooking';
import Getstarted from './Components/Getstarted';
import Signup from './Screens/StackNavigator/Signup';
import Login from './Screens/StackNavigator/Login';


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
      options={{animation:'flip'}}
      />
      <Stack.Screen name="Details" component={Moviedetails} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Booking" component={Seatbooking} options={{animation:'slide_from_bottom'}} />
      <Stack.Screen name="Start" component={Getstarted} options={{animation:'slide_from_bottom'}} />
      <Stack.Screen name="Signup" component={Signup} options={{animation:'ios'}} />
      <Stack.Screen name="Login" component={Login} options={{animation:'ios'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}