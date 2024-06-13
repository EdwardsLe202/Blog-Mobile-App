import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigations/MainNavigator';
import { Provider } from './src/context/BlogContext';


export default function App() {
  return (
      <Provider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
  );
}
