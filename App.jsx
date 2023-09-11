import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

import Login from './src/screens/Login';
import Home from './src/screens/Home';

const Stack = createNativeStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App