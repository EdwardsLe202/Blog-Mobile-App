import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from '../screens/IndexScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: 'Blogs' }}/>
      </Stack.Navigator>
    );
  }
  
  export default MainNavigator;