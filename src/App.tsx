import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigation } from './presentation/routes/SideMenuNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <SideMenuNavigation/>
    </NavigationContainer>
  );
};
