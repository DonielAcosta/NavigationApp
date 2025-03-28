import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IonIcon } from '../../components/shared/IonIcon';
// import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de estar usando Ionicons

export const Tab1Screen = () => {
  return (
    <View style={styles.container}>
      <Text>Tab1 Screen</Text>
      <IonIcon name="rocket-outline"/>
      {/* <Icon name="rocket-outline" size={30} color="#900" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
