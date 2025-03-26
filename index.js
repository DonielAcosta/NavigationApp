/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/App';

// Redirigir console.log para que también se muestre en la terminal
if (__DEV__) {
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    originalConsoleLog(...args);
    try {
      const { NativeModules } = require('react-native');
      if (NativeModules.DevSettings) {
        NativeModules.DevSettings.addMenuItem;
      }
    } catch (e) {
      originalConsoleLog('Console logs solo disponibles en modo desarrollo.');
    }
  };
}

AppRegistry.registerComponent(appName, () => App);
