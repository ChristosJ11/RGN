import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from "./components/welcome";
import Signup from './components/signUp';
import Home from "./components/home"




const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
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
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;