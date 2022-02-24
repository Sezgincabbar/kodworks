import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FavoritesProvider from './Context/Provider';
import JobStack from './Navigator/JobStack';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const Router = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <JobStack />
      </NavigationContainer>
    </FavoritesProvider>
  );
};

export default Router;
