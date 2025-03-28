import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export type RootStackParams = {  // Corrige de RooStackParams a RootStackParams
  Home: undefined,
  Product: {id: number, name: string},
  Products: undefined,
  Profile: undefined,
  Settings: undefined,
}


const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator = () =>{

   const navigator = useNavigation();

   useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    });
   }, [navigator]);
  return (
    <Stack.Navigator screenOptions={{
      headerShown:true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      },
     }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
