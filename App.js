import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation';
import {getStore, getPersistor} from '@redux/index';

const App = () => {
  const store = getStore();
  const persistor = getPersistor();

  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
