/* eslint-disable react-hooks/exhaustive-deps */
 
import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';



export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
  //         <Text>Menu</Text>
  //       </Pressable>
  //     ),
  //   });
  // }, []);

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu/>
      {/* <Pressable
      onPress={() => navigation.navigate('Products' as never)}
      style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Productos
        </Text>
      </Pressable> */}
      <PrimaryButton
      onPress={() => navigation.navigate('Products')}
      label="Productos"
      />

    <PrimaryButton
      onPress={() => navigation.navigate('Settings')}
      label="Settings"
      />
    </View>
  );
};
