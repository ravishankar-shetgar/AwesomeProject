import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/rootNavigation';
import Store from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
