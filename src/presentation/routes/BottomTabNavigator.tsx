/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-dupe-keys */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,

        // headerShown:false,
        tabBarBadgeStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent', // ← Eliminé la segunda línea duplicada
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
    <Tab.Screen
    name="Tab1"
    options={{ title: 'React', tabBarIcon: ({color}) => (<IonIcon name="logo-react" color={color}/>) }}
    component={Tab1Screen}/>
    <Tab.Screen
    name="Tab2"
    options={{ title: 'Linux', tabBarIcon: ({color}) => (<IonIcon name="logo-tux" color={color}/>) }}
    component={TopTabsNavigator}/>
    <Tab.Screen
    name="Tab3"
    options={{ title: 'JavaScrip', tabBarIcon: ({color}) => (<IonIcon name="logo-javascript" color={color}/>) }}
    component={StackNavigator}/>
    </Tab.Navigator>
  );
};
