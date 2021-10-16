import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/navigation/MainSreen';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './src/reducers';
const logger = createLogger({ collapsed: true });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
