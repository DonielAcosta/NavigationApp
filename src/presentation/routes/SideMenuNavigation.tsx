/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';


const Drawer = createDrawerNavigator();
 const dimensions = useWindowDimensions();
export const SideMenuNavigation = () => {
  return (
    <Drawer.Navigator

     drawerContent={(props)=><CustomDrawerContent {...props}/>}
     screenOptions={{

      drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',
      headerShown: false,
      // drawerType: 'slide',
      drawerActiveBackgroundColor: globalColors.primary,
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: globalColors.primary,
      drawerItemStyle :{
        borderRadius:100,
        paddingHorizontal:20,
      },
     }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>
      <View
      style={{
        height:200,
        backgroundColor:globalColors.primary,
        margin:30,
        borderRadius:50,
      }}
      />
      <DrawerItemList {...props}
      />
    </DrawerContentScrollView>
  );

};
