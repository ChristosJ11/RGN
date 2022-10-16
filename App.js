import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useFonts} from 'expo-font';

import Signin from "./components/welcome";
import Signup from './components/signUp';
import Home from "./components/home"




const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
  if(fontsLoaded){
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily:'Poppins-Black'
        },
      }}>
         <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: 'Sign In' }}
        />
         <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' ,
         
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
};
}
export default App;