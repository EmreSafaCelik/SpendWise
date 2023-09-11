import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';

import {NavigationContainer} from '@react-navigation/native'

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App